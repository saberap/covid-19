/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ReactElement } from 'react';
import Head from 'next/head';
import { fetchAPI } from 'lib/utilities';

import {
   Layout,
   Overview,
   About,
   Contagion,
   Symptomp,
   Prevention,
   LiveReport,
} from 'components';

import { ISummary } from 'lib/interfaces';
import { dynamicObjectSort } from 'lib/utilities';

export default function Home({ data }: any): ReactElement {
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
            <LiveReport data={data} />
         </Layout>
      </>
   );
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function getStaticProps() {
   let data: Array<ISummary> = [];
   const api = new fetchAPI();
   try {
      const res = await api.get(`/summary`);

      data = await res.data.Countries;

      data = data.map(
         (item: any): ISummary => ({
            name: item.Country,
            code: item.CountryCode,
            newConfirmed: item.NewConfirmed,
            newDeaths: item.NewDeaths,
            newRecovered: item.NewRecovered,
            slug: item.Slug,
            totalConfirmed: item.TotalConfirmed,
            totalDeaths: item.TotalDeaths,
            totalRecovered: item.TotalRecovered,
         })
      );
      data = data.sort(dynamicObjectSort('totalConfirmed', 'desc'));
   } catch (error) {
      console.log(error);
   }
   if (!data) {
      return {
         notFound: true,
      };
   }
   return {
      props: {
         data,
      },
   };
}
