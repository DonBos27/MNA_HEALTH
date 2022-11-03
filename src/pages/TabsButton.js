import { IonPage, IonNavLink, IonButton, IonContent } from "@ionic/react"
import Home from "../pages/Home"
import Register from "./Register";
import Login from "./Login";
import './Slide.css';
import { useHistory } from "react-router";
const TabsButton = (props) => {
    const history = useHistory()
    const handleClick = () => {
        history.push("/login", { direction: "forward" });
    }
    return (
        <IonPage>
            <IonNavLink routerDirection="forward" component={() => <Login />}>
                <IonButton className="button" onClick={handleClick}>{props.button}</IonButton>
            </IonNavLink>
        </IonPage>
    )
}
export default TabsButton