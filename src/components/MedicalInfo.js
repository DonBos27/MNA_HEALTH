import { IonCard, IonContent, IonIcon, IonInput, IonItem, IonLabel, IonModal, IonPage, IonTextarea, IonItemDivider, IonSelect, IonSelectOption } from "@ionic/react";
import { medical } from 'ionicons/icons';
import Header from "../components/Header";
import "./SettingCard.css";
import "./MedicalInfo.css"
import TabBar from "./TabBar";
import { useState } from 'react';
import { useHistory } from 'react-router';
function MedicalInfo() {
    const [isOpen, setIsOpen] = useState(false);
    // const [data, setData] = useState([])
    const [Weight, setWeight] = useState("");
    const [Height, setHeight] = useState("");
    const [BloodType, setBloodType] = useState("");
    const [sex, setSex] = useState("");
    const [wheelchair, setWheelchair] = useState("");
    const [conditions, setConditions] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const history = useHistory()
    function Info(event) {
        event.preventDefault();
        setWeight(Weight)
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
                <h5 style={{ marginLeft: "300px", color: "white" }} onClick={() => setIsOpen(true)}>Edit</h5>
                <IonModal isOpen={isOpen} className="medinfo">
                    {/* <Header title="Medical Information" /> */}
                    <div className="info">
                        <p>Your Information</p>
                        <IonItem >
                            <IonLabel position="stacked">Weight</IonLabel>
                            <IonInput onIonChange={(e) => { setWeight(e.target.value) }} value={Weight}></IonInput>{""}
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
                            <IonInput disabled>{Weight}</IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="stacked">Height</IonLabel>
                            <IonInput disabled>{Height}</IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="stacked">Sex</IonLabel>
                            <IonInput disabled>{sex}</IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="stacked">Blood Types</IonLabel>
                            <IonInput disabled>{BloodType}</IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="stacked">Wheelchair</IonLabel>
                            <IonInput disabled>{wheelchair}</IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="stacked">Medical Conditions</IonLabel>
                            <IonInput disabled>{conditions}</IonInput>
                        </IonItem>
                    </div>
                    <div className="emergency">
                        <IonItem>
                            <IonLabel position="stacked">Name</IonLabel>
                            <IonInput disabled>{name}</IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="stacked">Phone Number</IonLabel>
                            <IonInput disabled>{number}</IonInput>
                        </IonItem>
                        <p>Emergency</p>
                    </div>
                </div>

            </IonContent>
            <TabBar />
        </IonPage>
    )
}
export default MedicalInfo;
