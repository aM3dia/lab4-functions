//declaring and invoking functions
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet("Anupa")); //return greeting
console.log(greet()); //default greeting

//parameters and returning values
function addNumbers(num1, num2) {
    return num1 + num2; //return sum
}
console.log(addNumbers(9, 13));

//function scope
let x = 10; //global variable

function changeValue() {
    let x = 5; //local variable
    console.log("Inside function: x = " + x);
}
console.log("Before function call: x = " + x);
changeValue(); //call the function
console.log("After function call: x = " + x);

//closures
function outerFunction() {
    let count = 0;
    return function() {
        count++; //update the count
        console.log("Count is: " + count);
    }
}

const increment = outerFunction();

increment();
increment();
increment();

//closure bonus
function outerFunctionDecrement() {
    let count = 10;
    return function() {
        count--; //update the count
        console.log("Count is: " + count);
    }
}

const decrement = outerFunctionDecrement();

decrement();
decrement();
decrement();
