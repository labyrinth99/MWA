var MongoClient=require('mongodb').MongoClient;
const express=require('express');
const app=express();
app.use(express.urlencoded());

app.get('/api/', (req,res)=>{
    MongoClient.connect('mongodb://127.0.0.1:27017',{ useNewUrlParser: true},function(err,client){
    if (err) throw err;
    const db=client.db('test');
    var cursor=db.collection('geo').find();
    var result=[];
    cursor.forEach((doc,err)=>result.push(doc),()=>{
        client.close();
        res.end(JSON.stringify(result));
        console.log("got the data");
    });
    });
});

app.get('/api/near/', (req,res)=>{
    MongoClient.connect('mongodb://127.0.0.1:27017',{ useNewUrlParser: true},function(err,client){
    if (err) throw err;
    const db=client.db('test');
    var cursor=db.collection('geo').find({location:{$near:[-91.9665342,41.017654]}}).limit(3);
    var result=[];
    cursor.forEach((doc,err)=>result.push(doc),()=>{
        client.close();
        res.end(JSON.stringify(result));
        console.log("got the 3 location");
    });
    });
});

app.post('/api/',(req,res,next)=>{
    MongoClient.connect('mongodb://127.0.0.1:27017',{ useNewUrlParser: true},function(err,client){
        const db=client.db('test');
        console.log("got it");
               if (err) throw err;
               console.log(req.body.long+req.body.lat);
        const name=req.body.name;
        const category=req.body.category;
        const long=req.body.long/1;
        const lat=req.body.lat/1;
        const data={'name':name,'category':category,'location':[long,lat]};
        console.log(data);
        db.collection('geo').insert(data,(err,doc)=>{
            console.log(err);
            if (err) throw err;
            console.log(JSON.stringify(doc));
            client.close();
        });
        res.end("done");
        
    });
});


app.listen(4000,()=>console.log("Started Listening"));
console.log("Finished");