import { IonContent, IonPage, IonSlides, IonSlide, IonButton, IonNavLink } from '@ionic/react';
import SlideContent from '../components/SlideContent';
import Check from '../pictures/check.gif';
import MedicalInfo from '../pictures/medical_info.gif';
import RedCross from '../pictures/medical-red-cross.gif';
import './Slide.css';
const slideOpts = {
  initialSlide: 0,
  speed: 400,
  autoplay: {
    delay: 3000
  }
};
const Slide = () => {
  return (
    <IonPage >
      <IonContent className='slider'>
        <IonSlides pager={true} options={slideOpts} className="slider-bullet">
          <IonSlide>
            <SlideContent
              title="Medical reminder"
              text="assistance"
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
              title="Localisation of a near"
              text="hospital"
              explain="You can have your medical report everywhere and everytime"
              photo={Check}
              button="button"
            />
            <IonButton className='button'>Get Started</IonButton>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};
export default Slide;
