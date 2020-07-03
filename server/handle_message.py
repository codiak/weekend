import random
import requests
import os


def get_hasura_headers():
    api_token = os.environ.get("X_HASURA_ADMIN_SECRET")
    return {'x-hasura-admin-secret': api_token}

def first_value(obj, key):
    if key not in obj:
        return None
    val = obj[key][0]['value']
    if not val:
        return None
    return val

def list_get(l, i):
    try:
        return l[i]
    except IndexError:
        return {}

def get_homes():
    url = 'http://ec2-52-86-111-85.compute-1.amazonaws.com:8080/v1/graphql'
    json = { 'query' : '''
        query MyQuery {
            homes(where: {owner_name: {_eq: "'''+'cody'+'''"}}) {
                owner_name
                name
                id
                built_date
            }
        }
    '''}
    res = requests.post(url=url, json=json, headers=get_hasura_headers()).json()
    print(res)
    homes = res['data'].get('homes', [])
    return homes

def create_home(name: str):
    url = 'http://ec2-52-86-111-85.compute-1.amazonaws.com:8080/v1/graphql'
    json = { 'query' : '''
        mutation MyQuery($name: String = "'''+name+'''", $owner: String = "cody") {
            insert_homes(objects: {name: $name, owner_name: $owner}) {
                returning {
                id
                name
                owner_name
                }
            }
        }
    ''' }
    r = requests.post(url=url, json=json, headers=get_hasura_headers())

def handle_message(response):
    print(response)
    intents = response.get('intents',[])
    traits = response.get('traits',[])
    entities = response['entities']
    intent = list_get(intents, 0)
    task = first_value(entities, 'home_task:home_task')
    date = first_value(entities, 'wit$datetime:datetime')
    sentiment = first_value(traits, 'wit$sentiment')
    address = first_value(entities, 'wit$location:location')
    reply = 'Ummm... maybe I can help you with your house?' # back up

    if intent['name'] == 'create_reminder':
        if not task:
            return 'What needs to be done at home?'
        reply = f"Great! I'll remind to you to {task}"
        if date:
            reply = reply + f" on " + date
    elif intent['name'] == 'set_up_home':
        reply = "Can't wait to help you with your home. What's the street address?"
    elif intent['name'] == 'set_up_address':
        reply = f"I'll be assisting with and keeping track of {address}, is that right?"
        # TODO: Save street address to db (if incorrect, they will use "set_up_address" again)
        # Check if home exists
        homes = get_homes()
        is_new = True
        for home in homes:
            if home['name'].lower() == address.lower():
                is_new = False
        if is_new:
            create_home(address)
        else:
            reply = f"It looks like we're already set up for {address}"
    elif intent['name'] == 'binary_response':
        # TODO: Handle responses based on previous command
        if sentiment == 'negative':
            reply = "Oh, sorry!"
        else:
            reply = "Okay, great."
    elif intent['name'] == 'add_home_attributes':
        # TODO: Save home attributes
        reply = "Thanks for telling me more about your home, I'll save that information for reference."
    elif intent['name'] == 'greeting':
        greetings = ['Hey! How is your home?', 'Hello 👋', 'Hi!']
        reply = random.choice(greetings)
    # TODO: Save intent to session/user
    # previous_intent = intent['name']
    return reply