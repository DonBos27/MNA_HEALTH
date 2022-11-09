import { IonPage, IonContent, IonItem, IonAvatar, IonLabel, IonInput, IonIcon } from "@ionic/react"
import { callOutline, mailOutline } from "ionicons/icons"
import Header from "../components/Header"
import TabBar from "../components/TabBar"
import Don from '../pictures/Don.jpeg'
import Auger from '../pictures/Auger.png'
import Daniel from '../pictures/daniel.jpeg'
import Naomie from '../pictures/Naomie.png'
import Yonela from '../pictures/Yonela.png'
import Siya from '../pictures/Siya.png'
const About = () => {
    return (
        <IonPage>
            <IonContent className="main">
                <Header title='About Us' />
                <h1 style={{ marginTop: "150px", color: "white", textAlign: "center", fontWeight: "bold" }}>Meet Our Team</h1>
                <div style={{ marginTop: "30px", marginLeft: "10px", marginRight: "10px" }}>
                    <IonItem>
                        <IonAvatar slot="start">
                            <img alt="Silhouette of a person's head" src={Don} />
                        </IonAvatar>
                        <IonLabel>
                            DB BOSENGA
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonAvatar slot="start">
                            <img alt="Silhouette of mountains" src={Siya} />
                        </IonAvatar>
                        <IonLabel>
                            S SANGQU
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonAvatar slot="start">
                            <img alt="Silhouette of mountains" src={Daniel} />
                        </IonAvatar>
                        <IonLabel>
                            DANIEL KAPKAP
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonAvatar slot="start">
                            <img alt="Silhouette of mountains" src={Yonela} />
                        </IonAvatar>
                        <IonLabel>
                            YONELA CHARLIE
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonAvatar slot="start">
                            <img alt="Silhouette of mountains" src={Auger} />
                        </IonAvatar>
                        <IonLabel>
                            KIDI AUGER
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonAvatar slot="start">
                            <img alt="Silhouette of mountains" src={Naomie} />
                        </IonAvatar>
                        <IonLabel>
                            NAOMIE MPANDA
                        </IonLabel>
                    </IonItem>
                </div>
                <div style={{ marginTop: "50px", marginLeft: "10px", marginRight: "10px", marginBottom: "10px" }}>
                    <IonItem>
                        <IonLabel style={{ textAlign: "center", fontWeight: "bold" }}>Contact Us Via</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonIcon slot="start" icon={callOutline} />
                        <IonLabel>Phone Number : 012 345 6789</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonIcon slot="start" icon={mailOutline} />
                        <IonLabel>Email :mna@gmail.com</IonLabel>
                    </IonItem>

                </div>
            </IonContent>
            <TabBar />
        </IonPage>
    )
}
export default About