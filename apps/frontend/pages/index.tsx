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
