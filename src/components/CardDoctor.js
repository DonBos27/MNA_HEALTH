import {
    IonPage,
    IonContent,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonIcon,
    IonLabel,
} from '@ionic/react';
import { calendar, watch } from 'ionicons/icons';
import './CardDoctor.css';
const CardDoctor = () => {
    return (
        <div>
            <IonCard className='carddoctor' >
                <IonCardHeader>
                    <IonCardTitle>
                        <h2 style={{ paddingRight: "45px",color:"red" }}>DR DANIEL</h2>
                    </IonCardTitle>
                    <IonCardTitle>
                        <h5 style={{ paddingRight: "45px",color:"red" }}>Dermatogist</h5>
                    </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <div className="doctortime">
                        <IonIcon icon={watch} style={{ margin: "20px" }} />
                        {/* <IonIcon icon={calendar} style={{ marginLeft: "110px" }} /> */}
                    </div>
                </IonCardContent>
            </IonCard>
        </div>
    )
}
export default CardDoctor;