import './styles.css';
import { AppProps } from 'next/app';
import { Breadcrumb } from '../components/breadcrumb/breadcrumb';
import { Container } from '../components/container/container';
import { Nav } from '../components/nav/nav';
import { routes, RouteData } from '../routes';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Footer } from '../components/footer/footer';

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
