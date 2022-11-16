import React, { useState, useEffect, useRef } from 'react';
import Message from './messages';
import Forum from './Forum';
import { db } from '../firebase/configFirebase';
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';
import './chat.css'

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <div >
        <main >
          {messages &&
            messages.map((message) => (
              <Message key={message.id} message={message} />
            ))}
        </main>

      </div>

      {/* Send Message Compoenent */}
      <Forum scroll={scroll} />
      <span ref={scroll}></span>
    </div>
  );
};

export default Chat;