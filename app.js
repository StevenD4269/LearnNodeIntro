// importing a built in module called Http
//This is a core function of node

const http = require("http");
//We use that http object to create a server
//request and response are the most important two objects in all of node
//they hold all the relevant info for server communication
http.createServer((request, response) => {
    //This line is sending back a response to whoever visited the server
    response.end("Hey this is the server talking more");
})
//The .listen tells the server to startr and listen for incoming requests
.listen(5000, () => { console.log("Server is now listening on port 5000"); })