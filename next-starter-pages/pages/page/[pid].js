import { useRouter } from 'next/router'
import Link from 'next/link'

import singleStyles from '../../styles/SinglePage.module.css'
import styles from '../../styles/Home.module.css'



const DynamicPage = () => {
    // This is a dynamic page. Every url that is after /page/[here] will start this file.
    const router = useRouter()
    // Getting url data.
    const  pid   = router.query
    // Converting url data to title, string data and a ID.
    const title = pid.text;
    const data = pid.data;
    const id = pid.id;

// Below it is the HTML where title, data and id is used. Change them out with a string below or above 
    return (
        <>
        <header>
            <title>{title}</title>
        </header>
            <main className={styles.main}>
                <section className={singleStyles.sectionMid}>
                    <section className={singleStyles.returnFrontpage}>
                        <Link href="/" passHref><h1>To the frontpage</h1></Link>
                    </section>
                    <h1>{title}</h1>
                    <p>Id : {id}</p>
                    <p>{data}</p>
                </section>

            </main>
        </>
    )
}

export default DynamicPage