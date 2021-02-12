import { ReactElement } from 'react';
import { AppProps } from 'next/app';
import 'styles/main.scss';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
   return <Component {...pageProps} />;
}

export default MyApp;
