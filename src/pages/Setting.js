import {
    IonPage,
    IonContent,
    IonCard,
} from '@ionic/react';
import Header from '../components/Header';
import { person, chevronForward, globeSharp, informationCircle } from "ionicons/icons";
import "./Setting.css";
import TabBar from '../components/TabBar';
import Chip from '../components/Chip';
import { useHistory } from 'react-router';
import { getAuth, deleteUser } from "firebase/auth";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/configFirebase";
const Setting = () => {
    const history = useHistory();

    // verified if user exist
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
        history.push("/setting")
    } else {
        history.push("/login")
    }

    const AccInfo = () => {
        console.log("Account Info");
        history.push('/accountinformation', { direction: "forward" });
    }
    const forum = () => {
        console.log("forum");
        history.push('/chatforum', { direction: "forward" });
    }
    const Security = () => {
        history.push('/privacy', { direction: "forward" });
        console.log("Security");
    }
    const Contact = () => {
        history.push('about')
        console.log("about");
    }
    const Delete = () => {
        deleteUser(user).then(() => {
            deleteDoc(doc(db, "Users", user.uid))
            deleteDoc(doc(db, "medical", user.uid))
            deleteDoc(doc(db, "appointment", user.uid))
            deleteDoc(doc(db, "MedicalInfo", user.uid))
            history.pushState('/login')
            // User deleted.
        }).catch((error) => {
            // An error ocurred
            // ...
        });
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
                            Label="Account Information"
                            IconLeft={person}
                            IconRight={chevronForward}
                            onclick={AccInfo}
                        />
                    </IonCard>
                    <h2>Features</h2>
                    <IonCard className="link-card">
                        <Chip
                            Label="Community Forum"
                            IconLeft={globeSharp}
                            IconRight={chevronForward}
                            onclick={forum}
                        />
                    </IonCard>
                    <h2>Privacy and Contact</h2>
                    <IonCard className="links-card">
                        <Chip
                            Label="About Us"
                            IconLeft={informationCircle}
                            IconRight={chevronForward}
                            onclick={Contact}
                        />
                    </IonCard>
                </div>
                <button style={{ marginTop: "50px", height: "50px", width: "150px", marginLeft: "110px", borderRadius: "10px", backgroundColor: "#7f2f86", color: "white" }} onClick={Delete}>DELETE ACCOUNT</button>
            </IonContent>
            <TabBar />
        </IonPage>
    );
};
export default Setting;