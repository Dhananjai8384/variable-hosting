//Functions
// Unlimited arguments accept
function addNumbers(){
    let ans = 0;
    for(let i=0; i< arguments.length; i++){
        ans = ans + arguments[i]
    }
    return ans;
}
let result = addNumbers(1,2,3,4,5);
console.log(result);

//spread operator

function addNumbersV2(...number){
    let ans = 0;
    for(let i=0; i<number.length; i++){
        ans = ans + number[i];
    }
    return ans;
}
let result1 = addNumbers(1,2,3,4,5);
console.log(result1);

