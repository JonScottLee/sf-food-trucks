import { ReactNode } from 'react';
import Image from 'next/image';

type CardProps = {
  title: string;
  body: ReactNode;
  action?: ReactNode;
};

export const Card = ({ title, body, action }: CardProps) => (
  <div className="shadow-lg group box-border overflow-hidden flex rounded-md pe-0 flex-col items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product  bg-white">
    <Image
      alt="placeholder image"
      width="420"
      height="320"
      src="https://fakeimg.pl/420x320/eeeeee,128/333333,255/?text=Food Pic&font=lobster"
    />
    <div className="w-full px-2 rounded bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
      <div className="block p-6 rounded-lg bg-white max-w-sm">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
          {title}
        </h5>
        <p className="text-gray-700 text-base mb-4">{body}</p>
        {action && action}
      </div>
    </div>
  </div>
);
