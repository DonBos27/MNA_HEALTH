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
        <div>
            <IonCard id="open-modal" className='cardmodal' href='/setting'>
                <IonItem>
                    <h2 style={{ paddingRight: "45px" }} className='hoursC'>20:45</h2>
                    <IonLabel style={{ paddingTop: "10px" }}>
                        <li style={{ color: "red" }}>
                            <span style={{ color: "black" }}>Para C</span>
                        </li>
                    </IonLabel>
                </IonItem>
                <IonCardContent>
                    <span className='dateC'>
                        <h5>Today</h5>
                        <p>09/09/2022</p>
                    </span>
                </IonCardContent>
            </IonCard>
            {/* <IonModal id="example-modal" ref={modal} trigger="open-modal" className='mod'>
                <IonContent>
                    <IonList>
                        <IonItem>
                            <IonCard id="open-modal" >
                                <IonItem>
                                    <h2 style={{ paddingRight: "45px" }} className='hoursC'>08:45</h2>
                                    <IonLabel style={{ paddingTop: "10px" }}>Ibuprofen</IonLabel>
                                </IonItem>
                                <IonCardContent>
                                    <span className='dateC'>
                                        <h5>Today</h5>
                                        <p>09/09/2022</p>
                                    </span>
                                </IonCardContent>
                            </IonCard>
                        </IonItem>
                        <IonItem>
                            <IonCard id="open-modal" >
                                <IonItem>
                                    <h2 style={{ paddingRight: "45px" }} >12:45</h2>
                                    <IonLabel style={{ paddingTop: "10px" }}>Cough Silent</IonLabel>
                                </IonItem>
                                <IonCardContent>
                                    <span className='dateC'>
                                        <h5>Today</h5>
                                        <p>09/09/2022</p>
                                    </span>
                                </IonCardContent>
                            </IonCard>
                        </IonItem>
                    </IonList>
                </IonContent>
            </IonModal> */}
        </div>
    );
};
export default CardPills;
