import { IonTabBar, IonTabButton, IonIcon, IonLabel, IonPage, IonContent } from "@ionic/react"
import { businessOutline, cog, home } from 'ionicons/icons';
import { useState } from "react";
const TabBar = () => {
    return (
        <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home" >
                <IonIcon icon={home} />
                <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="localisation" href="/localisation" >
                <IonIcon icon={businessOutline} />
                <IonLabel>Hospital</IonLabel>
            </IonTabButton>
            <IonTabButton tab="setting" href="/setting" >
                <IonIcon icon={cog} />
                <IonLabel>Setting</IonLabel>
            </IonTabButton>
        </IonTabBar>
    );

}
export default TabBar