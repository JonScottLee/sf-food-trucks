import Link from 'next/link';
import Image from 'next/image';
import { routes, Button } from '@sf-food-trucks/frontend-common';

export const Index = () => (
  <>
    <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
      <p className="uppercase tracking-loose w-full">San Francisco</p>
      <h1 className="my-4 text-5xl font-bold leading-tight">
        Where is your favorite food truck?
      </h1>
      <p className="mx-auto md:mx-0 leading-normal text-2xl mb-8">
        Find all your local favorites!
      </p>
      <div className="mx-auto md:mx-0">
        <Link href={routes['all-trucks'].href}>
          <Button>See Food Trucks</Button>
        </Link>
      </div>
    </div>
    <div className="w-full md:w-3/5 py-6 text-center">
      <Image
        alt="picture of a food truck | Image by rawpixel.com"
        className="w-full md:w-4/5 z-50"
        height="520"
        src="/hero.png"
        width="602"
      />
    </div>
  </>
);
