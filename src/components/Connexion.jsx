import React, {useState} from "react";
import { Navigate } from "react-router-dom";

function Connexion(props) {
    const [pseudo, setPseudo] = useState("");
    const [goChat, setGoChat] = useState(false);

    const handleChange = (event) => {
        const pseudo = event.target.value;
        setPseudo(pseudo)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setGoChat(true)
    }

    if(goChat) {
        return <Navigate to={`/pseudo/${pseudo}`}/>
    }

    return(
        <div className="connexionBox">
            <form className="connexion" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={pseudo}
                    onChange={handleChange}
                    placeholder="Pseudo"
                    required
                />
                <button type="submit">GO</button>
            </form>
        </div>
    )
}

export default Connexion;
