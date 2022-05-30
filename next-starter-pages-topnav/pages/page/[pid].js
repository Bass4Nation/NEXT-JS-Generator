import { useRouter } from 'next/router'
import Link from 'next/link'

import singleStyles from '../../styles/SinglePage.module.css'
import styles from '../../styles/Home.module.css'



const DynamicPage = () => {
    const router = useRouter()
    const  pid   = router.query
    const title = pid.text;
    const data = pid.data;
    const id = pid.id;
    console.log(id);




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