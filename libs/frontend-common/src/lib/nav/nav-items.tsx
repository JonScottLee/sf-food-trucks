import { Button } from '../button/button';
import { Dispatch, SetStateAction } from 'react';
import { NavLink } from './nav-link';
import { routes } from '../routes';
import Link from 'next/link';

export const NavItems = ({
  navOpen,
  setNavOpen,
}: {
  navOpen: boolean;
  setNavOpen: Dispatch<SetStateAction<boolean>>;
}) => (
  <div
    onClick={() => {
      setNavOpen(false);
    }}
    className={`${
      !navOpen && 'hidden'
    } w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20`}
    id="nav-content"
  >
    <ul className="list-reset lg:flex justify-end flex-1 items-center">
      <li className="mr-3">
        <NavLink href={routes.home.href}>Home</NavLink>
      </li>
      <li className="mr-3">
        <NavLink href={routes['all-trucks'].href}>All Trucks</NavLink>
      </li>
      <li className="mr-3 md:hidden">
        <NavLink href="mailto:lee.jon.scot@gmail.com">Contact</NavLink>
      </li>
      <li className="hidden md:block">
        <Link href="mailto:lee.jon.scott@gmail.com">
          <Button>Contact</Button>
        </Link>
      </li>
    </ul>
  </div>
);
