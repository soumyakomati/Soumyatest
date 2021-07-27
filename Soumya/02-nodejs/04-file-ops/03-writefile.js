const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname,'hello.txt'),' I love you',{encoding:'utf8',flag:'a'},(err)=> {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log('created new file');
})