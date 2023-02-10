import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ className, children }: ContainerProps) => (
  <div
    className={`${className} container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center`}
  >
    {children}
  </div>
);
