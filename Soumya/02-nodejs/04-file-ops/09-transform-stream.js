
const fs = require('fs');
const path = require('path');
const {createGzip} = require('zlib');


const gzip = createGzip();
const rs= fs.createReadStream(path.join(__dirname, '' ,'sample.txt'),{encoding:'utf8'});
const ws = fs.createWriteStream(path.join(__dirname, 'sunny.txt.zip'),{encoding:'utf8'});

// rs.pipe(gzip);
// gzip.pipe(ws);
// both above and below are similar
rs.pipe(gzip).pipe(ws);

rs.on('error' , err=>{
    console.log('Unable to read '+err.message);
});


ws.on('error' , err=>{
    console.log('Unable to write '+err.message);
});