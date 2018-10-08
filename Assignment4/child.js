const fs=require('fs');


process.on('message',function(msg){
const file=fs.readFile(msg,'utf8',(err,data)=>{process.send(data)});
});