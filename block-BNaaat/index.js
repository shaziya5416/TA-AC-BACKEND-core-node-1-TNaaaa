var http= require(`http`);
var fs = require(`fs`);
var url= require(`url`);

var server=http.createServer(handleRequest);

function handleRequest(req,res){
  var parsedUrl=url.parse(req.url);
  var pathname=parsedUrl.pathname
  console.log(parsedUrl,req.method);
  if(req.method==="GET" && pathname==="/file"){
      res.setHeader(`Content-Type`,`text/html`);
      fs.readFile(`./node.html`,(err,content)=>{
           if(err) console.log(err);
           res.end(content);
      })
  }
  else 
  if(req.method==="GET" && pathname==="/stream"){
    res.setHeader(`Content-Type`,`text/html`);
    fs.createReadStream(`./node.html`).pipe(res);
  }
  else{
      res.statusCode=404;
      res.setHeader(`Content-Type`,`text/plain`);
      res.end(`Error!`)

  }
}


server.listen(5555,()=>{
    console.log(`Server listening on port 5000`);
});