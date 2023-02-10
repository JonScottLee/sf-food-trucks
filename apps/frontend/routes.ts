type RouteName = 'all-trucks' | 'home' | 'detail-page';

export type RouteData = {
  href: string;
  pageTitle?: string;
};

export type Routes = Record<RouteName, RouteData>;

export const routes: Routes = {
  home: {
    href: '/',
  },
  'all-trucks': {
    href: '/all-trucks',
    pageTitle: 'All Trucks',
  },
  'detail-page': {
    href: '/detail-page',
  },
};
