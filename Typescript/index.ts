// https://jsonplaceholder.typicode.com/todos/1

// ! This runs the typescript file and you will not use the javascript file
// ts-node index.ts 

// ! This executes the typescript file, in order to see results run "node index.js"
// tsc node index


import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

// Reference on detailing how we want to receive data from an api, all errors
// will fall back on this interface 
interface Todo {
    id : number,
    title : string,
    completed : boolean
}

axios.get(url).then(res=>{
   const todo = res.data as Todo;
   const id = todo.id;
   const title = todo.title;
   const completed = todo.completed;

   logTodo(id,title,completed)
});

const logTodo = (id : number,title : string,finished : boolean) => {
    console.log(`
    "${title}" has an id of "${id}"
    And the 
    status is "${finished}"`
    );
}




