import { Button } from '@sf-food-trucks/frontend-common';
import { useRouter } from 'next/router';

export const Error404 = () => {
  const router = useRouter();

  return (
    <main className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button className="mt-5">
        <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
          <Button clickHandler={() => router.push('/')}>Go Home</Button>
        </a>
      </button>
    </main>
  );
};
