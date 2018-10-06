var fs = require('fs');
var path = require('path');

process.on("message", (msg) => {
    console.log(msg);
    var readResult = fs.readFile(path.join(__dirname, "/", msg),
        'utf8',
        (error, data) => {
            console.log(data);
            process.send(data);
        });
});