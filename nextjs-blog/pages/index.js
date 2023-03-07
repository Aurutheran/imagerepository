import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Excepteur mollit sint magna duis ad occaecat ipsum ea non elit officia dolor. Consequat duis cillum amet exercitation ut. Sint dolore duis laboris do voluptate fugiat eiusmod sint cillum veniam eu culpa. Ut proident adipisicing occaecat aliqua veniam. Veniam ea consequat do velit est sunt.]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <Link href='posts/first-post'>Main site</Link>
      </section>
    </Layout>
  );
}