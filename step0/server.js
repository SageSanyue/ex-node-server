var http = require('http')
var server = http.createServer(function(req,res){
   console.log('Love')
   res.setHeader("Content-type","text/html;charset=utf-8")
   res.write('<h1>饥人谷</h1>')
    res.end()
})
server.listen(9000)
