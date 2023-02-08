import { useFetchTrucks } from '../hooks/use-fetch-trucks';
import { Card } from '../components/card/card';

export function Index() {
  const { isFetching, foodTruckData } = useFetchTrucks();

  if (isFetching) return <div>Loading...</div>;

  return (
    <>
      <h1>Home</h1>

      {foodTruckData.map((truck) => (
        <Card key={truck.objectid} {...truck} />
      ))}
    </>
  );
}

export default Index;
