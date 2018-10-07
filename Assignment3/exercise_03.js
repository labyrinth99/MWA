const EventEmitter=require('events');
class gym extends EventEmitter{

    constructor(){
        super();    
        this.message='go';
        setInterval(this.emit.bind(this,'go'),1000);   
    }

    
}
var blax=new gym;
blax.on('go',()=>console.log('Athlete is working out'));
