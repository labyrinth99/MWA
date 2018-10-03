
Array.prototype.even=function(){
    
    var y=[],j=0,x=this;
    for(var i=0;i<x.length;i++){
        if (x[i]%2===0){
            y[j]=x[i];
            j++;
        }
    }
    setTimeout(() => console.log(y),0);
}
Array.prototype.odd=function(){
    
    var y=[],j=0,x=this;
    for(var i=0;i<x.length;i++){
        if (x[i]%2===1){
            y[j]=x[i];
            j++;
        }
    }
    setTimeout(() => console.log(y),0); 
}
console.log("start");
[1, 2, 3, 4, 5, 6, 7, 8].even();
[1, 2, 3, 4, 5, 6, 7, 8].odd();
console.log("end");