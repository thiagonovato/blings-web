import React from 'react';
import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ContactProvider } from '../contexts/ContactContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Yellow Pages</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <ContactProvider>
        <Component {...pageProps} />
      </ContactProvider>
    </React.Fragment>
  );
}

export default MyApp;
