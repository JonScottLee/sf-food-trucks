import { ReactNode } from 'react';
import { Card } from './card';

type GridProps = {
  children: ReactNode;
};

const GridRoot = ({ children }: GridProps) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 ">
    {children}
  </div>
);

export const CardGrid = Object.assign(GridRoot, {
  Card,
});
