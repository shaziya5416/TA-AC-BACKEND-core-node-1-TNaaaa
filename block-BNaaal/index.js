var http = require(`http`);

http.createServer((req,res)=>{
 res.end("yes");
}).listen(4000);
