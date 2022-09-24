import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
} from '@ionic/react';
import Header from '../components/Header';
const Setting = () => {
    return (
        <IonPage >
        <IonContent className='main'>
            <Header title='Settings' />
        </IonContent>
    </IonPage>
    );
};
export default Setting;