import { CardGrid } from '../../card-grid/card-grid';
import { useFetchTrucks } from '../../../hooks/use-fetch-trucks';
import { useRouter } from 'next/router';
import { Button } from '../../button/button';
import { AllTrucksSkeleton } from './all-trucks.skeleton';
import { routes } from '../../../routes';
import { useState, useEffect } from 'react';

export const AllTrucks = () => {
  // How many trucks do we want to show at a time
  const showIncrement = 50;

  const router = useRouter();

  const { isFetching, foodTruckData } = useFetchTrucks();

  const [showLimit, setShowLimit] = useState(showIncrement);

  const [itemsToShow, setItemsToShow] = useState([]);

  const [showingAllItems, setShowingAllItems] = useState(false);

  useEffect(() => {
    setItemsToShow(Object.keys(foodTruckData).slice(0, showLimit));
    setShowingAllItems(showLimit >= Object.keys(foodTruckData).length);
  }, [showLimit, foodTruckData]);

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
                <Button
                  clickHandler={() => {
                    router.push({
                      pathname: routes['detail-page'].href,
                      query: { id: truck.objectid },
                    });
                  }}
                >
                  Details
                </Button>
              }
            />
          );
        })}
      </CardGrid>

      {!showingAllItems && (
        <div className="mt-10">
          <Button clickHandler={() => setShowLimit(showLimit + showIncrement)}>
            Load More
          </Button>
        </div>
      )}
    </>
  );
};
