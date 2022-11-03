import { useState, useEffect } from "react";
import { IonPage, IonContent, IonTabBar, IonTabButton, IonIcon, IonLabel, } from '@ionic/react';
import Header from "../components/Header";
import Remind from "../components/remind";
import './PillsReminder.css';
import TabBar from "../components/TabBar";
import {auth} from '../firebase/configFirebase'
import { onAuthStateChanged } from 'firebase/auth';
import { useHistory } from "react-router";
const PillsReminder = () => {
    const [pills, setPills] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const history = useHistory()

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                history.push('/pillsreminder');
            } else {
                history.push('/login');
            }
        })
    },[])

    return (
        <IonPage>
            <IonContent className="main">
                <Header title="Pills Reminder"/>
                <Remind/>
            </IonContent>
            <TabBar/>
        </IonPage>

    );
}
export default PillsReminder;