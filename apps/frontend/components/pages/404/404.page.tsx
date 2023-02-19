import { Button, routes } from '@sf-food-trucks/frontend-common';
import Link from 'next/link';

export const Error404 = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <Link href={routes['home'].href}>
        <Button>Go Home</Button>
      </Link>
    </main>
  );
};
