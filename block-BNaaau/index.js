//1
var http= require(`http`);

var server=http.createServer(handleRequest);


function handleRequest(req,res){
    console.log(req,res)
}

server.listen(3000);

//2
var http= require(`http`);

var server=http.createServer(handleRequest);


function handleRequest(req,res){
    res.setHeader(`Content-Type`,`text/plain`);
    res.end("My first server in node js")
}

server.listen(5100);

//3
var http= require(`http`);

var server=http.createServer(handleRequest);


function handleRequest(req,res){
    console.log(req.headers)
    res.end(`${req.headers}`);
}

server.listen(5555);

//4
var http= require(`http`);

var server=http.createServer(handleRequest);


function handleRequest(req,res){
    console.log(req.url ,req.method)
    res.end();
}

server.listen(5566);

//5
var http= require(`http`);

var server=http.createServer(handleRequest);


function handleRequest(req,res){
    console.log(req.url ,req.method)
    res.end();
}

server.listen(7000,()=>{
    console.log("Server is listening on port 7000")
});

//6

var http= require(`http`);

var server=http.createServer(handleRequest);


function handleRequest(req,res){
    res.statusCode=202;
    res.end();
}

server.listen(3333,()=>{
    console.log("Server is listening on port 3333")
});

//7
var http= require(`http`);

var server=http.createServer(handleRequest);


function handleRequest(req,res){
    res.setHeader(`Content-Type`,`text/html`);
    res.end(`<h3> Welcome to AltCampus</h3>`);
}

server.listen(8000,()=>{
    console.log("Server is listening on port 8000")
});

//8
var http= require(`http`);

var server=http.createServer(handleRequest);


function handleRequest(req,res){
    //res.writeHead(200, {`Content-Type`:`text/html`} );
    res.end(`<h3> Welcome to AltCampus</h3>`);
}

server.listen(9000,()=>{
    console.log("Server is listening on port 9000")
});

//9
var http= require(`http`);

var server=http.createServer(handleRequest);


function handleRequest(req,res){
    res.setHeader(`Content-Type`,`applications/json`);
    res.end(`{success: true, message: 'Welcome to Nodejs'}`);
}

server.listen(8888,()=>{
    console.log("Server is listening on port 8888")
});

//10
var http= require(`http`);
var url= require('url');

var server=http.createServer(handleRequest);


function handleRequest(req,res){
    var urlParsed=url.parse(req.url);
    var pathname=urlParsed.pathname;
    if(req.url==="GET"&&pathname==="/"){
        res.write("Shazia Khan");
        res.end();
    }
    else
    if(req.url==="GET"&&pathname==="/about"){
        res.setHeader(`Content-Type`,`text/html`);
        res.end(`<h3> Welcome to AltCampus</h3>`);
    }
    else{
        res.statusCode=404;
    }
}

server.listen(2345,()=>{
    console.log("Server is listening on port 2345")
});

//11

var http= require(`http`);
var url= require('url');

var server=http.createServer(handleRequest);


function handleRequest(req,res){
    var urlParsed=url.parse(req.url);
    var pathname=urlParsed.pathname;
    if(req.url==="PUT"&&pathname==="/user"){
        res.write("Shazia Khan");
        res.end();
    }
    else
    if(req.url==="GET"&&pathname==="/user"){
        res.setHeader(`Content-Type`,`text/html`);
        res.end(`<h3> Welcome to AltCampus</h3>`);
    }

    else{
        res.statusCode=404;
    }
}

server.listen(4545,()=>{
    console.log("Server is listening on port 4545")
});

