from fastapi import FastAPI, File, UploadFile, Header
from pydantic import BaseModel
from wit import Wit
from mangum import Mangum
from dotenv import load_dotenv
from handle_message import handle_message
import os
import jwt
import json
import ssl
from six.moves.urllib.request import urlopen

from cryptography.hazmat.backends import default_backend
from cryptography import x509

load_dotenv()
app = FastAPI()
wit_token = os.environ.get("WIT_TOKEN")
client = Wit(access_token=wit_token)


class TextMessage(BaseModel):
    message: str


@app.get("/health")
async def health_check():
    return "Looking Good"


@app.post("/message")
async def message_post(message: TextMessage, authorization: str = Header(None)):
    print('yeee haw')
    token_header = jwt.get_unverified_header(authorization)
    # {'alg': 'RS256', 'typ': 'JWT', 'kid': 'MjhBNzZERjIzNDJEQzY0MkYzQjBCRjRDNEUxQzZENkQ1RkRCNzk4Qg'
    print(token_header)
    rsa_key = {}
    gcontext = ssl.SSLContext()
    rsa_key = urlopen("http://dev-ak382c1x.auth0.com/pem", context=gcontext).read()
    # jsonurl = urlopen("https://"+"dev-ak382c1x.auth0.com"+"/.well-known/jwks.json", context=gcontext)
    # jwks = json.loads(jsonurl.read())
    # for key in jwks["keys"]:
    #     if key["kid"] == token_header["kid"]:
    #         rsa_key = {
    #             "kty": key["kty"],
    #             "kid": key["kid"],
    #             "use": key["use"],
    #             "n": key["n"],
    #             "e": key["e"]
    #         }
    key = x509.load_pem_x509_certificate(rsa_key,  backend=default_backend())
    public_key = key.public_key()
    print('KEY!')
    print(rsa_key)
    parts = authorization.split()
    token = parts[0] # parts[1] if bearer format
    # Get key secret
    # user = jwt.decode(authorization, rsa_key, token_header['alg'])
    user = jwt.decode(
                token,
                public_key,
                algorithms=[token_header['alg']],
                # audience=API_AUDIENCE,
                issuer="https://"+"dev-ak382c1x.auth0.com"+"/"
            )
    print(user)
    if message:
        response = client.message(message)  # , context={'session_id':1}
        reply = handle_message(response)
        return {"text": response.get("text"), "reply": reply}
    else:
        return 'ERROR: "message" property required'


@app.post("/speech")
async def speech_upload(upload: UploadFile = File(...)):
    name, ext = os.path.splitext(upload.filename)
    if ext != ".ogg":
        return "File extension not allowed."
    if upload:
        response = client.speech(upload.file, {"Content-Type": "audio/ogg"})
        reply = handle_message(response)
        return {"text": response.get("text"), "reply": reply}
    else:
        return "ERROR: audio file required"


handler = Mangum(app)
