import { ReactElement } from 'react';
import { navItems } from 'lib/constants';

import Navbar from './Navbar';

export default function Layout({ children }: never): ReactElement {
   return (
      <>
         <Navbar navbarItems={navItems} />
         {children}
      </>
   );
}
