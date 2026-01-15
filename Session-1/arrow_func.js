//Arrow Functions
//1. Syntax
const sayHello = () => {
    console.log("Hey");
};

const add = (a, b) => {
    return a + b;
};

console.log(add(2, 3));

const addV2 = (a, b) => a + b; // One Liner
console.log(addV2(6, 6));

//2. 'arguments' keyword - only used in normal function
const addNumbers = (...nums) =>{
    console.log(nums);
}
addNumbers(10, 22, 33, 44);

// 3. Hoisting - not for arrow functions
sayHey();
const sayHey = () => {
    console.log("Hey");
}

// 4. this keyword
const obj = {
    value: 20,
    myfunction: () =>{
        console.log("value is: ", this.value);
    },
};
obj.myfunction();