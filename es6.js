const fs = require('fs');

fs.readdir('.', function(err, files){
    if (err){
        console.log('error finding files '+ err);
    }else{
        console.log(files);
    }
});

console.log('ended');