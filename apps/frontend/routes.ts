type RouteName = 'all-trucks' | 'home' | 'detail-page';

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
};
