import { useState, useEffect } from "react";
import { IonPage, IonContent, IonTabBar, IonTabButton, IonIcon, IonLabel, } from '@ionic/react';
import Header from "../components/Header";
import Appoint from "../components/appoint";
import './PillsReminder.css';
import TabBar from "../components/TabBar";
const AppointReminder = () => {
    const [pills, setPills] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

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
            <IonContent className="main">
                <Header title="Medical Appointment"/>
                <Appoint/>
            </IonContent>
            <TabBar/>
        </IonPage>

    );
}
export default AppointReminder;