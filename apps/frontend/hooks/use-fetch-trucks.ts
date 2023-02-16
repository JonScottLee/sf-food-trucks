import { useEffect, useState } from 'react';
import { FoodTruckDataService } from '../services/food-trucks';
import { FoodTruckProps } from '@sf-food-trucks/util';

export const useFetchTrucks = () => {
  const [isFetching, setisFetching] = useState(true);
  const [foodTruckData, setFootTruckData] = useState<Record<
    string,
    FoodTruckProps
  > | null>(null);

  useEffect(() => {
    // Basically, we will only fetch food truck data once per page load. There are a ton of ways
    // to peel this onion. See next comment.
    if (foodTruckData) {
      setisFetching(false);
      return;
    }

    //
    // TODO:
    //
    // There's an opportunity here to for better local caching -- something with a stale
    // time, manual invalidation, etc. Beyond scope for this for now. React-query would be
    // an excellent choice.
    //
    // One could even set up a Redis container and use Redis for it,  but that would probably
    // be overkill for this app. The nice thing about Redis would be that you could have it
    // manually poll the service every <n> minutes and refresh its data, and then any request to
    // it is virtually guaranteed to be fulfilled instantly.
    //
    FoodTruckDataService.getAll().then((response) => {
      setFootTruckData(response);

      setisFetching(false);
    });
  }, [foodTruckData]);

  return { isFetching, foodTruckData: foodTruckData || {} };
};
