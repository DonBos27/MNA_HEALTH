// import {useRef} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonImg, IonList, IonButtons, IonModal, IonAvatar, } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { useRef } from 'react';
import './card.css';

const CardPills = () => {
    const modal = useRef(null);

    function dismiss() {
        modal.current?.dismiss();
    }
    return (
        <div >
            <IonCard className='pillscard' href='/pillsreminder'>
                <div className='pillshours'>
                    <p>08:45</p>
                    <li className='pillslist'>
                        <span>Para C</span> <br/>
                    </li>
                </div>
                <div className='pillsdate'>
                    <p id='day'>Today</p>
                    <p>04/09/2022</p>
                </div>
            </IonCard>
            {/* <IonCard id="open-modal" className='cardmodal' href='/setting'>
                <IonItem>
                    <h2 className='hoursC'>20:45</h2>
                    <IonLabel className="label">
                        <li >
                            <span >Para C</span>
                        </li>
                    </IonLabel>
                </IonItem>
                <IonCardContent>
                    <span className='dateC'>
                        <h5>Today</h5>
                        <p>09/09/2022</p>
                    </span>
                </IonCardContent>
            </IonCard> */}
        </div>
    );
};
export default CardPills;
