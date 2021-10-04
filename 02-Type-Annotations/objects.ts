const profile = {
    name : 'alex',
    age : 20,
    coords : {
        lat : 0,
        lng : 15
    },
    setAge(age : number){
       this.age = age;
    }
};

//! const { age, name  } : { age : number, name : string } = profile;
// If destructuring, you have to write the annotation for whats expected and structure

const { coords : { lat, lng } } : { coords : {  lat : number, lng : number } } = profile;


