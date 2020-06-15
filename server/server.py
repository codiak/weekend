import sys
import random
from wit import Wit
from bottle import Bottle, request, route, run


if len(sys.argv) != 2:
    print('usage: python ' + sys.argv[0] + ' <wit-token>')
    exit(1)
access_token = sys.argv[1]

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

def handle_message(response):
    print(response)
    intents = response.get('intents',[])
    traits = response.get('traits',[])
    entities = response['entities']
    intent = list_get(intents, 0)
    task = first_value(entities, 'house_task:house_task')
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
    elif intent['name'] == 'binary_response':
        # TODO: Handle responses based on previous command
        if sentiment == 'negative':
            reply = "Oh, sorry!"
        else:
            reply = "Okay"
    elif intent['name'] == 'greeting':
        greetings = ['Hey! How is home?', 'Hello 👋', 'Hi!']
        reply = random.choice(greetings)
    previous_intent = intent['name']
    return reply

@route('/message', method='POST')
def message_post():
    body = request.json
    message = body.get('message')
    if message:
        response = client.message(message) # , context={'session_id':1}
        reply = handle_message(response)
        return {'reply': reply}
    else:
        return 'ERROR: "message" property required'


client = Wit(access_token=access_token)
# client.interactive(handle_message=handle_message)


if __name__ == '__main__':
    # Run Server
    run(host='localhost', port=3042, debug=True)