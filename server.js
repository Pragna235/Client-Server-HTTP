const http = require('http'); 
const hostname = '127.0.0.1'; 
const port = 3000;
const requestListener = function(req,res){ 
res.statusCode = 200; res.setHeader('ContentType','text/plain');
if(req.method==='POST'){
res.end('Hello World\n Welcome to Node Js with POST');
}
if(req.method==='GET'){
res.end('Hello World\n Welcome to Node Js with GET');
}
}
const server = http.createServer(requestListener); 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
