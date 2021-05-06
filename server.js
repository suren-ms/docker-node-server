var http = require('http');
var handleRequest = function (request, response) {
  response.writeHead(200);
  
  response.end('Hello from updated Node Server App deployed on ECS Fargate with CodePipeline!');
  
};
var www = http.createServer(handleRequest);
www.listen(8080);
