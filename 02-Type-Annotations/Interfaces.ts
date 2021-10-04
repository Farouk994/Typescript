//? Interfaces creates new type, describing the property names and value types of an object

// Interface
interface Vehicle {
   name: string;
   year: Date;
   broken: boolean;
   summary(): string;
}

interface PopSoda {
   name: string;
   color: string;
   carbonated: boolean;
   sugar: number;
   summary(): string | number;
}

const oldCivic = {
   name: "civic",
   year: new Date(),
   broken: true,
   summary(): string {
      return `New data : ${this.name}`;
   },
};

const pop = {
   name: "dew",
   color: "green",
   carbonated: true,
   sugar: 56,
   summary(): string {
      return `I only like ${this.name} because its ${this.sugar} of sugar`;
   },
};

// void means function returns nothing

// Type annotation example
const printVehicle = (veh: {
   name: string;
   year: Date;
   broken: boolean;
}): void => {
   console.log(`Name : ${veh.name}`);
   console.log(`Year : ${veh.year}`);
   console.log(`broken : ${veh.broken}`);
};

printVehicle(oldCivic);

const getCar = (veh: Vehicle) => {
   console.log(
      `${veh.name} was built in ${veh.year} and now it's broken : ${veh.broken}, `
   );
};

const getDetails = (Vehicle: Vehicle) => {
   console.log(`The name is ${Vehicle.summary}`);
};

// getCar(oldCivic);

const getSoda = (cc: PopSoda) => {
   console.log(
      `${cc.name} was made last year and it only has ${cc.sugar} sugar`
   );
};

getSoda(pop);
