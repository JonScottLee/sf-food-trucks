import { useRouter } from 'next/router';
import { uiConfig } from '../ui-config';
import { Button } from '../components/button/button';
import { useFetchTrucks } from '../hooks/use-fetch-trucks';

const DetailPage = ({ data }) => {
  const { isFetching, foodTruckData } = useFetchTrucks();
  const router = useRouter();
  const id = router.query.id as string;

  if (isFetching) return <div>Loading...</div>;

  const { applicant, address } = foodTruckData[id];

  return (
    <div className="w-full p-4">
      <Button clickHandler={router.back}>Go Back</Button>
      <main
        role="main"
        className="w-full flex flex-col h-screen content-center justify-center"
      >
        <div className="w-full sm:w-1/2 lg:w-1/3 bg-gray-50 rounded-xl m-auto">
          <div className="bg-white rounded shadow px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h1>{applicant}</h1>
            <p>{address}</p>
            <div>
              <iframe
                width="450"
                height="250"
                frameBorder="0"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${uiConfig.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=New York City`}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DetailPage;
