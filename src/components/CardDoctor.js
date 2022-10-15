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
        <div className='carddoctor'>
            <IonCard >
                <div>
                    <div>
                        <h2 style={{ paddingLeft: "15px",color:"red" }}>DR DANIEL</h2>
                    </div>
                    <div>
                        <h5 style={{ paddingLeft: "15px",color:"red" }}>Dermatogist</h5>
                    </div>
                </div>
                <div>
                    <div className="doctortime">
                        <IonIcon icon={watch} style={{ margin: "20px" }} />
                        <IonIcon icon={calendar} style={{ marginLeft: "115px",marginBottom:"20px" }} />
                    </div>
                </div>
            </IonCard>
        </div>
    )
}
export default CardDoctor;