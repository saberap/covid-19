import Navbar from './Navbar';

import navItems from 'constants/nav-items';

export default function Layout({ children }: any) {
    return (
        <>
            <Navbar navbarItems={navItems} />
            {children}
        </>
    );
}
