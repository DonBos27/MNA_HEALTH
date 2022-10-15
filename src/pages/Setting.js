import {
    IonPage,
    IonContent,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonCard,
} from '@ionic/react';
import Header from '../components/Header';
import { person, chevronForward, key, reader, newspaper, notifications, lockClosed } from "ionicons/icons";
import "./Setting.css";
import SettingCard from "../components/SettingCard";
import TabBar from '../components/TabBar';
import Chip from '../components/Chip';

const Setting = (props) => {
    return (
        <IonPage >
            <IonContent
                scrollEvents={true}
                className="main"
            >
                <Header title='Settings' />
                <div className="set">
                    <h2 className='settingTitle' style={{ paddingTop: "120px" }}>Profile</h2>
                    <IonCard className="links-card">
                        <Chip
                            props={props}
                            Label="Account Information"
                            IconLeft={person}
                            IconRight={chevronForward}
                        />
                        <Chip
                            props={props}
                            Label="Change your password"
                            IconLeft={key}
                            IconRight={chevronForward}
                        />
                    </IonCard>
                    <h2>Features</h2>
                    <IonCard className="links-card">
                        <Chip
                            props={props}
                            Label="Medical history"
                            IconLeft={reader}
                            IconRight={chevronForward}
                        />
                        <Chip
                            props={props}
                            Label="Treatment"
                            IconLeft={newspaper}
                            IconRight={chevronForward}
                        />
                    </IonCard>
                    <h2>Privacy and Notification</h2>
                    <IonCard className="links-card">
                        <Chip
                            props={props}
                            Label="Privacy & Security"
                            IconLeft={lockClosed}
                            IconRight={chevronForward}
                        />
                        {/* <div className="line"></div> */}
                        <Chip
                            props={props}
                            Label="Notification"
                            IconLeft={notifications}
                            IconRight={chevronForward}
                        />
                    </IonCard>
                </div>
            </IonContent>
            <TabBar />
        </IonPage>
    );
};
export default Setting;