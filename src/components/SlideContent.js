import { IonContent, IonPage, IonButton, IonNavLink } from '@ionic/react';
import './SlideContent.css';
import Home from '../pages/Home';
import TabsButton from '../pages/TabsButton';
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
      {/* <IonButton className='button' routerDirection="forward" component={() => <Home />}>Get Started</IonButton> */}
      {/* <TabsButton/> */}
    </IonPage>
  );
};
export const button = () => {
  
}

export default SlideContent;
