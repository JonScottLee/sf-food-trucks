import { CardGrid } from '../../card-grid/card-grid';
import { useFetchTrucks } from '../../../hooks/use-fetch-trucks';
import { useRouter } from 'next/router';
import { Button } from '../../button/button';
import { AllTrucksSkeleton } from './all-trucks.skeleton';
import { routes } from '../../../routes';

export const AllTrucks = () => {
  const router = useRouter();
  const { isFetching, foodTruckData } = useFetchTrucks();

  if (isFetching) return <AllTrucksSkeleton />;

  return (
    <>
      <CardGrid>
        {Object.keys(foodTruckData).map((key, idx) => {
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
    </>
  );
};
