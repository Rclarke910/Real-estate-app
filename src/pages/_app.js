import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '@/componets/Layout';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>RealDeal</title>
    </Head>
    <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
  </>
  )
}
