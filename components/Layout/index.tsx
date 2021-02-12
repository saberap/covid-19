import Navbar from './Navbar';

import { navItems } from 'lib/constants';

export default function Layout({ children }: any) {
    return (
        <>
            <Navbar navbarItems={navItems} />
            {children}
        </>
    );
}
