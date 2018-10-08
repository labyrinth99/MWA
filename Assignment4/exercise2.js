const os=require('os');
const cpus=os.cpus().length;
const memory=os.freemem/(1024*1024*1024);

const {Observable}=require('rxjs');
let bla=function(observer){
    console.log("Checking your system…");
    if(cpus>2 && memory>4)
    console.log("System is ok");
    else{
        if (cpus<=2)
        console.log('not enough cpus');
        if (memory<=4)
        console.log("not enough memory");
    }
    observer.next('Done');

}
//bla();
const obj=Observable.create(bla);
obj.subscribe((data)=>console.log(data));


console.log(cpus +'  '+ memory);