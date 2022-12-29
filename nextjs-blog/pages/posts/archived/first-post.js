import Link from "next/link";
import Head from "next/head";
import Layout from "../../../components/layout";
// import Script from "next/script";

export default function FirstPost() {
    return (
        <>
            <Layout>
                <Head>
                    <title>First Next.js Post</title>
                </Head>
                {/* <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() => 
                        console.log('script loaded. window.fb has been populated')
                    }
                /> */}
                <h1>My First Next.js Post</h1>
                <h2 className="backToHome">
                    <Link href={"/"}>Back to home</Link>
                </h2>
            </Layout>
        </>
    );
}
