const nums = [1,2,3,5];
const [a,b,c] = nums;
console.log(a);
console.log(b);

// Skipping Elements

const[num1, ,num3] = nums;
console.log(num3);

// Default Values

const arr = [5];
const[x = 0, y=2] = arr;
console.log(x);

//rest
const values = [4, 6, 8, 10];
const[p,q, ...rest] = values;
console.log(rest);

//Nested Object Destructuring
const user = {
  name: "Amit",
  address: {
    city: "Delhi",
    pincode: 110001
  }
};

const {address: { city, pincode }}=user;