const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.on('error', (err) => {
  console.error('Server error:', err);
  // Add appropriate error handling logic here, such as exiting gracefully or attempting a retry.
});

server.listen(8080);