let arr: string[] = ["car", "bike", "plane"]; // Type Annotation

let numb = [4, 5, 6, 4, 7]; //Type Inference

const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corolla"], ["benz"]];
// We only use Type Annotations when we have an empty array;
//? const carsByMake: string[][];
// if not its just a type inference

const mixTypes = ["string", 5, true, null, "benz"];

//? TS prevents us from adding incompatible value into an array

const getMake = numb[0];
const newCar = numb.pop();

//? Prevent Incompatible values
// numb.push('new')

//? Help with 'map'
// numb.map((n:number) : number) => {
//     return newCar.toUpperCase();
// }

// flexible types
const importantDates = [new Date(), "2030-10-10"];
// When the var will be expecting a different type its better to use type annotation
const impD: (Date | string)[] = [new Date()];
impD.push(new Date());
impD.push('number');
// impD.push(45)

//? Use Typed Arrays anytime whenever you want to represent a collection of records with
//? some arbitrary sort order



