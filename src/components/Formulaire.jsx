import React, {useState} from 'react';

function Formulaire(props) {
    const [message, setMessage] = useState("");

    return (
        <form className="form">
            <textarea
                required
                maxLength="140"
            ></textarea>
            <div className="info">
                140
            </div>
            <button type="submit">
                Envoyer
            </button>
        </form>
    );
}

export default Formulaire;