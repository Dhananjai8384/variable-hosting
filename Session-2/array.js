//methods of array
// foreach()
[1, 2, 3].forEach(n => console.log(n));

//map()
const doubled = [1, 2, 3].map(n => n * 2);

//filter()
const even = [1, 2, 3, 4].filter(n => n % 2 === 0);

//reduce
const sum = [1, 2, 3].reduce((acc, n) => acc + n, 0);

//find()
const val = [10, 20, 30].find(n => n > 15);

//findIndex()
const idx = [10, 20, 30].findIndex(n => n > 15);

//some()
[1, 3, 5].some(n => n % 2 === 0);

//some()
[1, 3, 5].some(n => n % 2 === 0);

//every() - Checks if all elements match condition.
[2, 4, 6].every(n => n % 2 === 0);

//push()
const a = [1, 2];
a.push(3);

//pop()
const arr = [1, 2, 3];
arr.pop();

//shift() - Removes first element.
const b = [1, 2, 3];
b.shift();

//unshift() - Adds element to beginning.
const a = [2, 3];
a.unshift(1);
// [1, 2, 3]

//splice - Adds/removes elements at specific index.
const a = [1, 2, 3];
a.splice(1, 1, 99);
// [1, 99, 3]

//slice() - Returns a portion of array (no mutation).
const a = [1, 2, 3, 4];
a.slice(1, 3);
// [2, 3]

//concat() - Merge arrays
[1, 2].concat([3, 4]);
// [1, 2, 3, 4]

//includes() - checks if value exists
[1,2,3].includes(2); // true

//lastIndexOf() - returns the last index of value
[1,2,1].lastIndexOf(1); //2

//sort() - 


