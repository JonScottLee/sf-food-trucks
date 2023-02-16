import type { NextApiRequest, NextApiResponse } from 'next';
import { FoodTruck, FoodTruckProps } from '@sf-food-trucks/util';
import { apiConfig } from '../../api-config';
import axios, { AxiosError } from 'axios';

type Error = {
  status: string;
  message: string;
};

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse<FoodTruckProps[] | Error>
) {
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
    .catch(() => {
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
}
