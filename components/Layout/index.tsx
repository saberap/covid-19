import { ReactElement } from 'react';
import { navItems, socialMedia } from 'lib/constants';

import Navbar from './Navbar';
import Footer from './Footer';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Layout({ children }: any): ReactElement {
   return (
      <div className='overflow-hidden'>
         <Navbar navbarItems={navItems} />
         {children}
         <Footer navbarItems={navItems} socialMedia={socialMedia} />
      </div>
   );
}
