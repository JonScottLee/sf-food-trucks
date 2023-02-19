import { Dispatch, SetStateAction } from 'react';
import { routes } from '../routes';
import { NavLink } from './nav-link';
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
    </ul>
    <Link
      href="mailto:lee.jon.scott@gmail.com"
      className="mx-auto lg:mx-0 hover:underline bg-white md:text-gray-800 font-bold md:rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
    >
      Contact
    </Link>
  </div>
);
