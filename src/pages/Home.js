import {
    IonPage,
    IonContent,
    IonIcon,
    IonTabBar,
    IonTabButton,
    IonLabel,
} from '@ionic/react';
import TabBar from '../components/TabBar';
import './Home.css';
import { cog, home, map } from 'ionicons/icons';
import Header from '../components/Header';
import Pills from '../pictures/Medical_Pills.svg';
import CardPills from '../components/card';
import CardDoctor from '../components/CardDoctor';
import TabsButton from './TabsButton';
const Home = () => {
    return (
        <IonPage >
            <IonContent className='main' >
                <Header title='Home' />
                <div className='content'>
                    <div className='first'>
                        <h2>Medical Features</h2>
                        <div className="container" >
                            <div className="scrolling-wrapper" scrollY="true" >
                                <div className='card' ></div>
                                <div className='card' ></div>
                                <div className='card' ></div>
                            </div>
                        </div>
                    </div>
                    <div className='pillsR'>
                        <h2>Pills Reminder </h2>
                        <IonLabel href="/setting">See All</IonLabel>
                    </div>
                    <CardPills />
                    <div className='appointR'>
                        <h2>Medical Appointment </h2>
                        <span>See All</span>
                    </div>
                    <CardDoctor />
                </div>
            </IonContent >
            <TabBar />
        </IonPage >
    );
};
export default Home;