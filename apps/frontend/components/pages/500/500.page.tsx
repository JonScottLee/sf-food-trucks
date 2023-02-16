import { Button } from '../../button/button';
import { useRouter } from 'next/router';

export const Error500 = () => {
  const router = useRouter();

  return (
    <main className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        500
      </h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        Something Went Wrong
      </div>
      <button className="mt-5">
        <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
          <Button clickHandler={() => router.push('/')}>Go Home</Button>
        </a>
      </button>
    </main>
  );
};
