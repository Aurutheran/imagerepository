import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import Layout from "../../components/layout";

export default function FirstPost() {
    return (
      <Layout>
        <Head>
            <title>First Site</title>
            <script src="https://connect.facebook.net/en_US/sdk.js" />
        </Head>
        <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          alert(`script loaded correctly, window.FB has been populated`)
        }
        />
        <main>
            <h1>First Post</h1>
            <h2>
            <Link href="/">Back to home</Link>
            </h2>
            <YourComponent name="Ruthvik Penumatcha" location="profile2.jpg"/>
        </main>
        
      </Layout>
    );
  }

  function YourComponent(props){
    return(
        <Image
        src={`/images/${props.location}`}
        height={240}
        width={240}
        alt={`${props.name}`}
        />
    )
  };