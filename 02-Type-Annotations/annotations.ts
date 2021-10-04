// Type annotations tell ts what variable to refer to 

// Type inference tries to figure out what type of value a variable will refer to

// Type script will use type inference if the variable declaration is on the same line as the value

let apples : number = 5;

let speed : string = "fast";

let hasName : boolean = true;

let nothing : null = null;

let empty : undefined = undefined;

// built in obj

let now : Date = new Date();

// Array
let colors : string[] = ["u-ottawa","carleton","mc-gill","york","uot"];
let num : number[] = [1,2,3,4,5,6,7,8,9,0];
let truths : boolean[] = [true,false,true];

// Classes
class Car {

}
let car : Car[] = [];

// Object Literal
let point : { x : number; y : number; z : string} = {
    x : 10,
    y : 15,
    z : "names"
};

// Function 
//! const func : (i: number) => void = () => {}
// This is just the description of a function
const logNum : (i: number) => void = (i : number) => {
   console.log(i)
}

//! When to Use Annotations ?
//! 1) 
// When we have function that returns the 'any' type
const json = '{"x":10, "y":20}';
const coord : { x : number; y : number} = JSON.parse(json);
console.log(coord);

//! 2) 
// When we declare a var on one line and initialize it later
let words = ['red','green','orange'];
let found : boolean;
for(let i = 0; i < words.length; i++){
    if(words[i] === 'green') found = true 
}

//! 3) 
// Var whose type cannot be inferred correctly
let numbers = [-15,5,6,-6];
let numberAboveZero : boolean | number = false;
for(let i = 0; numbers.length; i++){
    if(numbers[i] > 0){
        numberAboveZero = numbers[i];
    }
}

