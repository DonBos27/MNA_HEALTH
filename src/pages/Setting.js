import {
    IonPage,
    IonContent,
    IonCard,
} from '@ionic/react';
import Header from '../components/Header';
import { person, chevronForward, notifications, lockClosed, globeSharp, callOutline } from "ionicons/icons";
import "./Setting.css";
import TabBar from '../components/TabBar';
import Chip from '../components/Chip';
import { useState } from 'react';
import { useHistory } from 'react-router';

const Setting = (props) => {
    const [accountInfo, setAccountInfo] = useState("");
    const history = useHistory();
    const AccInfo = () => {
        console.log("Account Info");
        history.push('/accountinformation', { direction: "forward" });
    }
    const Forum = () => {
        console.log("Forum");
    }
    const Notification = () => {
        console.log("Notification");
    }
    const Security = () => {
        console.log("Security");
    }
    const Contact = () => {
        console.log("Contact");
    }
    return (
        <IonPage >
            <IonContent
                scrollEvents={true}
                className="main"
            >
                <Header title='Settings' />
                <div className="set">
                    <h2 className='settingTitle' style={{ paddingTop: "120px" }}>Profile</h2>
                    <IonCard className="card">
                        <Chip
                            props={props}
                            Label="Account Information"
                            IconLeft={person}
                            IconRight={chevronForward}
                            onclick={AccInfo}
                        />
                        {/* <Chip
                            props={props}
                            Label="Change your password"
                            IconLeft={key}
                            IconRight={chevronForward}
                        /> */}
                    </IonCard>
                    <h2>Features</h2>
                    <IonCard className="links-card">
                        <Chip
                            props={props}
                            Label="Community Forum"
                            IconLeft={globeSharp}
                            IconRight={chevronForward}
                            onclick={Forum}
                        />
                        <Chip
                            props={props}
                            Label="Contact Us"
                            IconLeft={callOutline}
                            IconRight={chevronForward}
                            onclick={Contact}
                        />
                    </IonCard>
                    <h2>Privacy and Notification</h2>
                    <IonCard className="links-card">
                        <Chip
                            props={props}
                            Label="Privacy & Security"
                            IconLeft={lockClosed}
                            IconRight={chevronForward}
                            onclick={Security}
                        />
                        {/* <div className="line"></div> */}
                        <Chip
                            props={props}
                            Label="Notification"
                            IconLeft={notifications}
                            IconRight={chevronForward}
                            onclick={Notification}
                        />
                    </IonCard>
                </div>
            </IonContent>
            <TabBar />
        </IonPage>
    );
};
export default Setting;