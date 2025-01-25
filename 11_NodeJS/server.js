const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
 
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// 測試方式: 
// 1.在terminal 執行 node server
// 2.在聯覽器打 http://localhost:3000