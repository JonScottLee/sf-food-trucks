import './styles.css';
import { AppProps } from 'next/app';

import {
  Breadcrumb,
  Container,
  Footer,
  Nav,
  RouteData,
  routes,
} from '@sf-food-trucks/frontend-common';

import { useRouter } from 'next/router';
import Head from 'next/head';

function CustomApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathArr = router.pathname.split('/');
  const pathName = pathArr[pathArr.length - 1] || 'home';
  const currentRoute = routes[pathName] as RouteData;
  const pageTitle = currentRoute?.pageTitle || null;

  return (
    <>
      <Head>
        <title>Welcome to the Food Truck Finder App</title>
      </Head>
      <Nav />
      <main className="app min-h-screen">
        <Container className="pt-2">
          <Breadcrumb routes={routes} pathName={router.pathname} />
        </Container>

        <div className="pt-5">
          <Container>
            {pageTitle && (
              <h1 className="text-5xl font-bold mb-10">{pageTitle}</h1>
            )}

            <Component {...pageProps} />
          </Container>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default CustomApp;
