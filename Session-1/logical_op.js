//logical operators
//AND (&&) -> all cond. must be true
// OR (||) -> atleast one should be true
// NOT ->True -> false, false -> true

const age = 22;
const gender = 'Male';

if(age >=18 && gender == 'Male'){
    console.log("You are adult male");
}

const number = 5;
if(number % 2 != 0){
    console.log('odd');
}
