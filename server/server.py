import sys
from wit import Wit

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
    # print(response)
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
    else:
        return 'Ummm... maybe I can help you with your house?'


client = Wit(access_token=access_token)
client.interactive(handle_message=handle_message)
