import React from 'react';
import { getAuth } from 'firebase/auth';
import './chat.css'
const Message = ({ message }) => {
    const auth = getAuth();
    const user = auth.currentUser;
    return (
        <div className='msgs'>
            <div className={`msg ${message.uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                <p className='msg1'>{message.text}</p>
            </div>
        </div>
    );
};

export default Message;