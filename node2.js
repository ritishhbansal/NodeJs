const http = require('http');

function requestListener(req, res){
  console.log(req.url, req.method, req.headers); 

  if(req.url === '/') {
     res.setHeader('Content-Type', 'text-html');
  res.write('<html>');
  res.write('<head><title>Ritish Bansal</title></head>');
  res.write('<body><h1>Welcome to Home</h1></body>');
  res.write('</html>');
  return res.end();

  } else if(req.url === '/product'){
     res.setHeader('Content-Type', 'text-html');
  res.write('<html>');
  res.write('<head><title>Ritish Bansal</title></head>');
  res.write('<body><h1>Chech-Out our products</h1></body>');
  res.write('</html>');
  return res.end();

  } else {
     res.setHeader('Content-Type', 'text-html');
  res.write('<html>');
  res.write('<head><title>Ritish Bansal</title></head>');
  res.write('<body><h1>TU bss sikhle Node js ko fir sbh dekha jayga</h1></body>');
  res.write('</html>');
  return res.end();
  }
}

const server = http.createServer(requestListener);

// server.listen(3030);//this number is port number

const number = 3030;
server.listen(number, () => {
  console.log('Server running at http://localhost:${number}');
});