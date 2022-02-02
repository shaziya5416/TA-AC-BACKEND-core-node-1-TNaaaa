var http = require(`http`);


function handleRequest(req,res){
//console.log(req.headers);
console.log(req.method);
console.log(req.url);
}

http.createServer(handleRequest).listen(3000);

