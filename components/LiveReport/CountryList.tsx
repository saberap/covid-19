import { ReactElement, useState } from 'react';
import { ChevronRight, ChevronLeft } from 'react-feather';
import Flag from 'react-world-flags';
import numeral from 'numeral';

import { ISummary } from 'lib/interfaces';
import { makePagination } from 'lib/utilities';
interface Props {
   items: Array<ISummary>;
}
export default function CountryList({ items }: Props): ReactElement {
   const [pagination, setPagination] = useState({ top: 10, skip: 0 });
   const [data, setData] = useState(() => makePagination(items, 10, 0));

   const paginationHandler: (type: 'next' | 'previous') => void = type => {
      switch (type) {
         case 'next':
            setData(
               makePagination(items, pagination.top, pagination.skip + 10)
            );
            setPagination({
               top: pagination.top,
               skip: pagination.skip + 10,
            });
            break;
         case 'previous':
            setData(
               makePagination(items, pagination.top, pagination.skip - 10)
            );
            setPagination({
               top: pagination.top,
               skip: pagination.skip - 10,
            });
            break;
      }
   };
   return (
      <div className='country'>
         <div className='country__head flex justify-between'>
            <h2 className='text-xl font-bold mx-2'>Live Reports</h2>
            <div className='bg-white shadow-lg rounded-lg flex justify-between p-2'>
               <button
                  className='hover:text-red-500'
                  onClick={() => paginationHandler('next')}
               >
                  <ChevronLeft />
               </button>
               <span className='-mt-1'>|</span>
               <button
                  className='hover:text-red-500'
                  onClick={() => paginationHandler('next')}
               >
                  <ChevronRight />
               </button>
            </div>
         </div>
         <div className='country__body'>
            <ul>
               {data.map((item: ISummary) => (
                  <li key={item.slug} className='flex justify-between'>
                     <Flag className='w-1/12' code={item.code} />
                     <h3 className='w-9/12'> {item.name} </h3>
                     <span>{numeral(item.totalConfirmed).format('0,0')}</span>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
}
