const fs = require('fs');
const fsPromises = fs.promises; 

async function fn() {
    try {
        let files = await fsPromises.readdir('.');
        console.log(files);
    }catch(err){
        console.error(err);
    }
}

fn();    
console.log('ended');