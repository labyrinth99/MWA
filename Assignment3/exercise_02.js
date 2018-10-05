var http = require('http');
var fs = require('fs');

http.createServer((request, response) => {

   

    //////////////////////////////////////////////////////////
    // Method one
    
    fs.readFile("./big.jpg", (error, data) => {
        response.end(data);
    });

     // another method
    //const src = fs.createReadStream("./small.jpg");
    // const src = fs.createReadStream("./big.jpg");
    // src.pipe(response);

    //response.write("hello");
    //response.end();

}).listen(8888, () => {
    console.log("Done");
});