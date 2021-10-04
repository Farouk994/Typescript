import { User } from "./User";
import { Account } from "./Account";

export class CustomMap {
   private googleMap: google.maps.Map;

   constructor(divId: string) {
      this.googleMap = new google.maps.Map(document.getElementById(divId), {
         zoom: 1,
         center: {
            lat: 0,
            lng: 0,
         },
      });
   }

   addUserMarker(user: User): void {
      new google.maps.Marker({
         map: this.googleMap,
         position: {
            lat: user.location.lat,
            lng: user.location.lng,
         },
      });
   }

   addAccountMarker(account: Account): void {
      new google.maps.Marker({
         map: this.googleMap,
         position: {
            lat: account.location.lat,
            lng: account.location.lng,
         },
      });
   }

   addCompany() {}
}

// Public means anyone outside this class can access it and call different functions attached to it
// Private - You cant access it outside its class
