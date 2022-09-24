import {
    IonPage,
    IonContent,
    IonAccordion,
    IonAccordionGroup,
    IonItem,
    IonLabel
} from '@ionic/react';
import './Home.css';
import Header from '../components/Header';
import Pills from '../pictures/Medical_Pills.svg';
const Home = () => {
    return (
        <IonPage >
            <IonContent className='main'>
                <Header title='Home' />
                <div className='content'>
                    <div className='first'>
                        <h2>Medical Features</h2>
                        <div className="container" >
                            <div className="scrolling-wrapper" scrollY="true">
                                <div className='card' ></div>
                                <div className='card' ></div>
                                <div className='card' ></div>
                            </div>
                        </div>
                    </div>
                    <div className='pillsR'>
                        <h2>Pills Reminder </h2>
                        <span>See All</span>
                    </div>
                    <div className='third'>
                        <IonAccordionGroup animated={true}>
                            <IonAccordion value="first">
                                <IonItem slot="header" color="light">
                                    <div className='hours'>
                                        <p >08:45</p>
                                        <span className='date'>
                                            <p>Today</p>
                                            <p>09/09/2022</p>
                                        </span>
                                    </div>
                                    <div className='bullet'></div>
                                </IonItem>
                                <div className="ion-padding" slot="content">
                                    <p>Hello world</p>
                                </div>
                            </IonAccordion>
                        </IonAccordionGroup>
                    </div>
                    <div className='appointR'>
                        <h2>Medical Appointment </h2>
                        <span>See All</span>
                    </div>
                    <div className='fourth'>
                        <IonAccordionGroup animated={true}>
                            <IonAccordion value="first">
                                <IonItem slot="header" color="light">
                                    <div className='hours'>
                                        <p >08:45</p>
                                        <span className='date'>
                                            <p>Today</p>
                                            <p>09/09/2022</p>
                                        </span>
                                    </div>
                                    <div className='bullet'></div>
                                </IonItem>
                                <div className="ion-padding" slot="content">
                                    <p>Hello world</p>
                                </div>
                            </IonAccordion>
                        </IonAccordionGroup>
                    </div>
                </div>
            </IonContent >
        </IonPage >
    );
};
export default Home;