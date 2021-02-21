import { ReactElement, ReactNode } from 'react';
import { navItems, socialMedia } from 'lib/constants';

import Navbar from './Navbar';
import Footer from './Footer';

interface Props {
   children: ReactNode;
}

export default function Layout({ children }: Props): ReactElement {
   return (
      <div className='overflow-hidden'>
         <Navbar navbarItems={navItems} />
         {children}
         <Footer navbarItems={navItems} socialMedia={socialMedia} />
      </div>
   );
}
