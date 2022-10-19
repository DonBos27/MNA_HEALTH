// import {useRef} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonImg, IonList, IonButtons, IonModal, IonAvatar, } from '@ionic/react';
import {trashBin,createSharp } from 'ionicons/icons';
import { useRef } from 'react';
// import { Remind } from './remind'
import './card.css';
// import { create } from 'domain';

const CardPills = () => {
    const modal = useRef(null);
    function dismiss() {
        modal.current?.dismiss();
    }
    return (
        <div >
            <IonCard className='pillscard' href='/pillsreminder'>
                <div className='pillshours' >
                    <p>08:45</p>
                    <li className='pillslist'>
                        <span>Para C </span>
                        <span>(1 pillule )</span>
                    </li>
                </div>
                <div className='pillsdate'>
                    <p id='day'>04/09/2022</p>
                </div>
            </IonCard>
        </div>
    );
};
export default CardPills;
