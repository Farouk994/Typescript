import faker from "faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
   companyName: string;
   catchPhrase: string;
   location: {
      lat: number;
      lng: number;
   };
   color: "orange";
   constructor() {
      this.companyName = faker.company.companyName();
      this.catchPhrase = faker.company.catchPhrase();
      this.location = {
         lat: parseFloat(faker.address.latitude()),
         lng: parseFloat(faker.address.longitude()),
      };
   }
   markerContent(): string {
      return `
      <div>
      <h2>Company Name : ${this.companyName}</h2>
      <h4>CatchPhrase : ${this.catchPhrase}</h4>
      </div>
      `;
   }
}
