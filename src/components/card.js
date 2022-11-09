// import {useRef} from 'react';
import {  IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonImg, IonList, IonButtons, IonModal, IonAvatar, } from '@ionic/react';
import {medical } from 'ionicons/icons';
import { useRef } from 'react';

import './card.css';
import { useHistory } from 'react-router';
const CardPills = () => {
    const history = useHistory();
    const pills = () =>{
        history.push('/pills')
    }
    return (
        <div >
            <IonCard className='pillscard'  onClick={pills}>
                <IonCardHeader>
                    <IonCardSubtitle>Medication</IonCardSubtitle>
                    <IonCardTitle>Prescription   <IonIcon icon={medical} style={{paddingLeft:"10px"}} color="danger"/></IonCardTitle> 
                    <IonCardContent>A good way to keep and track your medication by adding it</IonCardContent>
                </IonCardHeader>
            </IonCard>
        </div>
    );
};
export default CardPills;
