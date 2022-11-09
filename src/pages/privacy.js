import TabBar from "../components/TabBar"
import { IonPage, IonContent, IonCard, IonItem, IonLabel, IonInput, IonButton } from "@ionic/react"
import Header from "../components/Header"
import { useState } from "react"
import { getAuth, updateEmail, updatePassword, deleteUser } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/configFirebase";
import { useHistory } from "react-router";

const Privacy = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()
    // Verified if user exist
    const auth = getAuth();
    const user = auth.currentUser;
    const Update = () => {
        updateEmail(user, email).then(() => {
            setDoc(doc(db, "Users", user.uid), {
                email: email,
            })
            // Update successful
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
        updatePassword(user, password).then(() => {
            console.log("Password updated!")
            // Update successful.
        }).catch((error) => {
            // An error ocurred
            // ...
        });
    }
    const Delete = () => {
        deleteUser(user).then(() => {
            history.pushState('/login')
            // User deleted.
        }).catch((error) => {
            // An error ocurred
            // ...
        });
    }

    return (
        <IonPage>
            <IonContent className="main">
                <Header title='Privacy & Security' />
                <div style={{ marginTop: "150px" }}>
                    <h4 style={{ color: "white", paddingLeft: "10px", textAlign: "center" }}>Update Email Or Password</h4>
                    <IonItem>
                        <IonLabel >Email</IonLabel>
                        <IonInput onIonChange={(e) => { setEmail(e.target.value) }}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel >Password</IonLabel>
                        <IonInput onIonChange={(e) => { setPassword(e.target.value) }}></IonInput>
                    </IonItem>
                    <button style={{ marginTop: "50px", height: "50px", width: "100px", marginLeft: "130px", borderRadius: "10px", backgroundColor: "#7f2f86", color: "white" }} onClick={Update}>UPDATE</button>
                    <button style={{ marginTop: "50px", height: "50px", width: "150px", marginLeft: "110px", borderRadius: "10px", backgroundColor: "#7f2f86", color: "white" }} onClick={Delete}>DELETE USER</button>
                </div>
            </IonContent>
            <TabBar />
        </IonPage>
    )
}
export default Privacy