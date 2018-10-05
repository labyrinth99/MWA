const EventEmitter = require('events');


class Clock extends EventEmitter {
    constructor() {
        super();
        console.log("new event");
    }
}

const watch = new Clock();

watch.on("tick", () => {
    console.log("Got it");
});

setTimeout(() => {watch.emit("tick");}, 3000);