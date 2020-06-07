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

def handle_message(response):
    print(response)
    intents = response['intents']
    entities = response['entities']
    intent = intents[0]
    task = first_value(entities, 'house_task:house_task')
    date = first_value(entities, 'wit$datetime:datetime')
    if intent['name'] == 'create_reminder':
        if not task:
            return 'Were you trying to create a reminder?'
        reply = f"Great! I'll remind to you to {task}"
        if date:
            reply = reply + f" on " + date
        return reply
    elif intent['name'] == 'greeting':
        greetings = ['Hey! How is home?', 'Hello 👋', 'Hi!']
        return random.choice(greetings)
    else:
        return 'Ummm... maybe I can help you with your house?'

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