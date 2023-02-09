import axios from '../axios';
import { FoodTruck } from '@sf-food-trucks/util';

const mapTruckData = (data: FoodTruck[]) => {
  return data.reduce((acc, truck) => {
    acc[truck.objectid] = truck;

    return acc;
  }, {});
};

class FoodTruckDataServiceRoot {
  async getAll() {
    const { data } = await axios.get<FoodTruck[]>('/food-trucks');

    return mapTruckData(data);
  }
}

export const FoodTruckDataService = new FoodTruckDataServiceRoot();
