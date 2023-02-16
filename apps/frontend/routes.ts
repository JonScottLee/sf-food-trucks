type RouteName = 'all-trucks' | 'home' | 'detail-page' | 404 | 500;

export type RouteData = {
  href: string;
  pageTitle?: string;
  breadcrumbName: string;
};

export type Routes = Record<RouteName, RouteData>;

export const routes: Routes = {
  home: {
    href: '/',
    breadcrumbName: 'Home',
  },
  'all-trucks': {
    href: '/all-trucks',
    pageTitle: 'All Trucks',
    breadcrumbName: 'All Trucks',
  },
  'detail-page': {
    href: '/all-trucks/detail-page',
    breadcrumbName: 'Details',
  },
  404: {
    href: '/404',
    breadcrumbName: '404',
  },
  500: {
    href: '/500',
    breadcrumbName: '500',
  },
};
