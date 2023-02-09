import { FoodTruckProps } from '@sf-food-trucks/util';
import { Button } from '../button/button';
import Link from 'next/link';

export const Card = ({ address, applicant, objectid }: FoodTruckProps) => {
  return (
    <Link
      href={{
        pathname: '/detail-page',
        query: {
          id: objectid,
        },
      }}
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {applicant}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{address}</p>
    </Link>
  );
};
