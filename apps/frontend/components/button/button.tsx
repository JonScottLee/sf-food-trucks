import { FC, MouseEventHandler } from 'react';

type ButtonProps = {
  clickHandler?: () => void;
  children: string;
  fullWidth?: boolean;
};

export const Button: FC<ButtonProps> = ({
  clickHandler,
  children,
  fullWidth,
}) => (
  <button
    className={`${
      fullWidth && `w-full`
    } bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded`}
    onClick={clickHandler && clickHandler}
  >
    {children}
  </button>
);
