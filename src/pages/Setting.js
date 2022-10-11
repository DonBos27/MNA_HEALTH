import {
    IonPage,
    IonContent,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
} from '@ionic/react';
import Header from '../components/Header';
import { person, chevronForward, key, reader, newspaper, notifications, lockClosed } from "ionicons/icons";
import "./Setting.css";
import SettingCard from "../components/SettingCard";
import TabBar from '../components/TabBar';

const Setting = () => {
    return (
        <IonPage >
            <IonContent
                scrollEvents={true}
                className="main"
            >
                <Header title='Settings' />
                <div className="set">
                    <h2 className='settingTitle' style={{ paddingTop: "120px" }}>Profile</h2>
                    <SettingCard
                        IconLeft={person}
                        IconLeftBottom={key}
                        IconRight={chevronForward}
                        TopLabel="Account Information"
                        BottomLabel="Change your password"
                    />
                    <h2>Features</h2>
                    <SettingCard
                        IconLeft={reader}
                        IconLeftBottom={newspaper}
                        IconRight={chevronForward}
                        TopLabel="Medical history"
                        BottomLabel="Treatment"
                    />
                    <h2>Privacy and Notification</h2>
                    <SettingCard
                        IconLeft={lockClosed}
                        IconLeftBottom={notifications}
                        IconRight={chevronForward}
                        TopLabel="Privacy & Security"
                        BottomLabel="Notification"
                    /></div>
            </IonContent>
            <TabBar />
        </IonPage>
    );
};
export default Setting;