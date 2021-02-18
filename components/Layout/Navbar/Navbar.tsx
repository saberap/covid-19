import { ReactElement } from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';

import { INav } from 'lib/interfaces';

interface Props {
   navbarItems: Array<INav>;
}
export default function Navbar({ navbarItems }: Props): ReactElement {
   return (
      <div className='navbar pt-5'>
         <div className='container'>
            <div className='flex justify-between'>
               <div>
                  <Image
                     src={'/static/assets/images/Logo.svg'}
                     alt='Logo'
                     width={50}
                     height={50}
                  />
               </div>
               <div>
                  <ul className='overflow-x-auto whitespace-nowrap w-96 md:flex md:text-green md:w-auto md:overflow-visible'>
                     {navbarItems.map((item: INav) => (
                        <li
                           key={item.name}
                           className={`mx-2 cursor-pointer no-underline inline-block`}
                        >
                           <Link
                              className='p-2 rounded-full border-2 border-transparent hover:no-underline hover:text-red hover:border-red'
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
               </div>
            </div>
         </div>
      </div>
   );
}
