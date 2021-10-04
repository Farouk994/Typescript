// Tuple is an array-like structure where each element represents some property of a record
// You can mix an match different data types

const drink = {
   color: "brown",
   carbonated: true,
   sugar: 40,
   distributor: "Coke",
};

const pepsi: Soda = ["brown", true, 40];

const coke: [string, boolean, number] = ["brown", false, 15];
// This type annotation turns this array into a Tuple
// const coke2: (string | boolean | number)[] = ["brown", false, 15];
// This means that an array will always have this same specific structure
// coke[0] = true

type Soda = [string, boolean, number];
const newSoda: Soda = ["orange", true, 78];

//! Why i wont be using Tuples?
const carSpecs: [number, number] = [400, 5899];

//? Especially in Objects
const carS = {
   horsePwr: 400,
   weight: 4554,
};
// Use the js basic ways of reaching for an obj
