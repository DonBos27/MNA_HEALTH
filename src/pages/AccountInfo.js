import { IonContent, IonLabel, IonPage, IonInput, IonItem, IonModal, IonItemDivider } from '@ionic/react';
import TabBar from '../components/TabBar';
import './AccountInfo.css';
import { useState, useEffect } from 'react';
import { auth, db, userCollection } from '../firebase/configFirebase'
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, updateDoc, getDocs, getDoc } from "firebase/firestore";
import { useHistory } from 'react-router';
import { getAuth } from 'firebase/auth';
const AccountInfo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [fullName, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [dateOfBirth, setDob] = useState("");
    const [photoURL, setPhotoURL] = useState("")
    const [password, setPassword] = useState("");
    const [datas, setData] = useState([])
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
                        // console.log("Document data:", docSnap.data());
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

    useEffect(() => {
        // let items = [];
        // getDocs(userCollection).then((snapshot) => {
        //     snapshot.forEach((doc) => {
        //         items.push(doc.data());
        //     })
        //     setData(items)
        //     console.log(items)
        // })
    }, [])

    //Verified if user exist
    // const auth = getAuth();
    // const user = auth.currentUser;

    // if (user) {
    //     history.push("/accountinformation")
    // } else {
    //     history.push("/login")
    // }
    //Update
    // const submit = async (user) => {
    //     console.log('update')
    //     // e.preventDefault();
    //     const id = user.uid
    //     const docRef = doc(db, "Users", id);
    //     await updateDoc(docRef, {
    //         fullName: fullName,
    //         email: email,
    //         dateOfBirth: dateOfBirth,
    //     });
    //     history.push("/accountinformation")
    //     // setFullname(fullName)
    //     console.log(docRef)
    //     console.log("Document written with ID: ", docRef.id);
    // }
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
                        <p>Account Information</p>  {/*<span style={{ float: "right", paddingRight: "10px" }} onClick={() => setIsOpen(true)}>Edit</span> */}
                        <IonModal isOpen={isOpen} className="medinfo">
                            <div className="info" style={{ marginTop: "100px", borderRadius: "50px" }}>
                                <p>Your Information</p>
                                <IonItem>
                                    <IonLabel position='stacked'>Full Name</IonLabel>
                                    <IonInput type='text' onChange={(e) => { setFullname(e.target.value) }} value={postData.fullName}></IonInput>
                                </IonItem>
                                <IonItem>
                                    <IonLabel position='stacked'>Email</IonLabel>
                                    <IonInput type='email' onChange={(e) => { setEmail(e.target.value) }} value={postData.email}></IonInput>
                                </IonItem>
                                <IonItem>
                                    <IonLabel position='stacked'>Date Of Birth</IonLabel>
                                    <IonInput type='date' onChange={(e) => { setDob(e.target.value) }} value={postData.dob}></IonInput>
                                </IonItem>
                            </div>
                        </IonModal>
                        <IonItem>
                            <IonLabel position='stacked'>{postData.fullName}</IonLabel>
                            <IonInput disabled></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position='stacked'>{postData.email}</IonLabel>
                            <IonInput type='email' disabled></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position='stacked'>{postData.dateOfBirth}</IonLabel>
                            <IonInput  disabled></IonInput>
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