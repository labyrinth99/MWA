var express = require("express");
var fetch = require('node-fetch');
var app = express();


// users middleware 
app.use('/users', (request, response, next) => {
    //Promises(response);
    //Observables(response); 
    Aysnc(response); // async and await
});

// using promises
function Promises(response)
{
    const promise = fetch('http://jsonplaceholder.typicode.com/users/');
    promise.then(res => res.json())
    .then(json => response.send(json));
}

// using async await
async function Aysnc(response) {
    const result = await fetch('http://jsonplaceholder.typicode.com/users/');
    const json = await result.json();
    response.send(json);
}

// using observables
function Observables(response) {

    const promise = fetch('http://jsonplaceholder.typicode.com/users/')
        .then(res => res.json()).then(json => json);

    // using observables
    const {from} = require('rxjs');
    from(promise).subscribe((x) => {
        response.send(x);
    });
}



// configuration
app.listen("4000", () => {
    console.log("listening to 4000");
});

app.enable('case sensetive routing');
app.disable('x-powered-by');
app.enable('strict mode');
