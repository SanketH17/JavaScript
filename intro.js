console.log("Hello javascript");

//declare variables
let a; 
console.log(a);

a = 10;

a = 10.1;

a = "hello i am a string";
console.log(a);
a = "hello i am also a string";

console.log("Variable a contains ", a);

a = true;
console.log(a);


// let number = 10;
// for(let i = 0; i <= number; i++){
//     console.log("Number is ", i);
// }

// is prime
let number = 23;
let flag = true;
for(let div = 2; div < number; div++) {
    if(number % div == 0) {
        flag =false;
        break;
    }
}

if(flag == true) {
    console.log(number , "is prime");
} else {
    console.log(number, "is not prime");
}
















