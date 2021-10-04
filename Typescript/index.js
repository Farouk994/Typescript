"use strict";
// https://jsonplaceholder.typicode.com/todos/1
exports.__esModule = true;
// ! This runs the typescript file and you will not use the javascript file
// ts-node index.ts 
// ! This executes the typescript file, in order to see results run "node index.js"
// tsc node index
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1["default"].get(url).then(function (res) {
    var todo = res.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    logTodo(id, title, completed);
});
var logTodo = function (id, title, finished) {
    console.log("\n    \"" + title + "\" has an id of \"" + id + "\"\n    And the \n    status is \"" + finished + "\"");
};
