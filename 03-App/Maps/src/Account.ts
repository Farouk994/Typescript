import faker from "faker";

export class Account {
   account: number;
   accountName: string;
   creditCardNumber: number;
   location: {
      lat: number;
      lng: number;
   };
   constructor() {
      this.account = parseFloat(faker.finance.account());
      this.accountName = faker.finance.accountName();
      this.creditCardNumber = parseFloat(faker.finance.creditCardNumber());
      this.location = {
         lat: parseFloat(faker.address.latitude()),
         lng: parseFloat(faker.address.longitude()),
      };
   }
}

// google
