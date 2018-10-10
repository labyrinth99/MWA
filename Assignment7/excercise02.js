var MongoClient=require('mongodb').MongoClient;
const express=require('express');
const app=express();
const crypto = require('crypto');
const decipher = crypto.createDecipher('aes256', 'asaadsaad');



app.get('/', (req,res)=>{
    MongoClient.connect('mongodb://127.0.0.1:27017',function(err,client){
    if (err) throw err;
    const db=client.db('test');
    db.collection('encryptdb').findOne({},function(err,doc){
        if (err) throw err;
        console.dir(doc.message);
        var decrypted = decipher.update(doc.message, 'hex', 'utf8');
        console.log(decrypted);
        res.end(decrypted);
        client.close();
    });
    console.dir('called it');
});
    });
app.listen(4000,()=>console.log("Started Listening"));
console.log("Finished");