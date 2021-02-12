import { ReactElement } from 'react';

import { ISummary } from 'lib/interfaces';

import CountryList from './CountryList';
interface Props {
   data: Array<ISummary>;
}

export default function LiveReport({ data }: Props): ReactElement {
   return (
      <div className='section section__linear-gradient-from-bottom'>
         <div className='container'>
            <div className='section__wrapper py-10'>
               <div className='p-5 bg-white shadow-xl rounded-lg relative w-4/12'>
                  <CountryList items={data} />
               </div>

               <div></div>
            </div>
         </div>
      </div>
   );
}
