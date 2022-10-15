import React, { useState } from 'react';
import { IonButtons, IonInput, IonCard, IonLabel, IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonIcon, IonItemDivider } from '@ionic/react';
import './remind.css';
import Header from './Header';
import { add } from "ionicons/icons";
function Remind() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <IonPage >
            {/* <IonContent > */}
            <button className='btn' expand="block" onClick={() => setIsOpen(true)}>
                <IonIcon icon={add} />
            </button>
            <IonModal isOpen={isOpen} className="content" style={{}}>
                {/* <IonContent className="content"> */}
                <Header title="Fills The Form"/>
                <IonCard className='pills-card'>
                    <IonItemDivider>
                        {/* <IonLabel>Time</IonLabel> */}
                        <IonInput type='time' />
                    </IonItemDivider>
                    <IonItemDivider>
                        {/* <IonLabel>Pills</IonLabel> */}
                        <IonInput type='text' placeholder='Pills'/>
                    </IonItemDivider>
                    <IonItemDivider style={{marginBottom:"20px"}}>
                        {/* <IonLabel>Date</IonLabel> */}
                        <IonInput type='date' />
                    </IonItemDivider>
                    <IonItemDivider className='btnModal' style={{paddingBottom:"10px"}}>
                        <button style={{height:"50px", width:"60px", marginRight:"25px", borderRadius:"10px", marginLeft:"25px", backgroundColor:"#2fdf75", color:"white"}}>Submit</button>
                        <button onClick={() => setIsOpen(false)} style={{height:"50px", width:"60px", marginRight:"25px", borderRadius:"10px" , backgroundColor:"#eb445a", color:"white"}}>Close</button>
                    </IonItemDivider>

                </IonCard>
                {/* </IonContent> */}
            </IonModal>
            {/* </IonContent> */}
        </IonPage>
    );
}
export default Remind;

