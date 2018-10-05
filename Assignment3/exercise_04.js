var fs  = require("fs");
var zlip = require('zlib');

var gzip = zlip.createGzip();
var gunzip = zlip.createGunzip();

var compressedFile = "./zipped.zip";
var unCompressedFile = "./tobe_zipped.txt";


// compress here
var readFile = fs.createReadStream(unCompressedFile);
var writeCompressedFile = fs.createWriteStream(compressedFile);
readFile.pipe(gzip).pipe(writeCompressedFile);


//uncompress here
var readFileUnzip = fs.createReadStream(compressedFile);
var writeCompressedFileUnzip = fs.createWriteStream("./AfterZipping.txt");
readFileUnzip.pipe(gunzip).pipe(writeCompressedFileUnzip);













