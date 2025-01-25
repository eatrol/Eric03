const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // 讀取 index02.html 檔案
  
  const filePath = path.join(__dirname, 'lucygame.html');

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('File not found');
    } else {
      // 設定表頭位UTF-8以確保不會有亂碼
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    }
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// 測試方式: 
// 1.在terminal 執行 node server02.js
// 2.在terminal 執行 node server
// 2.在聯覽器打 http://localhost:3000