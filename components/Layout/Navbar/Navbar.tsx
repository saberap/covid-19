import { ReactElement } from 'react';
import Image from 'next/image';

import { INav } from 'lib/interfaces';

interface Props {
   navbarItems: Array<INav>;
}
export default function Navbar({ navbarItems }: Props): ReactElement {
   return (
      <div className='navbar'>
         <div className='container'>
            <div className='navbar__wrapper'>
               <div className='navbar__logo'>
                  <Image
                     src={'/static/assets/images/Logo.svg'}
                     alt='Logo'
                     width={50}
                     height={50}
                  />
               </div>
               <div className='navbar__menu'>
                  <ul>
                     {navbarItems.map((item: INav) => (
                        <li
                           key={item.name}
                           className={item.name === 'OVERVIEW' ? 'active' : ''}
                        >
                           <a href={item.url}>{item.title}</a>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
}
