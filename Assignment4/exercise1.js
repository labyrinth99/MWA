const {Subject}=require('rxjs');
const http=require('http');
const url=require('url');
const {fork}=require('child_process');
const subject=new Subject();
console.log('started');
function bla(reqres){
    const data=url.parse(reqres.req.url,true);
    console.log('pathname='+data.pathname);
    console.log('query='+data.query.url);
    const childprocess=fork('child.js');
    console.log('forked');
    childprocess.on('message',(msg)=>{console.log(msg);
        reqres.res.writeHead(200, {'Content-Type': 'text/plain'});
         reqres.res.end(msg);});
         
    if(data.query.url)
    childprocess.send(data.query.url);
    console.log('i am done');
    
}
subject.subscribe(bla);
console.log("subscribed");
// const server=
http.createServer((req,res)=>{subject.next({req:req,res:res})}).listen(4000);
console.log("server started");