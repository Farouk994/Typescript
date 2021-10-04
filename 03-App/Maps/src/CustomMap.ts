// instructions to every other class on how they can be an argument to 'addMarker'
export interface Mappable {
   location: {
      lng: number;
      lat: number;
   };
   markerContent(): string;
   color : string
}

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

   addMarker(mappable: Mappable): void {
      const marker = new google.maps.Marker({
         map: this.googleMap,
         position: {
            lat: mappable.location.lat,
            lng: mappable.location.lng,
         },
      });
      marker.addListener("click", () => {
         const infoWindow = new google.maps.InfoWindow({
            content: mappable.markerContent(),
         });
         infoWindow.open(this.googleMap, marker);
      });
   }

   addCity() {}
}

// Public means anyone outside this class can access it and call different functions attached to it
// Private - You cant access it outside its class
