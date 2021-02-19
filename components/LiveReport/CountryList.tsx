import { ReactElement, useState } from 'react';
import { ChevronRight, ChevronLeft } from 'react-feather';
import Flag from 'react-world-flags';
import numeral from 'numeral';

import { ISummary } from 'lib/interfaces';
import { makePagination } from 'lib/utilities';
interface Props {
   items: Array<ISummary>;
   itemClickHandler: (item: ISummary) => void;
}
export default function CountryList({
   items,
   itemClickHandler,
}: Props): ReactElement {
   const [pagination, setPagination] = useState({ top: 8, skip: 0 });
   const [data, setData] = useState(() => makePagination(items, 8, 0));

   const paginationHandler: (type: 'next' | 'previous') => void = type => {
      switch (type) {
         case 'next':
            setData(
               makePagination(
                  items,
                  pagination.top,
                  pagination.skip + pagination.top
               )
            );
            setPagination({
               top: pagination.top,
               skip: pagination.skip + pagination.top,
            });
            break;
         case 'previous':
            setData(
               makePagination(
                  items,
                  pagination.top,
                  pagination.skip - pagination.top
               )
            );
            setPagination({
               top: pagination.top,
               skip: pagination.skip - pagination.top,
            });
            break;
      }
   };

   return (
      <div className='country'>
         <div className='country__head flex justify-between py-5'>
            <h2 className='text-xl font-bold mx-4 live-circle'>Live Reports</h2>
            <div className='bg-white shadow-lg rounded-lg flex justify-between p-2'>
               <button
                  onClick={() => paginationHandler('previous')}
                  disabled={pagination.skip === 0}
               >
                  <ChevronLeft
                     color={`${pagination.skip === 0 ? 'gray' : 'black'}`}
                  />
               </button>
               <span className='-mt-1'>|</span>
               <button
                  onClick={() => paginationHandler('next')}
                  disabled={items.length - pagination.skip <= pagination.top}
               >
                  <ChevronRight
                     color={`${
                        items.length - pagination.skip <= pagination.top
                           ? 'gray'
                           : 'black'
                     }`}
                  />
               </button>
            </div>
         </div>
         <div className='country__body'>
            <ul>
               {data.map((item: ISummary) => (
                  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                  <li
                     key={item.slug}
                     className='flex justify-between p-2 my-2 rounded-lg cursor-pointer hover:bg-green-100'
                     onClick={() => itemClickHandler(item)}
                     onKeyDown={() => itemClickHandler(item)}
                  >
                     <Flag className='w-1/12 rounded-md' code={item.code} />
                     <h3 className='w-9/12 text-left font-semibold ml-5'>
                        {item.name}
                     </h3>
                     <span className='font-semibold'>
                        {numeral(item.totalConfirmed).format('0,0')}
                     </span>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
}
