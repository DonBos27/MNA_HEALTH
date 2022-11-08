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
    // const [data, setData] = useState([])
    const [postData, setPostData] = useState([])
    const [name, setName] = useState("");
    const [jobs, setJobs] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
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
        // event.preventDefault();
        getDoc(doc(appointmentCollection, user.uid)).then(
            (docSnap) => {
                if (docSnap.exists()) {
                    const data = { name,jobs, time, date }
                    const newData = docSnap.data();
                    console.log(newData)
                    updateDoc(doc(appointmentCollection, user.uid), {
                        Data: arrayUnion(data)
                    })
                }
            }
        )
        // getDoc(doc(db, "appointment", user.uid)).then(docSnap => {
        //     if (docSnap.exists()) {
        //         const data = { name, jobs, time, date }
        //         const newData = docSnap.data();
        //         console.log(typeof newData);
        //         console.log(newData.Pills)
        //         const don = newData.Pills
        //         don.push(data)
        //         console.log(docSnap.data())
        //         updateDoc(doc(db, 'medical', user.uid), {
        //             Pills: don
        //         })
        //         console.log()
        //     } else {
        //         const data = [{ name, jobs, time, date }]
        //         setDoc(doc(db, "medical", user.uid), {
        //             Pills: data
        //         })
        //         console.log("No such document!");
        //     }

        // })

        // setData([{ time, name, jobs, date }, ...data]);
        // setTime("")
        // setName("")
        // setJobs("")
        // setDate("")
        // history.push("/appointreminder", { direction: "forward" });
        // console.log('added')
    }
    const del = (deleteId) => {
        // const datas = [{ name, jobs, time, date }]
        // const docRef = doc(db, 'appointment', user.uid);
        // updateDoc(docRef, {
        //     Data: datas.filter(data => data.id !== deleteId)
        //     // Data: arrayRemove(datas)
        // });
        // console.log(updateDoc)
        console.log("deleted")
    }
    const update = () => {
        // const datas = [{ name, jobs, time, date }]
        // const docRef = doc(db, 'appointment', user.uid);
        // updateDoc(docRef, {
        //     Data: datas
        // });
        // console.log("update")
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
                                            <IonIcon icon={trashBin} className="del" style={{ paddingLeft: "125px" }} color="danger" onClick={del} />
                                            <IonIcon icon={createSharp} style={{ marginLeft: "20px" }} color="warning" onClick={() => setIsOpen2(true)} />
                                            <IonModal isOpen2={isOpen} className="content" style={{}}>
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
                                                        <button style={{ height: "50px", width: "60px", marginRight: "25px", borderRadius: "10px", marginLeft: "25px", backgroundColor: "#2fdf75", color: "white" }} onClick={update}>Submit</button>
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

