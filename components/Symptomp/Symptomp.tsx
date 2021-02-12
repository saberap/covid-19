import { ReactElement } from 'react';
import Image from 'next/image';

export default function Symptomp(): ReactElement {
   return (
      <div className='section'>
         <div className='container'>
            <h3 className='primary-color font-bold text-center'>Covid-19</h3>
            <h2 className='heading-color font-bold text-4xl mb-5 text-center'>
               Symptomps
            </h2>
            <p className='text-base text-center'>
               Corona viruses are a type of virus. There are many different
               kinds, and some cause disease. A newly identified type has caused
               a recent outbreak of respiratory
            </p>
            <div className='flex justify-center space-x-5 relative '>
               <div className='flex justify-center'>
                  <Image
                     src='/static/assets/images/Symptomp.svg'
                     alt='Symptomps'
                     width={900}
                     height={700}
                  />
               </div>
               <div className='absolute top-1/2 left-5 z-0'>
                  <Image
                     src='/static/assets/images/Path-1.svg'
                     alt='Path'
                     width={129}
                     height={134}
                  />
               </div>
               <div className='absolute top-1/2 right-5 z-0'>
                  <Image
                     src='/static/assets/images/Path-2.svg'
                     alt='Path'
                     width={220}
                     height={148}
                  />
               </div>
            </div>
         </div>
      </div>
   );
}
