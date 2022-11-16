import { IonContent, IonPage, IonSlides, IonSlide, IonButton, IonNavLink } from '@ionic/react';
import SlideContent from '../components/SlideContent';
import Check from '../pictures/check.gif';
import MedicalInfo from '../pictures/medical_info.gif';
import RedCross from '../pictures/medical-red-cross.gif';
import './Slide.css';
import '../components/SlideContent.css'
import Login from './Login';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/configFirebase';
const slideOpts = {
    initialSlide: 0,
    speed: 400,
    // autoplay: {
    //     delay: 4000
    // }
};
const Slides = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push("/login", { direction: "forward" });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                history.replace('/home');
            } else {
                history.replace('/slides');
            }
        })
    }, [])
    return (
        <IonPage >
            <IonContent className='main'>
                <IonSlides pager={true} options={slideOpts} className="slider-bullet">
                    <IonSlide>
                        <div className="title1">
                            <p>Medication </p>
                        </div>
                        <div className='title2'>
                            <p>Assistance</p>
                        </div>
                        <p className='text'>Add your pills as quick as possible, easy track of pills</p>
                        <img src={RedCross} alt='Check' className='images' style={{ width: "200px", height: "190px", left: "40px", top: "200px" }} />
                    </IonSlide>
                    <IonSlide>
                        <div className="title1">
                            <p>Medical</p>
                        </div>
                        <div className='title2'>
                            <p id = 'info'>Information</p>
                        </div>
                        <p className='text'>You can have your medical information everywhere and everytime</p>
                        <img src={MedicalInfo} alt='Check' className='images' style={{ width: "200px", height: "190px", left: "40px", top: "200px" }} />
                    </IonSlide>
                    <IonSlide>
                        <div className="title1">
                            <p>Finds Nearest</p>
                        </div>
                        <div className='title2'>
                            <p>Hospital</p>
                        </div>
                        <p className='text'>Access to the nearest hospital according to your current position</p>
                        <img src={Check} alt='Check' className='images' style={{ width: "200px", height: "190px", left: "40px", top: "200px" }} />
                        <IonNavLink routerDirection="forward" component={() => <Login />}>
                            <IonButton className="button" onClick={handleClick}>Get Started</IonButton>
                        </IonNavLink>
                    </IonSlide>
                </IonSlides>
            </IonContent>
        </IonPage>
    );
};
export default Slides;