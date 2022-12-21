import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
        <Head>
            <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
            <p>Hi, I am a software engineer learning Next.js! I love to read and binge watch fantasy shows. If you want to chat or send me any recommendations, you can contact me on <a href="https://www.linkedin.com/in/ramlahaziz/">LinkedIn</a>!</p>
            <p>
                (This is a sample website from the official Next.js start tutorial. Click <a href="https://nextjs.org/learn">here</a> to build a site just like this one.)
            </p>
        </section>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list}>
                {allPostsData.map(({ id, date, title }) => (
                    <li className={utilStyles.listItem} key={id}>
                        {title}
                        <br />
                        {id}
                        <br />
                        {date}
                    </li>
                ))}
            </ul>
        </section>
    </Layout>
  )
}