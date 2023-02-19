import { Routes, RouteData } from '../routes';
import Link from 'next/link';

export const Breadcrumb = ({
  routes,
  pathName,
}: {
  routes: Routes;
  pathName: string;
}) => {
  const paths = pathName.split('/').filter(Boolean); // remove empty strings, all falsy values
  const currentPath = paths[paths.length - 1];

  // A breadcrumb isn't much good if it has nothing to show.
  if (paths.length === 0) return null;

  return (
    <nav className="flex text-" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-white hover:underline"
          >
            <svg
              aria-hidden="true"
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            Home
          </Link>
        </li>
        {paths.map((path) => {
          const routeData = routes[path] as RouteData;
          const crumbIsCurrentRoute = currentPath === path;
          const crumbClasses = 'font-bold ml-1 text-sm text-white  md:ml-2';
          const { breadcrumbName } = routeData;

          const CrumbAsSpan = () => (
            <span className={crumbClasses}>{breadcrumbName}</span>
          );

          const CrumbAsLink = () => (
            <Link
              href={routeData.href}
              className={`hover:underline ${crumbClasses}`}
            >
              {breadcrumbName}
            </Link>
          );

          return (
            <li key={path}>
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {crumbIsCurrentRoute ? <CrumbAsSpan /> : <CrumbAsLink />}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
