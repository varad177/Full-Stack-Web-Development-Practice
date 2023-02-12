// console.log("hello world")
const http = require('http');
//iska matlab hai hame http module ko use krna hai

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('varad here ');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>html_stylling_links_and_buttons</title>
      <style>
          .contain {
              background-color: rgb(255, 255, 13);
              border: solid 4px rgb(3, 238, 255);
              padding: 34px;
              /* margin: 34px; */
              margin: auto;
              width: 720px;
          }
  
          .btn {
              background-color: rgb(14, 10, 247);
              padding: 6px;
              border: none;
              cursor: pointer;
              font-size: 14px;
              border-radius: 4px;
              color: rgb(240, 1, 172);
              font-family: monospace;
  
  
          }
  
          a {
              text-decoration: none;
          }
  
          a:hover {
              color: chartreuse;
              background-color: rgb(56, 2, 2);
              font-family: cursive;
              border: 4px solid rgb(255, 255, 255);
  
          }
          a:visited{
              background-color: rgba(255, 255, 255, 0.414);
          }
        
  
          button:hover {
              color: chartreuse;
              background-color: rgb(56, 2, 2);
              font-family: cursive;
          }
      </style>
  </head>
  
  <body>
      <h3>html_stylling_links_and_buttons</h3>
      <h3>pseudo selector and more designing</h3>
      <div class="contain" id="cont1">
          <h3>this is heading</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem minima ullam iusto illum aut ut
              repellendus? Quod, doloremque praesentium, aliquid aperiam dolorum eveniet provident animi labore deserunt
              ducimus, assumenda facilis! Fugiat quam provident ex.</p>
          <a href="https://google.com" class="btn" >read more</a>
          <button class="btn">contact us</button>
      </div>
  
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});