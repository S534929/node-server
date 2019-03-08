const http = require('http')  // use require to import the Node.js http package

const hostname = 'localhost'    // allows access from remote computers
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
res.write(
"<html>"+
"<head>"+
"<title>My first server side</title>"+
"</head>"+
"<body style='margin:0px;padding:0px;background:pink;color:red;'>"+
"<div id='header' style='width:100%;height:100px;background:purple'>"+
"<center><h1>My first server code</h1></center>"+
"</div>"+
"<div id='body' style='padding-top:100px;'>"+
"<center>"+
"<p>"+
"This is first server app "+
"Hello!!!"
+"</p>"+

"</center>"+


"</div>"+

"</body>"+
"</html>"
)
res.end()
})

server.listen(port, hostname, () => {
  // Tell the user where to find the app (use backtics with variables)
  console.log(`Server running at http://${hostname}:${port}/`)
})