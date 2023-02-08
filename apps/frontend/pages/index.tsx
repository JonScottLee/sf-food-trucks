import styles from './index.module.scss';
import { useEffect } from 'react';
import { FoodTruck } from '@sf-food-trucks/util';
import { FoodTruckDataService } from '../services/food-trucks';
import { useFetchTrucks } from '../hooks/use-fetch-trucks';

export function Index() {
  const { isFetching, foodTruckData } = useFetchTrucks();

  if (isFetching) return <div>Loading...</div>;

  return (
    <>
      <h1>Home</h1>

      {foodTruckData.map((truck) => (
        <div key={truck.objectid}>{truck.applicant}</div>
      ))}
    </>
  );
}

export default Index;
