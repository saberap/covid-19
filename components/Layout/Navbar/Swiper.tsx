import classes from '*.module.css';
import Image from 'next/image';
import { ReactElement } from 'react';

export default function Swiper(): ReactElement {
   return (
      <div className='swiper'>
         <div className='swiper__icon'>
            <Image
               src={'/static/assets/images/swipe.svg'}
               width={25}
               height={25}
               alt='swipe'
            />
         </div>
         <div className='swiper__line'></div>
      </div>
   );
}
