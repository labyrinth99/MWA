const fs=require('fs');
const http=require('http');
const {Subject}=require('rxjs');
const subject=new Subject();

function bla(reqres){
    const src=fs.createReadStream('./big.jpg');
src.pipe(reqres.res);
}
subject.subscribe(bla);
const server=http.createServer();
server.on('request',function(req,res){
// res.writeHead(200,{'Content-Type':'Text/Plain'});
// res.write("hello");

// fs.readFile('./big.jpg',(err,data)=>res.end(data));

// const src=fs.createReadStream('./big.jpg');
// src.pipe(res);

subject.next({req:req, res:res});
});
server.listen(4000,()=>console.log('127.0.0.1'));
