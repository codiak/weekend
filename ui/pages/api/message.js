// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  let data = {test: 'ok'};
  // res.statusCode = 200;
  // res.end(JSON.stringify({test: 'ok'}));
  if (req.method === 'POST') {
    const response = await fetch('http://localhost:3042/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: req.body //JSON.stringify(req.body)
    });
    if (response.ok) {
      // res.statusCode = data.statusCode;
      data = await response.json();
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
    } else {
      res.statusCode = response.status;
      res.end();
    }
  } else {
    // handle other methods
    console.error("Request method not supported");
  }
}
