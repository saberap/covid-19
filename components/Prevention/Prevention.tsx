/* eslint-disable react/no-unescaped-entities */
import { ReactElement } from 'react';
import Image from 'next/image';

import { navItemsMap } from 'lib/constants/nav-items.constant';

export default function Prevention(): ReactElement {
   return (
      <div className='section' id={navItemsMap.get('PREVENTION')?.url}>
         <div className='container'>
            <h3 className='primary-color font-bold mt-5 text-center'>
               Covid-19
            </h3>
            <h2 className='heading-color font-bold text-4xl mb-5 text-center'>
               What should we do
            </h2>
            <p className='text-base text-center'>
               Corona viruses are a type of virus. There are many different
               kinds, and some cause disease. A newly identified type has caused
            </p>
            <div className='mt-5 md:flex md:px-32 md:relative'>
               <div className='w-full md:w-2/3 md:p-36'>
                  <h2 className='heading-color font-bold text-4xl mb-5 relative'>
                     <span className='primary-background-color-light inline-flex justify-center items-center primary-color rounded-full text-2xl w-10 h-10'>
                        01
                     </span>{' '}
                     Wear masks
                  </h2>
                  <p className='text-base mb-5'>
                     Continually seize impactful vortals rather than
                     future-proof supply chains. Uniquely exploit emerging
                     niches via fully tested meta-services. Competently pursue
                     standards compliant leadership skills vis-a-vis pandemic
                     "outside the box" thinking. Objectively
                  </p>
               </div>
               <div className='hidden md:w-1/3 md:block'>
                  <Image
                     src='/static/assets/images/Mask-girl.svg'
                     alt='Wear masks'
                     width={350}
                     height={450}
                  />
               </div>
               <div className='hidden md:absolute md:bottom-0 md:-left-40'>
                  <Image
                     src='/static/assets/images/Virus-g.svg'
                     alt='Corona Virus'
                     width={250}
                     height={292}
                  />
               </div>
            </div>
            <div className='md:flex md:px-32 md:relative'>
               <div className='hidden md:w-1/3 md:block'>
                  <Image
                     src='/static/assets/images/Wash-Hands.svg'
                     alt='Wash Hands'
                     width={350}
                     height={450}
                  />
               </div>
               <div className='w-full md:w-2/3 md:py-10'>
                  <h2 className='heading-color font-bold text-4xl mb-5 relative'>
                     <span className='primary-background-color-light inline-flex justify-center items-center primary-color rounded-full text-2xl w-10 h-10'>
                        02
                     </span>{' '}
                     Wash Your Hands
                  </h2>
                  <p className='text-base mb-5'>
                     Continually seize impactful vortals rather than
                     future-proof supply chains. Uniquely exploit emerging
                     niches via fully tested meta-services. Competently pursue
                     standards compliant leadership skills vis-a-vis pandemic
                     "outside the box" thinking. Objectively Continually seize
                     impactful vortals
                  </p>
               </div>
            </div>
            <div className='md:flex md:px-32'>
               <div className='w-full md:w-2/3'>
                  <h2 className='heading-color font-bold text-4xl mb-5 relative'>
                     <span className='primary-background-color-light inline-flex justify-center items-center primary-color rounded-full text-2xl w-10 h-10'>
                        03
                     </span>{' '}
                     Use nose - rag
                  </h2>
                  <p className='text-base mb-5'>
                     Continually seize impactful vortals rather than
                     future-proof supply chains. Uniquely exploit emerging
                     niches via fully tested meta-services. Competently pursue
                     standards compliant leadership skills vis-a-vis pandemic
                     "outside the box" thinking. Objectively
                  </p>
               </div>
               <div className='hidden md:w-1/3 md:block'>
                  <Image
                     src='/static/assets/images/Use-Nose.svg'
                     alt='Use Nose'
                     width={350}
                     height={450}
                  />
               </div>
            </div>
            <div className='md:flex md:px-32 md:relative'>
               <div className='hidden md:w-1/3 md:block'>
                  <Image
                     src='/static/assets/images/Avoid-Contacts.svg'
                     alt='Avoid contacts'
                     width={350}
                     height={450}
                  />
               </div>
               <div className='w-full md:w-2/3'>
                  <h2 className='heading-color font-bold text-4xl mb-5 relative'>
                     <span className='primary-background-color-light inline-flex justify-center items-center primary-color rounded-full text-2xl w-10 h-10'>
                        04
                     </span>{' '}
                     Avoid contacts
                  </h2>
                  <p className='text-base mb-5'>
                     Continually seize impactful vortals rather than
                     future-proof supply chains. Uniquely exploit emerging
                     niches via fully tested meta-services. Competently pursue
                     standards compliant leadership skills vis-a-vis pandemic
                  </p>
               </div>
               <div className='hidden md:absolute md:bottom-25 md:right-0'>
                  <Image
                     src='/static/assets/images/Virus.svg'
                     alt='Corona Virus'
                     width={100}
                     height={292}
                  />
               </div>
               <div className='hidden md:absolute md:bottom-0 md:right-5'>
                  <Image
                     src='/static/assets/images/Virus-g.svg'
                     alt='Corona Virus'
                     width={150}
                     height={292}
                  />
               </div>
            </div>
         </div>
      </div>
   );
}
