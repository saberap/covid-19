import { AppProps } from 'next/app';
import 'stylesheets/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
