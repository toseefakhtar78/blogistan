import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export const siteTitle = "blogistan";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>

        
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="blog" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="google-adsense-account" content="ca-pub-1241486495309147"></meta>
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        
        
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/blogistan.jpg"
              className={utilStyles.borderCircle}
              height={200}
              width={350}
              alt="Blogistan"
            />
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/blogistan.jpg"
                className={utilStyles.borderCircle}
                height={200}
                width={350}
                alt="Blogistan"
              />
            </Link>
          </>
        )}
      </header>

      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1241486495309147"
     crossorigin="anonymous"></script>

<ins class="adsbygoogle"
     style={{display:"block"}}
     data-ad-client="ca-pub-1241486495309147"
     data-ad-slot="6780024865"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
