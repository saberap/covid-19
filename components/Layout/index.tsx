import { ReactElement } from 'react';
import { navItems } from 'lib/constants';

import Navbar from './Navbar';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Layout({ children }: any): ReactElement {
   return (
      <>
         <Navbar navbarItems={navItems} />
         {children}
      </>
   );
}
