import { useState, useEffect } from "react";
import { IonPage, IonContent, IonTabBar, IonTabButton, IonIcon, IonLabel, } from '@ionic/react';
import Header from "../components/Header";
import Remind from "../components/remind";
import './PillsReminder.css';
import TabBar from "../components/TabBar";
const PillsReminder = () => {
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
                <Header title="Pills Reminder"/>
                <Remind/>
            </IonContent>
            <TabBar/>
        </IonPage>

    );
}
export default PillsReminder;