from fastapi import FastAPI, File, UploadFile
from pydantic import BaseModel
from wit import Wit
from dotenv import load_dotenv
from handle_message import handle_message
import os

load_dotenv()
app = FastAPI()
wit_token = os.environ.get("WIT_TOKEN")
client = Wit(access_token=wit_token)


class TextMessage(BaseModel):
    message: str


@app.post('/message')
async def message_post(message: TextMessage):
    if message:
        response = client.message(message) # , context={'session_id':1}
        reply = handle_message(response)
        return {'text': response.get('text'), 'reply': reply}
    else:
        return 'ERROR: "message" property required'


@app.post('/speech')
async def speech_upload(upload: UploadFile = File(...)):
    name, ext = os.path.splitext(upload.filename)
    if ext != '.ogg':
        return "File extension not allowed."
    if upload:
        response = client.speech(upload.file, {'Content-Type': 'audio/ogg'})
        reply = handle_message(response)
        return {'text': response.get('text'), 'reply': reply}
    else:
        return 'ERROR: audio file required'
