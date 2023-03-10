type ButtonProps = {
  children: string;
  className?: string;
  clickHandler?: () => void;
};

export const Button = ({ className, clickHandler, children }: ButtonProps) => (
  <button
    className={`${className} bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded`}
    onClick={clickHandler && clickHandler}
  >
    {children}
  </button>
);
