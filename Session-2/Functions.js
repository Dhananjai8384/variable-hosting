//normal function
function add(a, b) {
    return a + b;
}

const result = add(10, 20);
console.log(result); 

//arrow function
const numbers = [1, 2, 3, 4];

const squares = numbers.map(num => num * num);

console.log(squares);