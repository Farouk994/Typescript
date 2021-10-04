// let count = 1;

// setTimeout(() => {
//    setInterval(() => {
//       console.log(count++);
//    }, 1000);
// }, 1000);

function greet(name) {
   console.log(`${name} has a boat`);
   // return name;
}

function apply() {
   var friend = "James";
   function greeting() {
      greet(friend);
   }
   greeting()
}

function school(){
   var school = "Mukono";
   function getSchool(){
      greet(school)
   }
   getSchool()
}

school(greet)
apply(greet);
