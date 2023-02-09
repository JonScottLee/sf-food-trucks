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
    this.objectid = '';
    this.applicant = '';
    this.facilitytype = '';
    this.locationdescription = '';
    this.address = '';
    this.permit = '';
    this.latitude = '';
    this.longitude = '';

    Object.assign(this, foodTruck);
  }

  getMapSrc(key: string) {
    return `https://www.google.com/maps/embed/v1/place?key=${key}&q=New York City`;
  }

  pickUsableData() {
    return {
      objectid: this.objectid,
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
