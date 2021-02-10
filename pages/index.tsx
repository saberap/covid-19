import Head from 'next/head';
import Layout from 'components/Layout';

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout />
        </>
    );
}
