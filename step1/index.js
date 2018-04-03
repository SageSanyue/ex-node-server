var http = require('http')
var fs = require('fs')
var url = require('url')
http.createServer(function(){
   var pathObj = url.parse(req.url,true)
   console.log(pathObj)
   switch(pathObj.pathname){
       case '/getWeather':
           var ret
           if(pathObj.city == 'beijing'){
               ret = {
                   city: 'beijing',
                   weather: '阵雨转多云'
               }
           }else{
               ret = {
                   city: pathObj.query.city,
                   weather: '天气未知'
               }
           }
           response.setHeader('Content-Type','text/json',charset='utf-8')
           res.end(JSON.stringify(ret))
           break;
       case '/user/123':
           res.end(fs.readFileSync(__dirname + '/sample/user.tpl'))
           break;
       default:
           res.end(fs.readFileSync(__dirname + '/sample' + pathObj.pathname))
           
   }
}).listen(8080)