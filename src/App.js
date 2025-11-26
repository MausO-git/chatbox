import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Message from './components/Message';
import Formulaire from './components/Formulaire';
import { useParams } from 'react-router-dom';

// gestion firebase
import database from './base';
import { getDatabase, ref, set, remove, onValue } from 'firebase/database';

//gestion des animations
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './animation.css'

function App() {
  let {login} = useParams();
  const [pseudo, setPseudo] = useState(login);
  const [messages, setMessages] = useState({})
  const nodeRef = useRef()
  const messageRef = useRef()

  const isUser = myPseudo => myPseudo === pseudo

  useEffect(()=>{
    console.log("test")

    const dbMessageRef = ref(database, 'messages')
    //écouter l'event de changement de données
    onValue(dbMessageRef, (snapshot) => {
      const data = snapshot.val()
      if(data)
      {
        setMessages(data)
      }
    })
  },[])

  const addMessage = message => {
    const newMessage = {...messages}
    newMessage[`message-${Date.now()}`] = message
    Object.keys(newMessage).slice(0, -10).forEach(key => {
      newMessage[key] = null
    })
    set(ref(database, '/'), {
      messages: newMessage
    })
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

  const myMessages = Object.keys(messages).map(
    key => (
      <CSSTransition
        timeout={200}
        key={key}
        classNames={"fade"}
        nodeRef={nodeRef}
      >
        <Message 
          isUser={isUser}
          pseudo={messages[key].pseudo}
          message={messages[key].message}
        />
      </CSSTransition>
    )
  )

  return (
    <div className="box">
      <div>
        <div className="messages" ref={messageRef}>
          <TransitionGroup className="message">
            {myMessages}
          </TransitionGroup>
        </div>
      </div>
      <Formulaire
        pseudo={pseudo}
        addMessage={addMessage}
        length={140}
      />
    </div>
  );
}

export default App;
