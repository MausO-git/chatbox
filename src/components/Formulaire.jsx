import React, {useState} from 'react';

function Formulaire(props) {
    const [stateMessage, setStateMessage] = useState("");
    const [length, setLength] = useState(props.length)

    const createMessage = () => {
        const {pseudo, addMessage, length} = props;

        const message = {
            pseudo: pseudo,
            message: stateMessage
        }

        addMessage(message)

        // reset
        setStateMessage("")
        setLength(length);
    }

    const handleChange = event => {
        const message = event.target.value;
        const length = props.length - message.length
        setStateMessage(message)
        setLength(length)
    }

    const handleSubmit = event => {
        event.preventDefault();
        createMessage();
    }

    const handleKeyUp = (event)=> {
        if(event.key === 'Enter')
        {
            createMessage()
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <textarea
                value={stateMessage}
                onChange={handleChange}
                required
                maxLength={props.length}
                onKeyUp={handleKeyUp}
            ></textarea>
            <div className="info">
                {length}
            </div>
            <button type="submit">
                Envoyer
            </button>
        </form>
    );
}

export default Formulaire;