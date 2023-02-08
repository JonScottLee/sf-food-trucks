import { FoodTruckProps } from './food-truck-types';

export class FoodTruck {
  objectid: string;
  applicant: string;
  facilitytype: string;
  locationdescription: string;
  address: string;
  permit: string;
  latitude: string;
  longitude: string;

  constructor(foodTruck: FoodTruckProps) {
    Object.assign(this, foodTruck);
  }

  pickUsableData() {
    return {
      objectId: this.objectid,
      applicant: this.applicant,
      facilitytype: this.facilitytype,
      locationdescription: this.locationdescription,
      address: this.address,
      permit: this.permit,
      latitude: this.latitude,
      longitude: this.longitude,
    };
  }
}
