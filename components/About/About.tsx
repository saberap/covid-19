import { ReactElement } from 'react';
import Image from 'next/image';
import { navItemsMap } from 'lib/constants/nav-items.constant';

export default function About(): ReactElement {
   return (
      <div className='section' id={navItemsMap.get('ABOUT')?.url}>
         <div className='container'>
            <div className='relative md:flex md:py-10'>
               <div className='w-full md:w-1/3'>
                  <Image
                     src='/static/assets/images/About.svg'
                     alt='About covid 19'
                     width={840}
                     height={796}
                  />
               </div>
               <div className='w-full z-10 md:w-2/3 md:p-36'>
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
               <div className='hidden md:absolute md:bottom-0 md:right-5 md:block'>
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
