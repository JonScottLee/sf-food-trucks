import { useRouter } from 'next/router';
import { uiConfig } from '../ui-config';
import { Button } from '../components/button/button';
import { useFetchTrucks } from '../hooks/use-fetch-trucks';

const DetailPage = ({ data }) => {
  const { isFetching, foodTruckData } = useFetchTrucks();
  const router = useRouter();
  const id = router.query.id as string;

  if (isFetching) return <div>Loading...</div>;

  const { applicant, address, facilitytype } = foodTruckData[id];

  return (
    <div className="w-full p-4">
      <main
        role="main"
        className="w-full flex flex-col h-screen content-center justify-start"
      >
        <div className="text-center m-10">
          <h1 className="text-5xl font-bold">{applicant}</h1>
          <p className="text-lg mt-3 font-light">
            <div>
              {applicant} is a &ldquo;{facilitytype}&rdquo;-type establishment
            </div>
            <div>
              The address is <span className="underline">{address}</span>
            </div>
          </p>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/3 bg-gray-50 rounded-xl mx-auto">
          <div className="bg-white rounded shadow px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div>
              <iframe
                width="450"
                height="350"
                frameBorder="0"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${uiConfig.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${address}`}
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <Button fullWidth clickHandler={router.back}>
            Go Back
          </Button>
        </div>
      </main>
    </div>
  );
};

export default DetailPage;
