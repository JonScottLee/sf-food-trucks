import { apiConfig } from './api-config';
import { FoodTruck, FoodTruckProps } from '@sf-food-trucks/util';
import { Request, Response } from 'express';
import axios from 'axios';

export const getFoodTrucks = async (req: Request, res: Response) => {
  await axios
    .get<FoodTruckProps[]>(apiConfig.SOURCE_API)
    .then(({ data }) => {
      try {
        const pickedData = data.map((truckData) => {
          const foodTruck = new FoodTruck(truckData);
          return foodTruck.pickUsableData();
        });

        res.send(pickedData);
      } catch {
        throw new Error();
      }
    })
    .catch((err) => {
      // This is for the benefit of perusing runtime logs
      console.error(
        'action=getFoodTrucks message=Something went wrong parsing the food truck data for the client'
      );

      // This is for the client to handle however it chooses
      res.status(500).json({
        status: 'error',
        message: 'Something went wrong, please try again later.',
      });
    });
};
