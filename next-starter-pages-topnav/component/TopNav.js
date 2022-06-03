import Link from "next/link";
// This also has its own styleset
import style from "../styles/TopNav.module.css"
// Importing Json file
import Data from "../pages/api/data/database.json"

// This file is a wrap around for the file _app.js in the pages folder.

const TopNav = () => {

    // Change Data[0].title to change 
    var title = Data[0].title;
    // this is a array with strings. So either change it out with a another array. Or
    // add it manually in the return statement below.
    var arrString = Data[0].content;


    return (
        <>
        <section>
            <h1 class={style.toptitle}>{title}</h1>
            <section class={style.topnav}>¨
                {/* Array of string is used here. This is a type of foreach code. */}
                {/* It is also posting all data in the url. So the /page/[pid].js will receive it. */}
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