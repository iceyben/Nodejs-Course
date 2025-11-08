
// Everything about non-primitive data types in JavaScript
// Non-Primitive data: [Objects, array, functions,objects]

// 1. Object:
let username = {
    firstName: "Ben",
    isLoggedIn: true,

};

// Accessing object properties
console.log(username.firstName);
console.log(username.isLoggedIn);

// Checking the type of the object
console.log(username);
console.log(typeof username);

//Creating an object using the Object constructor
let userDetails = new Object();
userDetails.age = 25;

userDetails.country = "USA";
console.log(userDetails);

// 2. Array:
let anotherUser = ["Ben", true];
console.log(anotherUser[0]);
