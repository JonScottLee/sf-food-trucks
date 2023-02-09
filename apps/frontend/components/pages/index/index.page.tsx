import Link from 'next/link';
import Image from 'next/image';
import { routes } from '../../../routes';

export const Index = () => (
  <>
    <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
      <p className="uppercase tracking-loose w-full">San Francisco</p>
      <h1 className="my-4 text-5xl font-bold leading-tight">
        Where is your favorite food truck?
      </h1>
      <p className="leading-normal text-2xl mb-8">
        Find all your favorite local food trucks!
      </p>
      <Link
        href={routes.allTrucks}
        className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
      >
        See Food Trucks
      </Link>
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
