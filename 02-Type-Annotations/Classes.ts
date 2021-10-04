//? Classes are a blueprint to create an object with some fields (values) and methods (functions) to represent a 'thing'.
// public - this method can be called anywhere, anytime
// private - this method can only be called by other methods in *this* class - it also restricts access to a function - restrict different methods other developers can call
// protected - this method can be called by other methods in *this* class, or by other methods in child class - can only be used in child class

class Vehicle {
   // color: string = "red";
   // constructor(color: string) {
   //    this.color = color;
   // }
   constructor(public color: string) {}
   public driven(): void {
      console.log("bumba");
   }
   protected honk(): void {
      console.log("beep");
   }
   public speed(): void {
      console.log("swish");
   }
}

const newVeh = new Vehicle("orange");
// newVeh.color;
// newVeh.honk() - //? protected - Error!

class Car extends Vehicle {
   constructor(private wheels: number, color: string) {
      super(color);
   }
   driven(): void {
      console.log("vroom");
   }
   startSpeeding(): void {
      this.driven();
      this.honk();
   }
}

const vehicles = new Vehicle("red");
const cars = new Car(4,"orange");
vehicles.driven();
cars.startSpeeding();

//! Why do we care?

