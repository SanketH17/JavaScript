// non - primitives - three types
// 1. functions
// 2. Arrays
// 3. Objects



//funcn definition
function sayHi(Parameter) {
    // console.log("Hello from sayHi");
    // console.log("Parameter received is, ", Parameter);
    // return "returned from a function";

    let rVal = Math.random() > 0.5 ? true : "less than 0.5";
    return rVal;

}

// sayHi(10);
// sayHi("Hello syaHi");
// sayHi([1, 2, 3, 4, 5]);

let rVal = sayHi([1, 2, 3, 4, 5]);
console.log("Returned value is ", rVal);


