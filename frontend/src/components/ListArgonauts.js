import React, {useEffect, useState} from "react";
import ArgonautsDataService from "../services/ArgonautsDataService";

const ListArgonaut = () => {

    const [argonauts, setArgonauts] = useState([]);
    useEffect(() => {
        (async function fetchData() {
            await retrieveArgonauts()
        })()
    }, [])

    const retrieveArgonauts = async () => {
        try {
            const response = await ArgonautsDataService.getAllArgonauts();
            response && setArgonauts(response.data)
            console.log(response.data)

        } catch (e) {
            console.error(`Something went wrong while retrieving Argonauts data : ${e}`)
        }
    }
    return (

        <>
            <div className={"flex justify-center"}>
                <div className={"flex mt-5"}>
                    <h2>Membres de l'équipage</h2>
                </div>
            </div>
            <div className={"flex justify-center mt-2"}>
                <div className={"argonaut-list"}>
                    {
                        argonauts && argonauts.map((argonaut, index) => (

                            <div key={index} className={"argonaut-list-item"}>
                                <div>{argonaut.name}</div>
                            </div>

                        ))}
                </div>
            </div>
        </>

    )
}
export default ListArgonaut