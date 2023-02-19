import { LoadingStripe } from '@sf-food-trucks/frontend-common';

export const DetailPageSkeleton = () => (
  <div className="pt-20 center w-1/2 text-center mx-auto">
    <div className="text-5xl font-bold">
      <LoadingStripe />
    </div>
    <div className="text-lg mt-5">
      <div className="mb-2">
        <LoadingStripe />
      </div>

      <LoadingStripe />
    </div>
  </div>
);
