import { ReactElement } from 'react';
import Image from 'next/image';
import { navItemsMap } from 'lib/constants/nav-items.constant';

export default function About(): ReactElement {
   return (
      <div className='section' id={navItemsMap.get('ABOUT')?.url}>
         <div className='container'>
            <div className='section__wrapper py-10 relative'>
               <div className='flex-1'>
                  <Image
                     src='/static/assets/images/About.svg'
                     alt='About covid 19'
                     width={840}
                     height={796}
                  />
               </div>
               <div className='flex-1 p-36'>
                  <h3 className='primary-color font-bold'>What Is Covid-19</h3>
                  <h2 className='heading-color font-bold text-4xl mb-5'>
                     Coronavirus
                  </h2>
                  <p className='text-base mb-5'>
                     Corona viruses are a type of virus. There are many
                     different kinds, and some cause disease. A newly identified
                     type has caused a recent outbreak of respiratory illness
                     now called COVID-19.Lauren Sauer, M.S., the director of
                     operations with the Johns Hopkins Office of Critical Event
                     Preparedness and Response
                  </p>
                  <button className='primary-background-color-light primary-color rounded-full py-3 px-5 text-lg hover:bg-red-300'>
                     Learn More
                  </button>
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
         </div>
      </div>
   );
}
