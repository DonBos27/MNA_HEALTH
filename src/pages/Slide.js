import { IonContent, IonPage, IonSlides, IonSlide, IonButton, IonNavLink } from '@ionic/react';
import SlideContent from '../components/SlideContent';
import Check from '../pictures/check.gif';
import MedicalInfo from '../pictures/medical_info.gif';
import RedCross from '../pictures/medical-red-cross.gif';
import './Slide.css';
import TabsButton from './TabsButton';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/configFirebase';
const slideOpts = {
  initialSlide: 0,
  speed: 400,
  autoplay: {
    delay: 3000
  }
};
const Slide = () => {
  const history = useHistory();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        history.replace('/home');
      } else {
        history.replace('/slide');
      }
    })
  }, [])
  return (
    <IonPage >
      <IonContent className='main'>
        <IonSlides pager={true} options={slideOpts} className="slider-bullet">
          <IonSlide>
            <SlideContent
              title="Medical Reminder"
              text="Assistance"
              explain="Reminding you of your pills as quick as possible"
              photo={RedCross}
            />
          </IonSlide>
          <IonSlide>
            <SlideContent
              title="Medical History"
              text="Report"
              explain="You can have your medical report everywhere and everytime"
              photo={MedicalInfo}
            />
          </IonSlide>
          <IonSlide>
            <SlideContent
              title="Finds Nearest"
              text="Hospital"
              explain="You can have your medical report everywhere and everytime"
              photo={Check}
            />
            <TabsButton button="Get Started" />
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};
export default Slide;
