// object -> is a group of key : value pair
// key : value -> property
// key : function -> method

let cap = {

    name : "Steve",
    lastname : "Rogers",
    address : {
        city : "Manhatten",
        state : "New York",
    },
    
    age : 35, 
    isAvenger : true,
    movies : ["first avenger", "winter soldier", "civil war"], 
    sayHi : function() {
        console.log("Cap says hi");
    }
};

// get
// console.log(cap.name);
// console.log(cap.lastname);
// console.log(cap.address.city);
// console.log(cap.address.state);
// console.log(cap.age);
// console.log(cap.isAvenger);
// console.log(cap.movies[0]);
// cap.sayHi();

// set / update 

// console.log("cap : ", cap);

// cap.age = 40;
// cap.isAvenger = false;

// cap.friends = ["Tony", "Bruce", "Bucky", "Peter"];
// console.log("-------------------------------------------------");

// console.log("cap : ", cap);


// // DELETE
// delete cap.address;
// console.log("cap : ", cap);

// for(let key in cap) {
//     console.log(key,  " : ", cap[key]);
// }

let propkey = "name";
let key2 = "address";
console.log(propkey, " : ", cap[propkey]);
console.log(key2, " : ", cap[key2]);






















