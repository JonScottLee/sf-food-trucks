import { CardGrid } from '../components/card-grid/card-grid';
import { useFetchTrucks } from '../hooks/use-fetch-trucks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '../components/button/button';
import axios from '../axios';

const AllTrucks = () => {
  const router = useRouter();
  const { isFetching, foodTruckData } = useFetchTrucks();

  if (isFetching) return <div>Loading...</div>;

  return (
    <>
      <h1>All Trucks</h1>
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
                      pathname: 'detail-page',
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

export default AllTrucks;
