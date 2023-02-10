import './styles.css';
import { AppProps } from 'next/app';
import { Nav } from '../components/nav/nav';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { routes, RouteData } from '../routes';

function CustomApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathName = router.pathname.split('/')[1] || 'home';
  const currentRoute = routes[pathName] as RouteData;

  return (
    <>
      <Head>
        <title>Welcome to the Food Truck Finder App</title>
      </Head>
      <Nav />
      <main className="app">
        <div className="pt-24">
          <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <h1 className="text-5xl font-bold mb-10">
              {currentRoute.pageTitle}
            </h1>
            <Component {...pageProps} />
          </div>
        </div>
      </main>
    </>
  );
}

export default CustomApp;
