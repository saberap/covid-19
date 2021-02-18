import { ReactElement } from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';

import { INav, ISocial } from 'lib/interfaces';

interface Props {
   navbarItems: Array<INav>;
   socialMedia: Array<ISocial>;
}

export default function Footer({
   navbarItems,
   socialMedia,
}: Props): ReactElement {
   return (
      <div className='footer p-5'>
         <div className='container'>
            <div className='md:flex md:justify-between'>
               <div className='mx-auto flex justify-center md:-mt-5 md:block md:mx-0'>
                  <Image
                     src={'/static/assets/images/LogoWithText.svg'}
                     width={220}
                     height={84}
                     alt='Logo'
                  />
               </div>
               <ul className='my-5 text-center md:flex md:my-0'>
                  {navbarItems.map((item: INav) => (
                     <li key={item.name} className='mx-2 cursor-pointer'>
                        <Link
                           to={item.url}
                           spy={true}
                           smooth={true}
                           duration={500}
                        >
                           {item.title}
                        </Link>
                     </li>
                  ))}
               </ul>
               <ul className='flex justify-center my-5 md:my-0'>
                  {socialMedia.map(({ name, url, icon: Icon }: ISocial) => (
                     <li key={name} className='mx-2'>
                        <a href={url} target='_blank' rel='noreferrer'>
                           <Icon size={25} fill='#fff' />
                        </a>
                     </li>
                  ))}
               </ul>
            </div>
            <div className='text-center text-sm'>
               <p>&#169; 2021 - All rights reserved by Saberap</p>
            </div>
         </div>
      </div>
   );
}
