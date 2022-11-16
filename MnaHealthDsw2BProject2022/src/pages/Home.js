import {
    IonPage,
    IonContent,
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
import {auth} from '../firebase/configFirebase'
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { getAuth } from 'firebase/auth';

const Home = () => {
    const history = useHistory();
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                history.replace('/home');
            } else {
                history.replace('/login');
            }
        })
    },[])
    const pills = () => {
        console.log('pills');
        history.push('/pills', { direction: "forward" });
    }
    const appoint = () => {
        console.log('appoint');
        history.push('/appointreminder', { direction: "forward" });
    }
    const medinfo = () => {
        console.log('medical info')
        history.push('/medicalinformation', { direction: "forward" });
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
                                    <img src={Pills} scrolly='true' style={{ marginRight: "15px", width: "25%", borderRadius: "50px", backgroundColor: "#0e6c94", marginLeft: "20px" }} onClick={pills} />
                                </span>
                                <span scrolly='true'>
                                    <img src={Doctor} scrolly='true' style={{ marginRight: "15px", width: "25%", borderRadius: "50px", backgroundColor: "#0e6c94", marginLeft: "20px" }} onClick={appoint} />
                                </span>
                                <span scrolly='true'>
                                    <img src={Report} scrolly='true' style={{ marginRight: "30px", width: "25%", borderRadius: "50px", backgroundColor: "#0e6c94", marginLeft: "20px" }} onClick={medinfo}/>
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