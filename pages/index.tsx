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
            <title>Covid-19 Alert</title>
            <link rel='icon' href='/favicon.ico' />
            <meta property='og:locale' content='fa_IR' />
            <meta property='og:type' content='website' />
            <meta property='og:title' content='Covid-19 Alert' />
            <meta
               property='og:description'
               content='Covid-19 Alert is a project to get acquainted with the corona virus and ways to prevent its transmission. For this project we use Next.js and Tailswind.'
            />
            <meta
               property='og:url'
               content='https://covid-19-chi.vercel.app/'
            />
            <meta property='og:site_name' content='Covid-19 Alert' />
            <meta
               property='og:image'
               content={'static/assets/images/logo-image.jpg'}
            />
            <meta property='og:image:width' content='250' />
            <meta property='og:image:height' content='250' />
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
