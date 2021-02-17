import { ReactElement } from 'react';
import Image from 'next/image';

export default function Footer(): ReactElement {
   return (
      <div className='footer'>
         <div className='container'>
            <div className='flex justify-between p-5 '>
               <Image
                  src={'/static/assets/images/LogoWithText.svg'}
                  width={220}
                  height={84}
                  alt='Logo'
               />
              
            </div>
         </div>
      </div>
   );
}
