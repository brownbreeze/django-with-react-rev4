function base_10(fn) {
    function wrap(x, y){
        return fn(x, y) + 10;
    }
    return wrap;
}

function mysum(a,b){
    return a+b;
}

const base_100 = (fn) => (x,y) => fn(x,y)+100;
    // const wrap = (x,y) => fn(x, y) +100;
    // return wrap;
// }
const mysum2 = (a,b) => a+b;

const result_fn2 = base_100(mysum2);
console.log(result_fn2(1,2));