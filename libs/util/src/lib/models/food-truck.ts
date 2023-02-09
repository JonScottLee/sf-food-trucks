import { FoodTruckProps } from './food-truck-types';
import axios from 'axios';

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

  pickUsableData() {
    return {
      objectid: this.objectid,
      applicant: this.applicant,
      facilitytype: this.facilitytype.toLowerCase(),
      locationdescription: this.locationdescription,
      address: this.address,
      permit: this.permit,
      latitude: this.latitude,
      longitude: this.longitude,
    };
  }
}
