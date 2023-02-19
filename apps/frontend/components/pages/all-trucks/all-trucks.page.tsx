import { useFetchTrucks } from '../../../hooks/use-fetch-trucks';
import { useRouter } from 'next/router';
import { Button, CardGrid, routes } from '@sf-food-trucks/frontend-common';
import { AllTrucksSkeleton } from './all-trucks.skeleton';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export const AllTrucks = () => {
  // How many trucks do we want to show at a time
  const showIncrement = 50;

  const router = useRouter();

  const { isFetching, foodTruckData } = useFetchTrucks();

  const [showLimit, setShowLimit] = useState(showIncrement);

  const [itemsToShow, setItemsToShow] = useState([]);

  const [showingAllItems, setShowingAllItems] = useState(false);

  useEffect(() => {
    if (isFetching) return;

    setItemsToShow(Object.keys(foodTruckData).slice(0, showLimit));
    setShowingAllItems(showLimit >= Object.keys(foodTruckData).length);
  }, [showLimit, foodTruckData, isFetching]);

  if (isFetching) return <AllTrucksSkeleton />;

  return (
    <>
      <CardGrid>
        {itemsToShow.map((key, idx) => {
          const truck = foodTruckData[key];

          return (
            <CardGrid.Card
              key={`${truck.objectid}-${idx}`}
              title={truck.applicant}
              body={truck.address}
              action={
                <Link
                  href={{
                    pathname: routes['detail-page'].href,
                    query: { id: truck.objectid },
                  }}
                >
                  <Button>Details</Button>
                </Link>
              }
            />
          );
        })}
      </CardGrid>

      {!showingAllItems && (
        <div className="mt-10 mx-auto w-full text-center">
          <Button
            className="w-full sm:w-1/4 lg:w-1/5"
            clickHandler={() => setShowLimit(showLimit + showIncrement)}
          >
            Load More
          </Button>
        </div>
      )}
    </>
  );
};
