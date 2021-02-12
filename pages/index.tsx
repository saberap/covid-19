import { ReactElement } from 'react';
import Head from 'next/head';

import {
   Layout,
   Overview,
   About,
   Contagion,
   Symptomp,
   Prevention,
   LiveReport,
} from 'components';

export default function Home(): ReactElement {
   return (
      <>
         <Head>
            <title>Create Next App</title>
            <link rel='icon' href='/favicon.ico' />
         </Head>
         <Layout>
            <Overview />
            <About />
            <Contagion />
            <Symptomp />
            <Prevention />
            <LiveReport />
         </Layout>
      </>
   );
}
