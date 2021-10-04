//! Type annotations of functions
// #) Code we add to tell ts what type of arg a function will receive and what type 
// of value it will return

//! Type Inference for functions 
// #) TS will figure out what type of value a function will return


const add  = (a : number , b: number) : number => {
   return a + b;
};

const sub = (a: number, b: number)  => {  // ! void
    // void basically means there will be no return value when the function is ran
    a - b;
};

function divide(a : number, b : number) {
    return a / b;
}

const logger = (message : string) : void => {
   console.log(message);
}

const throwError = ( message : string ) : never => {
    // never means we wont execute this function completely 
    // but at some time we will throw an error and execute function early without execution
    throw new Error(message);
}

const todaysWeather = {
    date : new Date(),
    weather : 'sunny'
};
const logWeather = ({date , weather} : { date : Date, weather : string}) : void => {
    console.log(date);
    console.log(weather)
}
logWeather(todaysWeather);
