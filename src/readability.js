

/* Exercise 1: Naming Conventions
Given the following code snippet, try to refactor it using better variable and function names.*/
let num1 = 10;
let num2 = 20;

function addNumbers(num1, num2) {
return num1 + num2;
}

console.log(addNumbers(num1, num2)); 



/* Exercise 2: Commenting and Documentation
Review the following code snippet and add comments to make the code's purpose and functionality clearer.*/
const myString = 'Hello, world!';

function reverseString(str) {
// Split the string into an array of individual characters
let characters = str.split('');

// Reverse the order of the characters in the array
let reversedCharacters = characters.reverse();

// Join the reversed characters back into a string
let reversedString = reversedCharacters.join('');

// Return the reversed string
return reversedString;
}

console.log(reverseString(myString)); 

 



/* Exercise 3: Code Structure
This code snippet is correct, but messy. Improve its structure and readability by adding whitespace and organizing the code more logically.*/
let a=100,b=200;
function add(a,b){
  return a+b;
  }
  console.log(add(a,b)); 





/* Exercise 4: Use of Constants
Review the following code and replace the magic numbers with named constants to make it more readable and understandable.*/
​​function calculateCircleArea(radius) {
    const pi = Math.PI
    return pi * radius * radius;
}
​
console.log(calculateCircleArea(10));



/* Exercise 5: Avoiding Global Variables
The following code uses a global variable. Refactor it to avoid using global variables, making use of function parameters or return values instead.*/

function sayHello(greeting) {
  console.log(greeting);
}

let greeting = "Hello, world!";
sayHello(greeting);



/* Exercise 6: Use of let vs const
In the following code snippet, determine where you can use const instead of let, and refactor the code accordingly. Remember, it's a best practice to always use const for variables that won't be reassigned.*/

const x = 10;
const y = 20;
const sum = x + y;
console.log(sum);


/* Exercise 7: Avoiding the == Operator
This code snippet uses the == operator. Refactor it to use === instead, because === is more predictable as it also checks the type of the variables.*/

let x = "10";
if (x === 10) {
  console.log('x is 10');
} else {
  console.log('x is not 10');
}



/* Exercise 8: DRY Principle
This code violates the DRY (Don't Repeat Yourself) principle. Refactor it to avoid repetition.*/

function calculateAreaTriangle(base, height) {
  return 0.5 * base * height;
}

function calculateArea(geometricalFigure, baseOrSide, heightOrWidth) {
  if (geometricalFigure === "square" || geometricalFigure === "rectangle") {
    return baseOrSide * heightOrWidth;
  } 
  
  else {
    return 0.5 * baseOrSide * heightOrWidth;
  }
}

console.log(calculateArea("triangle", 5, 2));  // Output: 5


  /*this is another way I tried, but I'm not sure about it:

  function calculateArea (geometricalFigure, baseOrSide, heightOrWidth){
   
    if (geometricalFigure==="square" || geometricalFigure==="rectangle"){
      return baseOrSide * heightOrWidth;
    }

    else { return 0.5 * baseOrSide * heightOrWidth;}

    calcualteArea("Triangle", 5,2)
    */



  /* Exercise 9: Use of Arrow Functions
Refactor this code to use arrow functions, which provide a more concise syntax for function definition.*/
​



const multiply = (a, b) => {
  return a*b;
}

let numbers = [1, 2, 3, 4, 5];
numbers = numbers.map((number) => multiply(number, 2));

console.log(numbers);



/* Exercise 10: Naming Conventions
Rename the variable name so they make sense and describe what they're actually doing. */


function divideByPreventingDivisionByZero (firstN, secondN) {
  if (secondN ! == 0) { //if secondN is different than zero
    return firstN/secondN;
  }
}
return "Division by 0!";


/* Exercise 11: DRY
These functions perform very similar tasks. Refactor them into a single, more flexible function that maintains the same functionality. */

function greet(partOfTheDay, name) {
  return `Good ${partOfTheDay}, ${name}!`;
}

console.log(greet("Morning", "Asun"));
console.log(greet("Evening", "Asun"));
console.log(greet("Night", "Asun"));

/* Exercise 12: DRY
This code has repetitive conditional checks. Refactor it to avoid the repetition.   */

function checkDayOfTheWeek (day) {
  switch (day) {
    case "Monday":
      console.log ("Start day of the workweek");
      break;
    case "Tuesday":
      console.log ("Second day of the workweek");
      break;
    case "Wednesday":
      console.log ("Mid-week");
      break;
    case "Thursday":
      console.log ("Almost the week-end");
      break;
    case "Friday":
      console.log ("Last day of the week!");
      break;
    case "Saturday":
      console.log ("Week-end!");
      break;
    case "Sunday":
      console.log ("Week-end!");
      break;
  }
}


/* Exercise 13: DRY
The following code loops over the same array twice. Can you refactor it to achieve the same results but only loop over the array once? */

const numbers = [1,2,3,4,5];
let sum =0; 

for (let i=0; i< numbers.length; i++) {
  sum+= numbers [i];
  if (numbers [i] % 2 ===0) {
    console.log (numbers [i]);
  }
}
console.log (sum);

/* Exercise 14: DRY
There are multiple code blocks in the function that do the same thing. Refactor the function to eliminate this duplication. */
​
function processArray(arr) {
    if (arr.length > 10) {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return sum;
    } else {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return sum * 2;
    }
  }


  /*  Exercise 15: DRY isn't only about code logic.
In general, the DRY principle is about more than just reducing the amount of code. It's also about making your code more efficient and easier to understand.
​
This object has several properties that hold very similar data but share something repetitive in their naming. How can you refactor this object to be more DRY?
*/


  let menuPrices = {   
      burger: 10,
      fries: 5,
      shake: 3,
      soda: 2,
      salad: 7
   
  };
  console.log(menuPrices.burger);
      