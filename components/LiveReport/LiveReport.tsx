import { ReactElement, useState } from 'react';
import Image from 'next/image';
import ReactTooltip from 'react-tooltip';

import { ISummary } from 'lib/interfaces';

import CountryList from './CountryList';
import MapChart from './Chart';
interface Props {
   data: Array<ISummary>;
}

export default function LiveReport({ data }: Props): ReactElement {
   const [content, setContent] = useState('');
   return (
      <div className='section section__linear-gradient-from-bottom pb-56 relative'>
         <div className='container'>
            <div className='section__wrapper py-10 space-x-5'>
               <div className='p-5 bg-white shadow-xl rounded-lg relative w-4/12'>
                  <CountryList items={data} />
               </div>

               <div className='p-5  rounded-lg relative w-8/12'>
                  <MapChart setTooltipContent={setContent} data={data} />
                  <ReactTooltip backgroundColor='black'>{content}</ReactTooltip>
               </div>
            </div>
         </div>
         <div className='absolute bottom-0 right-5'>
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
