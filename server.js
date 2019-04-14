const http = request('http');

http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("hello world!!!");
  response.end();
}).listen(8888);

