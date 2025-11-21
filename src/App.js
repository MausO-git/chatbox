import React, {useState} from 'react';
import './App.css';
import Message from './components/Message';
import Formulaire from './components/Formulaire';
import { useParams } from 'react-router-dom';

function App() {
  let {login} = useParams();
  const [pseudo, setPseudo] = useState(login);
  const [messages, setMessages] = useState({})

  const addMessage = message => {
    const newMessage = {...messages}
    newMessage[`message-${Date.now()}`] = message
    setMessages(newMessage)
  }

  /* 
    state messages: 
    {
      message-1216154589: {
        pseudo: 'user',
        message: text
      },
      message-12161545887: {
        pseudo: 'user2',
        message: text
      }
    }
  */
  return (
    <div className="box">
      <div className="message">
        <div className="message">
          <Message />
          <Message />
          <Message />
        </div>
      </div>
      <Formulaire 
        pseudo={pseudo}
        addMessage={addMessage}
      />
    </div>
  );
}

export default App;
