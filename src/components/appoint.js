import React, { useEffect, useState } from 'react';
import { IonButtons, IonInput, IonCard, IonLabel, IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonIcon, IonItemDivider } from '@ionic/react';
import './CardDoctor.css';
import './appoint.css'
import Header from './Header';
import { add } from "ionicons/icons";
import { useHistory } from 'react-router';
import { calendar, watch } from 'ionicons/icons';
import { trashBin, createSharp } from 'ionicons/icons';
import { auth, appointmentCollection, database, db } from '../firebase/configFirebase'
import { addDoc, onAuthStateChanged, setDoc, doc, deleteDoc, getDoc, getDocs, updateDoc, onSnapshot, arrayRemove, arrayUnion } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
function Appoint() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [postData, setPostData] = useState([])
    const [name, setName] = useState("");
    const [jobs, setJobs] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [id, setId] = useState("");
    const [selectedPills, setSelectedPills] = useState();
    const history = useHistory()
    const auth = getAuth();
    const user = auth.currentUser;

    useEffect(() => {
        if (user) {
            onSnapshot(doc(db, "appointment", user.uid), (docSnap) => {
                if (docSnap.exists()) {
                    const newData = docSnap.data();
                    setPostData(newData.Data);
                    console.log(newData);
                    console.log(postData)
                    console.log(user.uid)
                }
            })
        } else {
            history.push('/login')
        }
    }, [])

    function AddDoctor() {
        getDoc(doc(appointmentCollection, user.uid)).then(
            (docSnap) => {
                if (docSnap.exists()) {
                    const data = { name, jobs, time, date }
                    const newData = docSnap.data();
                    console.log(newData)
                    updateDoc(doc(appointmentCollection, user.uid), {
                        Data: arrayUnion(data)
                    })
                }
            }
        )
    }
    const del = (index) => {
        console.log(index)
        getDoc(doc(appointmentCollection, user.uid)).then(docSnap => {
            if (docSnap.exists()) {
                const newData = docSnap.data();
                console.log(newData)
                const goals = newData.Data
                console.log(goals)
                const appointment = goals.filter(goal => goal.name !== index)
                console.log("Hi", appointment)
                console.log(goals)
                const data = { name, jobs, time, date }
                updateDoc(doc(appointmentCollection, user.uid), {
                    Data: appointment
                })
            }
        })
        console.log("Delete")
    }
    const update = (object) => {
        console.log(object)
        getDoc(doc(appointmentCollection, user.uid)).then(docSnap => {
            if (docSnap.exists()) {
                const newData = docSnap.data();
                const goals = newData.Data
                console.log(goals)

                goals.map((goal) => {
                    if (goal.name === selectedPills.name) {
                        goal.name = name
                        goal.jobs = jobs
                        goal.time = time
                        goal.date = date
                    }
                })
                console.log(goals)
                updateDoc(doc(appointmentCollection, user.uid), {
                    Data: goals
                })
            }
        })
        setTime("")
        // setPills("")
        setDate("")
        history.push("/appointreminder", { direction: "forward" });
        console.log("update")
    }
    const openModal = (object) => {
        setIsOpen2(true);
        console.log(object)
        setSelectedPills(object)
    }

    return (
        <IonPage >
            <IonContent id='bg'>
                <button id='btn' expand="block" onClick={() => setIsOpen(true)} slot='fixed'>
                    <IonIcon icon={add} />
                </button>
                <IonModal isOpen={isOpen} className="content" style={{}}>
                    <Header title="Fills The Form" />
                    <IonCard className='pills-card'>
                        <IonItemDivider>
                            <IonInput type='text' placeholder='Name' value={name} onIonChange={(e) => setName(e.target.value)} />
                        </IonItemDivider>
                        <IonItemDivider>
                            <IonInput type='text' placeholder='Jobs' value={jobs} onIonChange={(e) => setJobs(e.target.value)} />
                        </IonItemDivider>
                        <IonItemDivider>
                            <IonInput type='time' value={time} onIonChange={(e) => setTime(e.target.value)} />
                        </IonItemDivider>
                        <IonItemDivider style={{ marginBottom: "20px" }}>
                            <IonInput type='date' value={date} onIonChange={(e) => setDate(e.target.value)} />
                        </IonItemDivider>
                        <IonItemDivider className='btnModal' style={{ paddingBottom: "10px" }}>
                            <button style={{ height: "50px", width: "60px", marginRight: "25px", borderRadius: "10px", marginLeft: "25px", backgroundColor: "#2fdf75", color: "white" }} onClick={AddDoctor}>Submit</button>
                            <button onClick={() => setIsOpen(false)} style={{ height: "50px", width: "60px", marginRight: "25px", borderRadius: "10px", backgroundColor: "#eb445a", color: "white" }}>Close</button>
                        </IonItemDivider>
                    </IonCard>
                </IonModal>
                <div style={{ marginTop: "150px" }}>
                    {postData && postData.map((item, index) => {
                        return (
                            <IonCard key={index}>
                                <div>
                                    <div>
                                        <h2 style={{ paddingLeft: "15px", color: "red" }}>
                                            {item.name}
                                            <IonIcon icon={trashBin} className="del" style={{ paddingLeft: "125px" }} color="danger" onClick={() => del(item.name)} />
                                            <IonIcon icon={createSharp} style={{ marginLeft: "20px" }} color="warning" onClick={() => openModal(item)} />
                                            <IonModal isOpen={isOpen2} className="content" style={{}}>
                                                <Header title="Fills The Form" />
                                                <IonCard className='pills-card'>
                                                    <IonItemDivider>
                                                        <IonInput type='text' placeholder='Name' value={name} onIonChange={(e) => setName(e.target.value)} />
                                                    </IonItemDivider>
                                                    <IonItemDivider>
                                                        <IonInput type='text' placeholder='Jobs' value={jobs} onIonChange={(e) => setJobs(e.target.value)} />
                                                    </IonItemDivider>
                                                    <IonItemDivider>
                                                        <IonInput type='time' value={time} onIonChange={(e) => setTime(e.target.value)} />
                                                    </IonItemDivider>
                                                    <IonItemDivider style={{ marginBottom: "20px" }}>
                                                        <IonInput type='date' value={date} onIonChange={(e) => setDate(e.target.value)} />
                                                    </IonItemDivider>
                                                    <IonItemDivider className='btnModal' style={{ paddingBottom: "10px" }}>
                                                        <button style={{ height: "50px", width: "60px", marginRight: "25px", borderRadius: "10px", marginLeft: "25px", backgroundColor: "#2fdf75", color: "white" }} onClick={() => update(selectedPills)}>Submit</button>
                                                        <button onClick={() => setIsOpen2(false)} style={{ height: "50px", width: "60px", marginRight: "25px", borderRadius: "10px", backgroundColor: "#eb445a", color: "white" }}>Close</button>
                                                    </IonItemDivider>
                                                </IonCard>
                                            </IonModal>
                                        </h2>
                                    </div>
                                    <div>
                                        <h5 style={{ paddingLeft: "15px", color: "red" }}>{item.jobs}</h5>
                                    </div>
                                </div>
                                <div className="doctortime">
                                    <span > <IonIcon icon={watch} style={{ paddingRight: "5px" }} />{item.time}</span>
                                    <span style={{ paddingLeft: "160px" }} ><IonIcon icon={calendar} style={{ paddingRight: "5px" }} />{item.date}</span>
                                </div>
                            </IonCard>
                        )
                    })}
                </div>
            </IonContent>
        </IonPage>
    );
}
export default Appoint;

