import { useFetchTrucks } from '../hooks/use-fetch-trucks';
import { Card } from '../components/card/card';

export function Index() {
  const { isFetching, foodTruckData } = useFetchTrucks();

  if (isFetching) return <div>Loading...</div>;

  return (
    <>
      <h1>Home</h1>

      {Object.keys(foodTruckData).map((key, idx) => {
        const truck = foodTruckData[key];

        return <Card key={`${truck.objectid}-${idx}`} {...truck} />;
      })}
    </>
  );
}

export default Index;
