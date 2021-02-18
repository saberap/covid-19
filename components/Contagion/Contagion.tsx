import { ReactElement } from 'react';
import Image from 'next/image';
import { navItemsMap } from 'lib/constants/nav-items.constant';

export default function Contagion(): ReactElement {
   return (
      <div className='section my-10' id={navItemsMap.get('CONTAGION')?.url}>
         <div className='container'>
            <h3 className='primary-color font-bold text-center'>Covid-19</h3>
            <h2 className='heading-color font-bold text-4xl mb-5 text-center'>
               Contagion
            </h2>
            <p className='text-base mb-5 text-center'>
               Corona viruses are a type of virus. There are many different
               kinds, and some cause disease. A newly identified type
            </p>
            <div className='md:flex md:justify-center md:space-x-5 md:py-10 md:relative'>
               <div className='w-full my-5 bg-white shadow-lg transition-all duration-300 border-b-4 border-transparent hover:border-red-600 md:w-3/12 md:z-10'>
                  <div className='flex justify-center'>
                     <Image
                        className='block'
                        src='/static/assets/images/Air-Transmission.svg'
                        alt='Air Transmission'
                        width={269}
                        height={249}
                     />
                  </div>
                  <h2 className='heading-color font-bold text-2xl mb-5 text-center'>
                     Air Transmission
                  </h2>
                  <p className='text-base mb-5 text-center z-10'>
                     Objectively evolve tactical expertise before extensible
                     initiatives. Efficiently simplify
                  </p>
               </div>
               <div className='w-full  my-5 bg-white shadow-lg transition-all duration-300 border-b-4 border-transparent hover:border-red-600 md:w-3/12 md:z-10'>
                  <div className='flex justify-center'>
                     <Image
                        className='block'
                        src='/static/assets/images/Human-Contacts.svg'
                        alt='Human Contacts'
                        width={269}
                        height={249}
                     />
                  </div>
                  <h2 className='heading-color font-bold text-2xl mb-5 text-center'>
                     Human Contacts
                  </h2>
                  <p className='text-base mb-5 text-center'>
                     Washing your hands is one of thesimplest ways you can
                     protect
                  </p>
               </div>
               <div className='w-full  my-5 bg-white shadow-lg transition-all duration-300 border-b-4 border-transparent hover:border-red-600 md:w-3/12 md:z-10'>
                  <div className='flex justify-center'>
                     <Image
                        className='block'
                        src='/static/assets/images/Containted-Objects.svg'
                        alt='Containted Objects'
                        width={269}
                        height={249}
                     />
                  </div>
                  <h2 className='heading-color font-bold text-2xl mb-5 text-center'>
                     Containted Objects
                  </h2>
                  <p className='text-base mb-5 text-center'>
                     Use the tissue while sneezing,In this way, you can protect
                     your droplets.
                  </p>
               </div>
               <div className='hidden md:absolute md:bottom-0 md:left-5 md:z-0 md:block'>
                  <Image
                     src='/static/assets/images/Virus.svg'
                     alt='Corona Virus'
                     width={254}
                     height={259}
                  />
               </div>
            </div>
         </div>
      </div>
   );
}
