import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
//Importing Json here
import Data from "./api/data/database.json"


export default function Home() {
    //Adding Json to var
    var title = Data[0].title;
    var arrString = Data[0].content;
    //--------------------------------------------
    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Generated by create next app"/>
                {/*  Change icon in the folder public*/}
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>

                <p className={styles.description}>
                    Get started by editing{' '}
                    <code className={styles.code}>pages/index.js</code>
                </p>
                <p className={styles.description}>
                    Recommended to use <a href='https://www.netlify.com'>Netlify</a> to host this webpage
                </p>

                <div className={styles.grid}>
                    {arrString.map(key =>
                        <Link href={{
                        pathname:"/page/" + key.id,
                        query: key}} passHref>
                            <p className={styles.card}>{key.text}</p>
                        </Link>
                    )}
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>
                </a>
            </footer>
        </div>
    )
}
