// import {useRef} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonImg, IonList, IonButtons, IonModal, IonAvatar, } from '@ionic/react';
import {trashBin,createSharp } from 'ionicons/icons';
import { useRef } from 'react';
import './card.css';
import { useHistory } from 'react-router';
const CardPills = () => {
    const history = useHistory()
    // const modal = useRef(null);
    // function dismiss() {
    //     modal.current?.dismiss();
    // }
    const pills = () =>{
        history.push('/pillsreminder')
    }
    return (
        <div >
            <IonCard className='pillscard'  onClick={pills}>
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
