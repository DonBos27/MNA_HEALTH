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
            <IonCard href='/appointreminder'>
                <div>
                    <div>
                        <h2 style={{ paddingLeft: "15px",color:"red" }}>DR DANIEL</h2>
                    </div>
                    <div>
                        <h5 style={{ paddingLeft: "15px",color:"red" }}>Dermatogist</h5>
                    </div>
                </div>
                {/* <div> */}
                    <div className="doctortime">
                        <span > <IonIcon icon={watch} style={{paddingRight:"5px"}}/>12:00</span>
                        <span style={{ paddingLeft: "160px" }} ><IonIcon icon={calendar} style={{paddingRight:"5px"}} /> 25/102022</span>
                    </div>
                {/* </div> */}
            </IonCard>
        </div>
    )
}
export default CardDoctor;