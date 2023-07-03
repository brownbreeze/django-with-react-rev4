const fs = require('fs');
const fsPromises = fs.promises; 

fsPromises.readdir('.')
    .then(files => {
        console.log(files);
    })
    .catch(err => console.error(err));
    
console.log('ended');