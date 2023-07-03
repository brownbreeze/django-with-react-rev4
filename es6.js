function userLogs(username){
    function wrap(message){
        console.log(`${username} = ${message}`);
    }
    return wrap;
}

const log = userLogs('dahye kim');
log('hello world?!');


const userLogs2 = username => message => {
    console.log(`${username} = ${message}`);
}
const log2 = userLogs2('dahye choi');
log2('hello world~');