# Weekend

Simple Next and Python apps to get us off the ground.


## Running the UI

Before running, install dependencies from /ui:

```bash
npm install
```

You will also need the following global dependencies:

```bash
npm install -g serverless
```

And either configure serverless with AWS keys or add a ".env" file to /ui.

Running dev:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)


## Deploying the UI

If you have serverless configured simple run:

```bash
serverless --component=wkendNext
```

From the /ui folder.


## Running the Server

Instal requirements from /server:

```bash
pip install -r requirements.txt
```

To run the server for development, use:

```bash
uvicorn main:app --reload
```
