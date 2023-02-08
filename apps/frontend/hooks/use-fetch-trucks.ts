import { useEffect, useState } from 'react';
import { FoodTruckDataService } from '../services/food-trucks';
import { FoodTruck } from '@sf-food-trucks/util';

export const useFetchTrucks = () => {
  const [isFetching, setisFetching] = useState(true);
  const [foodTruckData, setFootTruckData] = useState<FoodTruck[] | null>(null);

  useEffect(() => {
    //
    // TODO:
    //
    // There's an opportunity here to introduce a localStorage service, to check
    // there for data before bothering to make the network request. Lots of tools available
    // for this.
    //
    FoodTruckDataService.getAll().then((response) => {
      setFootTruckData(response.data);
      setisFetching(false);
    });
  }, []);

  return { isFetching, foodTruckData };
};
