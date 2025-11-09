// Checking if a number is greater than another nmber: 
let num1 = 5
let num2 = 8

if(num1 > num2){
    console.log(`${num1} is greater than ${num2}`)
}else{
    console.log(`${num2 } is greater than ${num1}`);
}

//Checking if a string is equal to another string:
let username = "Ben"
let anotherUsername = "Ben"

if(username === anotherUsername){
    console.log( "Pick another username")
}else{
    console.log("The user name is not available");
    
}

// Checking if a variable is a  number or not: 

let variable = 50
if(typeof variable === "number"){
    console.log(`${variable } is a number`);
}else{
    console.log(`${variable} is not a number`);
}


//Checking if a user is logged in or not:
let isLoggedIn = false
let welcomeMessage = "Welcome back!"
let user = "Admin"

function checkLoginStatus(){
    if(isLoggedIn){
        console.log(`${welcomeMessage}, ${user}`);
    }else{
        console.log('Please log in to continue');
    }

}

function toggleLoginStatus(){
    isLoggedIn = !isLoggedIn;
    console.log("Login in successfully");

}

// Initial check
checkLoginStatus();

// Toggle login status
toggleLoginStatus();

// Check again after toggling
checkLoginStatus();

