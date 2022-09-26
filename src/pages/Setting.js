import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonItem,
    IonLabel,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
} from '@ionic/react';
import CardExamples from "../components/card";
import CardDoctor from '../components/CardDoctor';
import Header from '../components/Header';
const Setting = () => {
    return (
        <IonPage >
            <IonContent className='main'>
                <Header title='Settings' />
                {/* <CardDoctor />
                <CardExamples /> */}
            </IonContent>
        </IonPage>
    );
};
export default Setting;