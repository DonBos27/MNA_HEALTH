import {
    IonPage,
    IonContent,
} from '@ionic/react';
import './Home.css';
import Header from '../components/Header';
import Pills from '../pictures/Medical_Pills.svg';
import CardPills from '../components/card';
import CardDoctor from '../components/CardDoctor';
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
                                <div className='card' href="#"></div>
                                <div className='card' ></div>
                                <div className='card' ></div>
                            </div>
                        </div>
                    </div>
                    <div className='pillsR'>
                        <h2>Pills Reminder </h2>
                        <span>See All</span>
                    </div>
                    <CardPills />
                    <div className='appointR'>
                        <h2>Medical Appointment </h2>
                        <span>See All</span>
                    </div>
                    <CardDoctor />
                </div>
            </IonContent >
        </IonPage >
    );
};
export default Home;