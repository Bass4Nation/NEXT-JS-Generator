import Link from "next/link";
import style from "../styles/TopNav.module.css"
import Data from "../pages/api/data/database.json"

// This file is a wrap around for the file _app.js in the pages folder.

const TopNav = () => {

    var title = Data[0].title;
    var arrString = Data[0].content;


    return (
        <>
        <section>
            <h1 class={style.toptitle}>{title}</h1>
            <section class={style.topnav}>
                <Link href="/" passHref><p class={style.active}>Home</p></Link>
                {arrString.map(element =>
                    <Link href={{
                        pathname: "/page/" + element.id,
                        query: element
                    }} passHref>
                        <p>{element.text}</p>
                    </Link>
                    )}
            </section>
        </section>
        </>
    )
}

export default TopNav;