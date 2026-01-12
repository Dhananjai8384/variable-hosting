//loops
//for loop -> if you know how many times to loop
// while loop -> when you just know the condition
// do-while loop -> runs atleast one time 

for(let i=1; i<=10; i++){
    console.log("Name" + i);
}

let ip = 0;
let house = 50

while(ip != house){
    ip += 1;
    console.log("steps taken" + ip);
}

//do-while
do{
    ip += 1;
    console.log("steps taken" + ip);
}while(ip <= house)

// guess the input
let number = 40;
let guess = 0;
do{
    guess = parseInt(prompt("Guess the Number"));
    if(guess == number){
        alert("Winner");
        break;
    }
}while(guess != 0)
