const tom = {
    name: 'Tom',
    age: 10
};

const {name, age, height} = tom;

console.log(name);
console.log(age);
console.log(height);

const print_person1 = (person) =>{
    console.log(person.name);
};
const print_person2 = ({name}) =>{
    console.log(name);
};

print_person1(tom);
print_person2(tom);