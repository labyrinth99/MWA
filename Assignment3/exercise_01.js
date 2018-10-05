var dns = require('dns');


var result = dns.resolve4("www.mum.edu", (error, addresses) => {
    console.log(error + ",,," + addresses[0]);
});