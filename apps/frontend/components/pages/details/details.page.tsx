import { Button } from '@sf-food-trucks/frontend-common';
import { DetailPageSkeleton } from './details.skeleton';
import { uiConfig } from '../../../ui-config';
import { useFetchTrucks } from '../../../hooks/use-fetch-trucks';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const DetailPage = () => {
  const { isFetching, foodTruckData } = useFetchTrucks();
  const router = useRouter();
  const id = router.query.id as string;

  if (isFetching) return <DetailPageSkeleton />;

  const { applicant, address, facilitytype } = foodTruckData[id];

  return (
    <div className="w-full p-4">
      <main
        role="main"
        className="w-full flex flex-col h-screen content-center justify-start"
      >
        <div className="text-center m-10">
          <>
            <h1 className="text-5xl font-bold">{applicant}</h1>
            <div className="text-lg mt-3 font-light">
              <p>
                {applicant} is a &ldquo;{facilitytype}&rdquo;-type establishment
              </p>
              <p>
                The address is <span className="underline">{address}</span>
              </p>
            </div>
          </>
        </div>

        <div className="w-full sm:w-full lg:w-1/2 bg-gray-50 rounded-xl mx-auto">
          <div className="bg-white rounded shadow px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div>
              <iframe
                className="w-full"
                width="450"
                height="350"
                frameBorder="0"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${uiConfig.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${address}`}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mx-auto my-10">
          <Link href="/">
            <Button>Go Back</Button>
          </Link>
        </div>
      </main>
    </div>
  );
};
