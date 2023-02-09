import { AppProps } from 'next/app';
import Head from 'next/head';
import { Nav } from '../components/nav/nav';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to the Food Truck Finder App</title>
      </Head>
      <Nav />
      <main className="app">
        <div className="pt-24">
          <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <Component {...pageProps} />
          </div>
        </div>
      </main>
    </>
  );
}

export default CustomApp;
