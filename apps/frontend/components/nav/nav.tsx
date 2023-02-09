import Link from 'next/link';
import { useState, useEffect } from 'react';
import { routes } from '../../routes';
import { NavLink } from './nav-link';

type Classes = {
  nav: string;
  title: string;
};

const normalClasses: Classes = {
  nav: '',
  title: 'text-white',
};

const stickyClasses: Classes = {
  nav: 'bg-white ',
  title: 'text-black',
};

const stickyThreshold = 70;

export const Nav = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setSticky(window.scrollY > stickyThreshold)
      );
    }
  }, []);

  return (
    <nav
      id="header"
      className={`sticky w-full top-0 z-10 transition-background duration-200 ${
        sticky ? stickyClasses.nav : normalClasses.nav
      }`}
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <Link
            className={`${
              sticky ? stickyClasses.title : normalClasses.title
            } toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl`}
            href="/"
          >
            SF FOOD TRUCK FINDER
          </Link>
        </div>
        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <NavLink href={routes.allTrucks}>My Kingdom</NavLink>
            </li>
            <li className="mr-3">
              <NavLink href={routes.allTrucks}>For</NavLink>
            </li>
            <li className="mr-3">
              <NavLink href={routes.allTrucks}>Some Links</NavLink>
            </li>
          </ul>
          <Link
            href="mailto:lee.jon.scott@gmail.com"
            className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Contact
          </Link>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
};
