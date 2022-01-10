/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// function addTwoNumbers(a, b) { 
//     //code block
//     return a + b;

// }

// let sum = addTwoNumbers(3, 5);
// console.log(sum);

// Arrow Function With Parameters  replay the world function with const then add a sign = after the name of the function then the parameters
// and after a fat arrow  to pint at the curly braces, and everything else stay the same.
// the function is call in the same way.
const addTwoNumbers = (a, b) => { 
    //code block
    return a + b;

}

let sum = addTwoNumbers(3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters

// For simple function yoou can just put what you want to return right after the "fat arrow" on the same line.
// But if the function has more complex logic, you will need to set open a set of curly braces.
// const addTwoNumbers = (a, b) => (a + b); // this is also valid
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(2,5);
console.log(sum2)



// Implicit Returns
// For even simpler functions, such as those that only take a single parameter, you can
// leave off the first set of parentheses too.

const saySomething = message => console.log(message)
saySomething('Hello Man!');

// Since there’s only one parameter, it doesn’t need the parentheses around it, but if you
// have more than one, you just wrap them with parentheses.

const sayHello = () => console.log ('hello');
sayHello();

// If you’ve got a function that takes no parameters at all, such as this one called sayHello,
// you must use an empty set of parentheses to tell JavaScript you’re declaring a function.



// Returning Multiple Lines

// If you need to return multiple lines of code, you must wrap whatever comes 
// after the return keyword in parentheses.

const returnMultiplesLines = () => (

`<p> 
this is an multiple string!
</p>`

);

console.log(returnMultiplesLines());
