import { ReactElement, useState } from 'react';
import Image from 'next/image';
import ReactTooltip from 'react-tooltip';

import { ISummary } from 'lib/interfaces';

import CountryList from './CountryList';
import MapChart from './Chart';
import { navItemsMap } from 'lib/constants/nav-items.constant';
interface Props {
   data: Array<ISummary>;
}

export default function LiveReport({ data }: Props): ReactElement {
   const [content, setContent] = useState('');
   return (
      <div
         className='section section__linear-gradient-from-bottom md:pb-14 md:relative'
         id={navItemsMap.get('LIVEREPORT')?.url}
      >
         <div className='container'>
            <div className='md:flex md:py-10 md:space-x-5'>
               <div className='w-full p-5 rounded-lg md:relative md:w-8/12'>
                  <MapChart setTooltipContent={setContent} data={data} />
                  <ReactTooltip backgroundColor='black'>{content}</ReactTooltip>
               </div>
               <div className='w-full p-5 bg-white shadow-xl rounded-lg  md:relative md:w-4/12'>
                  <CountryList items={data} />
               </div>
            </div>
         </div>
         <div className='hidden md:absolute md:bottom-0 md:right-5'>
            <Image
               src='/static/assets/images/Virus.svg'
               alt='Corona Virus'
               width={283}
               height={292}
            />
         </div>
      </div>
   );
}
