import { IonContent, IonLabel, IonPage, IonInput, IonItem, IonModal, IonItemDivider } from '@ionic/react';
import TabBar from '../components/TabBar';
import './AccountInfo.css';
import { useState, useEffect } from 'react';
import { auth, db, userCollection } from '../firebase/configFirebase'
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, updateDoc, getDocs, getDoc } from "firebase/firestore";
import { useHistory } from 'react-router';
const AccountInfo = () => {
    const [postData, setPostData] = useState("");
    const history = useHistory()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                getDoc(doc(db, "Users", user.uid)).then(docSnap => {
                    if (docSnap.exists()) {
                        const newData = docSnap.data();
                        setPostData(newData);
                        console.log(newData);
                    } else {
                        console.log("No such document!");
                    }
                })
            }
            else {
                history.push("/login")
            }
        })
    }, [])
    const logout = () => {
        signOut(auth).then(() => {
            history.push("/login", { direction: "forward" });
            console.log("logout");
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <IonPage>
            <IonContent className='main'>
                <div className="account" >
                    <div className='top' >
                        <img src={postData.photo} />
                        <h2>{postData.fullName}</h2>
                    </div >
                    <div className='accountinfo'>
                        <p>Account Information</p> 
                        <IonItem>
                            <IonLabel position='stacked'>{postData.fullName}</IonLabel>
                            <IonInput disabled placeholder='Full Name'></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position='stacked'>{postData.email}</IonLabel>
                            <IonInput type='email' disabled placeholder='Email'></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position='stacked'>{postData.dateOfBirth}</IonLabel>
                            <IonInput  disabled placeholder='Date of Birth'></IonInput>
                        </IonItem>
                    </div>
                </div>
                <button type="submit" className="btnReg" onClick={logout}>Log Out</button>
            </IonContent>
            <TabBar />
        </IonPage>
    )
}
export default AccountInfo;