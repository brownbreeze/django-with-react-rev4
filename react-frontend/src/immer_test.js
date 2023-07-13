const {produce} = require('immer');

const fruits = ["orange", "strawberry", "lemon", "banana"];

const newfruits = produce(fruits, draft=>{
    draft.splice(1,2,"hello");
});

console.log(newfruits)