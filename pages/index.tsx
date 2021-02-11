import Head from 'next/head';
import { Layout, Overview, About, Contagion, Symptomp } from 'components';

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <Overview />
                <About />
                <Contagion />
                <Symptomp />
            </Layout>
        </>
    );
}
