const a = [2,3,4];
const b = [5,6,7];

console.log(...a, ...b);

//update keys
const user = { name: "Admin", role: "User" };

const updated = { ...user, role: "Manager" };
console.log(updated);

//Spread in Function Calls
function sum(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
sum(...nums);
