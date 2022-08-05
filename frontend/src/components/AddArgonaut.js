import React, {useState} from "react";
import ArgonautsDataService from "../services/ArgonautsDataService";


const AddArgonaut = () => {

    const [newArgonaut, setNewArgonaut] = useState("")

    const handleFormChange = e => {
        setNewArgonaut(e.target.value)
    }

    const addArgonaut = async () => {
        try {
            if (newArgonaut) {
                let argonautData = {
                    name: newArgonaut
                }
                await ArgonautsDataService.postArgonaut(argonautData)
            } else return
        } catch (e) {
            console.error(`Something went wrong when posting new argonaut, ${e}`)
        }

    }
    return (
        <div className={"flex justify-center"}>
            <div className={"flex-col text-center mt-5"}>
                <h2>Ajouter un(e) Argonaute</h2>
                <p className={"pt-10"}>Nom de l'Argonaute</p>
                <form>
                    <input type={"text"}
                           placeholder={"Charalampos"}
                           value={newArgonaut}
                           onChange={handleFormChange}
                           required/>
                    <button onClick={addArgonaut}>Envoyer</button>
                </form>
            </div>
        </div>
    )
}
export default AddArgonaut