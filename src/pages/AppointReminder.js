import { useState, useEffect } from "react";
import { IonPage, IonContent, IonTabBar, IonTabButton, IonIcon, IonLabel, } from '@ionic/react';
import Header from "../components/Header";
import Appoint from "../components/appoint";
import './PillsReminder.css';
import TabBar from "../components/TabBar";
import {auth} from '../firebase/configFirebase'
import { onAuthStateChanged } from 'firebase/auth';
import { useHistory } from 'react-router';
const AppointReminder = () => {
    const [pills, setPills] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const history = useHistory();
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                history.replace('/appointreminder');
            } else {
                history.replace('/login');
            }
        })
    },[])
    useEffect(() => {
        const fetchPills = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts"
                );
                const data = await response.json();
                setPills(data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchPills();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <IonPage>
            <IonContent className="">
                <Header title="Appointment"/>
                <Appoint/>
            </IonContent>
            <TabBar/>
        </IonPage>

    );
}
export default AppointReminder;