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
import Header from '../components/Header';
import Pills from '../pictures/tablet_capsule.gif';
import Doctor from '../pictures/medicalAppoint.gif';
import Report from '../pictures/medicalReport.gif';
import CardPills from '../components/card';
import CardDoctor from '../components/CardDoctor';
import { useHistory } from 'react-router';
const Home = () => {
    const history = useHistory();
    const pills = () => {
        console.log('pills');
        history.push('/pillsreminder', { direction: "forward" });
    }

    return (
        <IonPage >
            <IonContent className='main' >
                <Header title='Home' />
                <div className='content'>
                    <div className='first'>
                        <h2>Medical Features</h2>
                        <div className="container" >
                            <div className="scrolling-wrapper" scrolly="true" >
                                <span scrolly='true' >
                                    <img src={Pills} scrolly='true' style={{ marginRight: "15px",width: "25%", borderRadius: "50px", backgroundColor: "#0e6c94", marginLeft: "20px"  }} onClick={pills}/>
                                </span>
                                <span scrolly='true'>
                                    <img src={Doctor} scrolly='true' style={{ marginRight: "15px", width: "25%", borderRadius: "50px", backgroundColor: "#0e6c94", marginLeft: "20px" }} />
                                </span>
                                <span scrolly='true'>
                                    <img src={Report} scrolly='true' style={{ marginRight: "3n0px",width: "25%", borderRadius: "50px", backgroundColor: "#0e6c94", marginLeft: "20px" }} />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='pillsR'>
                        <h2>Pills Reminder </h2>
                    </div>
                    <CardPills />
                    <div className='appointR'>
                        <h2>Medical Appointment </h2>
                    </div>
                    <CardDoctor />
                </div>
            </IonContent >
            <TabBar />
        </IonPage >
    );
};
export default Home;