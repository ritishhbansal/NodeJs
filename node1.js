const http = require('http');

function requestListener(req, res){
  console.log(req); 
    process.exit();//stop event loop
}

const server = http.createServer(requestListener);

// server.listen(3030);//this number is port number

const PORT = 3030;
server.listen(PORT, () => {
  console.log('Server running at https://localhost:${PORT}');

});


