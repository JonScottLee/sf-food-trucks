import axios from '../axios';
import { FoodTruck } from '@sf-food-trucks/util';

class FoodTruckDataServiceRoot {
  getAll() {
    return axios.get<FoodTruck[]>('/food-trucks');
  }
}

export const FoodTruckDataService = new FoodTruckDataServiceRoot();
