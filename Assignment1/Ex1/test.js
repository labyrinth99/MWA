Array.prototype.removeDuplicates = function() {
    return [...new Set(this)];
};

//ES6 part
function* printIt(x) {
    yield x.removeDuplicates();
}

var temp = [2, 3, 4, 5, 3, 4];
console.log(temp);
console.log("ES6 Started");
console.log("ES6: " + printIt(temp).next().value);


//promise
console.log("Promise Started");
const myPromise = function() {
    return new Promise((resolve, reject) => resolve(temp.removeDuplicates()))
};
myPromise()
    .then(data => console.log("Promise: " + data))
    .catch(err => console.log(err));

//Async & Await
console.log("Async & Await Started");
async function asynAwait() {
    try {
        let asy = await myPromise();
        console.log("asynAwait: " + asy);
    } catch (error) {
        console.log(error);
    }
}
asynAwait();

//Observale
console.log("Observable Started");
const { Observable } = rxjs;
const obs = Observable.create((observer) => {
    observer.next(temp.removeDuplicates());
    setTimeout(() => observer.complete(), 3000);
});
console.log("subscribtion started");
const subscribtion = obs.subscribe((x) => console.log("Observable: " + x),
    (error2) => console.log(error2),
    () => console.log("I am done"));