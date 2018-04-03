var http = require('http')
var server = http.createServer(function(request,response){
  setTimeout(function(){
      response.setHeader('Content-Type','text/html;charset=utf-8')
      response.writeHead(404,'Not Found')
      response.write('<html><head><meta charset="gbk"/></head>')
      response.write('<body><h1>你好<h1></body></html>')
      response.end()
  },2000)  
})

console.log('open http://localhost:8080')
server.listen(8080)