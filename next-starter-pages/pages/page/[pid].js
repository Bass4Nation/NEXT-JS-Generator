import { useRouter } from 'next/router'
import Data from "../api/data/database.json"

const pid = () => {
    const router = useRouter()
    const { linkId } = router.query

    const findArr = (arr) => {
        let returnArr;
        for (const arrKey in arr) {
            if(arrKey.id === linkId){
                returnArr = arrKey
            }
        }

        return returnArr;
    }


    const arrString = findArr(Data[0].content);




    return (
        <>
            <main>
                <section>
                    <h1>{arrString.title}</h1>
                    <p> eodgnfosdnf</p>
                </section>

            </main>

        </>
    )
}

export default pid