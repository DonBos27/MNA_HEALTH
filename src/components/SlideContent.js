import { IonContent, IonPage, IonButton } from '@ionic/react';
import './SlideContent.css';

const SlideContent = (props) => {
  return (
    <IonPage >
        <div className="title1">
          <p>{props.title}</p>
        </div>
        <div className='title2'>
          <p>{props.text}</p>
        </div>
        <p className='text'>{props.explain}</p>
        <img src={props.photo} alt='Check' className='images' style={{ width: "200px", height: "190px", left: "40px", top: "200px" }} />
    </IonPage>
  );
};

export default SlideContent;
