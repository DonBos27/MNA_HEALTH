import { IonPage, IonNavLink, IonButton, IonContent } from "@ionic/react"
import Home from "../pages/Home"
import Register from "./Register";
import './Slide.css';
const TabsButton = (props) => {
    return (
        <IonPage>
                <IonNavLink routerDirection="forward" component={() => <Register />}>
                    <IonButton className="button" >{props.button}</IonButton>
                </IonNavLink>
        </IonPage>
    )
}
export default TabsButton