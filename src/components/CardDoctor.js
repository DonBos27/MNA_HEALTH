import {
    IonPage,
    IonContent,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonIcon,
    IonLabel,
    IonCardSubtitle,
} from '@ionic/react';
import { useHistory } from 'react-router';
import { calendar, watch } from 'ionicons/icons';
import './CardDoctor.css';
const CardDoctor = () => {
    const history = useHistory()
    const appoint = () =>{
        history.push('/appointreminder')
    }
    return (
        <div className='carddoctor'>
            <IonCard onClick={appoint}>
                <IonCardHeader>
                    <IonCardTitle>Appointment</IonCardTitle>
                    <IonCardSubtitle>
                        <IonIcon icon={calendar} color="danger" style={{paddingRight:"10px"}} /> Enter your appointment with your doctor
                    </IonCardSubtitle>
                </IonCardHeader>
                <div className="doctortime">
                    <IonCardContent>Set a time and a day with his name and his speciality</IonCardContent>
                </div>
            </IonCard>
        </div>
    )
}
export default CardDoctor;