import { ReactElement } from 'react';

import Image from 'next/image';
import { navItemsMap } from 'lib/constants/nav-items.constant';

export default function Overview(): ReactElement {
   return (
      <div
         className='section section__linear-gradient'
         id={navItemsMap.get('OVERVIEW')?.url}
      >
         <div className='container'>
            <div className='md:flex py-10'>
               <div className='w-full md:w-1/2'>
                  <Image
                     src={'/static/assets/images/Overview.svg'}
                     alt='Overview to Covid 19'
                     width={1177}
                     height={812}
                  />
               </div>
               <div className='w-full md:w-1/2 md:p-36'>
                  <h3 className='primary-color font-bold'>COVID-19 Alert</h3>
                  <h2 className='heading-color font-bold text-4xl mb-5'>
                     Stay at Home quarantine To stop Corona virus
                  </h2>
                  <p className='text-base mb-5'>
                     There is no specific medicine to prevent or treat
                     coronavirus disease (COVID-19). People may need supportive
                     care to .
                  </p>
                  <button className='primary-background-color text-white rounded-full py-3 px-5 text-lg hover:bg-red-600'>
                     Let Us Help
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
