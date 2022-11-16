import { IonPage, IonContent, IonToolbar, IonLabel, IonInput, IonButton, IonTextarea, useIonToast, } from "@ionic/react"
import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase/configFirebase'
import { addDoc, collection, serverTimestamp, query, orderBy, onSnapshot } from 'firebase/firestore';
import Header from "../components/Header"
import TabBar from "../components/TabBar"
import Message from "./messages";
import './chat.css'
import { warning } from "ionicons/icons";

const Forum = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [present] = useIonToast()

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
    const sendMessage = async (e) => {
        e.preventDefault()
        if (input === '') {
            present({
                message: 'Cannot Send An Empty Message',
                duration: 3000,
                position: 'top',
                icon: warning,
                cssClass: 'custom-toast',
                buttons: [
                    {
                        text: 'Dismiss',
                        role: 'cancel'
                    }
                ],
            });
            return
        }
        const { uid, displayName } = auth.currentUser
        await addDoc(collection(db, 'messages'), {
            text: input,
            name: displayName,
            uid,
            timestamp: serverTimestamp()
        })
        setInput('')
    }
    return (
        <IonPage>
            <IonContent className="main">
                <Header title='Forum' />
                <div style={{ backgroundColor: "#fff", marginTop: "130px", height: "460px", marginLeft: "5px", borderRadius: "0px", marginRight: "5px" }}>
                    <IonContent  >
                        {messages &&
                            messages.map((message) => (
                                <div className='msgs' key={message.id}>
                                    <div className={`msg ${message.uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                                        <p className='msg1'>{message.text}</p>
                                    </div>
                                </div>
                            ))}
                    </IonContent>
                </div>
            </IonContent>
            <IonToolbar style={{ backgroundColor: "#395dff" }}>
                <div style={{ backgroundColor: "#d9d9d9", marginTop: "30px", marginBottom: "20px", height: "50px", marginLeft: "5px", borderRadius: "15px", marginRight: "105px" }}>
                    <IonInput placeholder="Enter a message" style={{ marginLeft: "10px" }} value={input} onIonChange={(e) => setInput(e.target.value)}></IonInput>
                    <button style={{ backgroundColor: "#7f2f86", marginLeft: "250px", marginTop: "-40px", height: "50px", width: "90px", position: "absolute", borderRadius: "25px", color: "white" }} onClick={sendMessage}>Send</button>
                </div>
            </IonToolbar>
            <TabBar />
        </IonPage>
    )
}
export default Forum