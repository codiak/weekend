// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Send and Fetch home data

export default async (req, res) => {
  let data;
  // res.statusCode = 200;
  // res.end(JSON.stringify({test: 'ok'}));
  if (req.method === 'GET') {
    // const response = await fetch('http://localhost:3042/message', {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    // });
    // if (response.ok) {
      // res.statusCode = data.statusCode;
      data = await import('./home-mock.json');
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
    // } else {
    //   res.statusCode = response.status;
    //   res.end();
    // }
  } else {
    // handle other methods
    console.error("Request method not supported");
  }
}
