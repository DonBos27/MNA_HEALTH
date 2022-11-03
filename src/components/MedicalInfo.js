import { IonCard, IonContent, IonIcon, IonInput, IonItem, IonLabel, IonModal, IonPage, IonTextarea, IonItemDivider, IonSelect, IonSelectOption } from "@ionic/react";
import { medical } from 'ionicons/icons';
import Header from "../components/Header";
import "./SettingCard.css";
import "./MedicalInfo.css"
import TabBar from "./TabBar";
import { useState, useEffect } from 'react';
import { auth, db, userCollection } from '../firebase/configFirebase'
import { onAuthStateChanged } from 'firebase/auth';
import { useHistory } from 'react-router';
import { addDoc, setDoc, doc, collection, getDocs, getDoc } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { uid } from 'uid'
function MedicalInfo() {
    const [isOpen, setIsOpen] = useState(false);
    const [Weight, setWeight] = useState("");
    const [Height, setHeight] = useState("");
    const [BloodType, setBloodType] = useState("");
    const [sex, setSex] = useState("");
    const [wheelchair, setWheelchair] = useState("");
    const [conditions, setConditions] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [datas, setData] = useState([])
    const history = useHistory()
    const auth = getAuth();
    const user = auth.currentUser;
    const [postData, setPostData] = useState("");
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // const docRef = doc(db, "Users", user.uid);
                // const docSnap = await getDoc(docRef);

                // if (docSnap.exists()) {
                //     console.log("Document data:", docSnap.data());
                // } else {
                //     // doc.data() will be undefined in this case
                //     console.log("No such document!");
                // }
                getDoc(doc(db, "MedicalInfo", user.uid)).then(docSnap => {
                    if (docSnap.exists()) {
                        const newData = docSnap.data();
                        setPostData(newData);
                        console.log(newData);
                        // console.log("Document data:", docSnap.data());
                    } else {
                        console.log("No such document!");
                    }
                })
                history.replace('/medicalinformation');
            } else {
                history.replace('/login');
            }
        })
    }, [])
    function Info(event) {
        setDoc(doc(db, "MedicalInfo", user.uid), {
            Weight: Weight,
            Height: Height,
            BloodType: BloodType,
            sex: sex,
            wheelchair: wheelchair,
            conditions: conditions,
            name: name,
            number: number,
        })
        event.preventDefault();
        setWeight(postData.Weight)
        setName(name)
        setNumber(number)
        setSex(sex)
        setBloodType(BloodType)
        setHeight(Height)
        setWheelchair(wheelchair)
        setConditions(conditions)
        history.push("/medicalinformation", { direction: "forward" });
    }

    return (
        <IonPage>
            <IonContent className="main">
                <Header title="Medical Information" />
                <h1 style={{ marginTop: "150px", textAlign: "center", fontWeight: "700", color: "white" }}> <IonIcon icon={medical} color="danger" /> Medical ID</h1>
                {/* {datas.map((item, index) => {
                    return ( */}
                <div>
                    <h5 style={{ marginLeft: "300px", color: "white" }} onClick={() => setIsOpen(true)}>Edit</h5>
                    <IonModal isOpen={isOpen} className="medinfo">
                        {/* <Header title="Medical Information" /> */}
                        <div className="info">
                            <p>Your Information</p>
                            <IonItem >
                                <IonLabel position="stacked">Weight</IonLabel>
                                <IonInput onIonChange={(e) => { setWeight(e.target.value) }} value={Weight}></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="stacked">Height</IonLabel>
                                <IonInput onIonChange={(e) => { setHeight(e.target.value) }} value={Height}></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="stacked">Sex</IonLabel>
                                <IonSelect onIonChange={(e) => { setSex(e.target.value) }} value={sex}>
                                    <IonSelectOption>Male</IonSelectOption>
                                    <IonSelectOption>Female</IonSelectOption>
                                </IonSelect>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="stacked">Blood Types</IonLabel>
                                <IonSelect onIonChange={(e) => { setBloodType(e.target.value) }} value={BloodType}>
                                    <IonSelectOption>A+</IonSelectOption>
                                    <IonSelectOption>O+</IonSelectOption>
                                    <IonSelectOption>AB+</IonSelectOption>
                                    <IonSelectOption>O-</IonSelectOption>
                                    <IonSelectOption>A-</IonSelectOption>
                                    <IonSelectOption>B-</IonSelectOption>
                                    <IonSelectOption>AB-</IonSelectOption>
                                    <IonSelectOption>B+</IonSelectOption>
                                </IonSelect>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="stacked">Wheelchair</IonLabel>
                                <IonSelect onIonChange={(e) => { setWheelchair(e.target.value) }} value={wheelchair}>
                                    <IonSelectOption>YES</IonSelectOption>
                                    <IonSelectOption>NO</IonSelectOption>
                                </IonSelect>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="stacked">Medical Conditions</IonLabel>
                                <IonTextarea onIonChange={(e) => { setConditions(e.target.value) }} value={conditions}></IonTextarea>
                            </IonItem>
                        </div>
                        {/* <h5 style={{ marginLeft: "15px", color: "white" }}>Emergency Contact</h5> */}
                        <hr />
                        <div className="emergency">
                            <IonItem>
                                <IonLabel position="stacked">Name</IonLabel>
                                <IonInput onIonChange={(e) => { setName(e.target.value) }} value={name}></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="stacked">Phone Number</IonLabel>
                                <IonInput onIonChange={(e) => { setNumber(e.target.value) }} value={number}></IonInput>
                            </IonItem>
                            <p>Emergency</p>
                            <IonItemDivider className='btnmedinfo' style={{ paddingBottom: "10px" }}>
                                <button style={{ height: "50px", width: "60px", marginRight: "25px", borderRadius: "10px", marginLeft: "75px", backgroundColor: "#2fdf75", color: "white" }} onClick={Info}>Submit</button>
                                <button onClick={() => setIsOpen(false)} style={{ height: "50px", width: "60px", marginRight: "25px", borderRadius: "10px", backgroundColor: "#eb445a", color: "white" }}>Close</button>
                            </IonItemDivider>
                        </div>
                    </IonModal>
                    <div>
                        <div className="info">
                            <p>Your Information</p>
                            <IonItem >
                                <IonLabel position="stacked">Weight</IonLabel>
                                <IonInput disabled>{postData.Weight}</IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="stacked">Height</IonLabel>
                                <IonInput disabled>{postData.Height}</IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="stacked">Sex</IonLabel>
                                <IonInput disabled>{postData.sex}</IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="stacked">Blood Types</IonLabel>
                                <IonInput disabled>{postData.BloodType}</IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="stacked">Wheelchair</IonLabel>
                                <IonInput disabled>{postData.wheelchair}</IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="stacked">Medical Conditions</IonLabel>
                                <IonInput disabled>{postData.conditions}</IonInput>
                            </IonItem>
                        </div>
                        <div className="emergency">
                            <IonItem>
                                <IonLabel position="stacked">Name</IonLabel>
                                <IonInput disabled>{postData.name}</IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="stacked">Phone Number</IonLabel>
                                <IonInput disabled>{postData.number}</IonInput>
                            </IonItem>
                            <p>Emergency</p>
                        </div>
                    </div>
                </div>
                {/* )
                })} */}
            </IonContent>
            <TabBar />
        </IonPage>
    )
}
export default MedicalInfo;
