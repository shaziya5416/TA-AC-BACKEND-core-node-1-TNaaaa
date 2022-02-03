var http= require(`http`);
var url= require(`url`);

var server=http.createServer(handleRequest);

function handleRequest(req,res){
  var parsedUrl=url.parse(req.url);
  var pathname=parsedUrl.pathname
  console.log(parsedUrl,req.method);
  if(req.method==="GET" && pathname==="/"){
      res.setHeader(`Content-Type`,`text/plain`);
      res.end(`Welcome to Homepage`)
  }
  else 
  if(req.method==="GET" && pathname==="/about"){
    res.setHeader(`Content-Type`,`text/html`);
    res.end(`<h2>This is all about Node.js<h2>`)
  }
  else 
  if(req.method==="POST" && pathname==="/about"){
    res.setHeader(`Content-Type`,`application/json`);
    res.end(`{message:This is a post rew}`)
  }
  else{
      res.statusCode=404;
      res.setHeader(`Content-Type`,`text/plain`);
      res.end(`Error!`)

  }

  res.statusCode=201;
  res.setHeader(`Content-Type`,`text/html`);
  res.end(`<h1>Welcome!<h1>`);
}


server.listen(5000,()=>{
    console.log(`Server listening on port 5000`);
});