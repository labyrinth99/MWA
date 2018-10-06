const http = require("http");
const url = require("url");

http.createServer((req, res) => {
    readFile(req, res);

}).listen(4000, () => {
    console.log("Listening to port 4000");
});

function readFile(req, res) {
    let path = url.parse(req.url, true);
    path = path.query.url;

    if (path) 
    {
        const {fork} = require("child_process");
        const childProcess = fork('readfile.js');

        childProcess.send(path);

        // childProcess.on('error', error => {
        //     res.end(error.message);
        // });

        childProcess.on('message', (msg) => {
            console.log(msg);
            res.writeHead(200, {
                'Content-type': 'text/plain'
            });
            res.end(msg);
        });
    }
}