import React, { useState, useEffect } from 'react';
import { IonButtons, IonInput, IonCard, IonLabel, IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonIcon, IonItemDivider } from '@ionic/react';
import '../components/remind.css';
import Header from '../components/Header';
import { add } from "ionicons/icons";
import { useHistory } from "react-router";
import { trashBin, createSharp } from 'ionicons/icons';
import TabBar from '../components/TabBar';
import { auth, medicalCollection, database, db } from '../firebase/configFirebase'
import { addDoc, onAuthStateChanged, setDoc, doc, deleteDoc, getDoc, getDocs, updateDoc, arrayUnion, arrayRemove, onSnapshot } from 'firebase/firestore'
import { getAuth } from "firebase/auth";

function Remind() {
    const [isOpen, setIsOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false)
    const [newdata, setNewData] = useState([])
    const [pills, setPills] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [selectedPills, setSelectedPills] = useState();
    const history = useHistory();
    const [postData, setPostData] = useState([])

    // Verified if user exist
    const auth = getAuth();
    const user = auth.currentUser;

    useEffect(() => {
        if (user) {
            onSnapshot(doc(db, "medical", user.uid), (doc) => {
                if (doc.exists()) {
                    // let items = [];
                    const newData = doc.data();
                    const pills = newData.Pills;
                    console.log(pills)
                    setPostData(pills);
                    console.log(postData)
                    console.log(user.uid)
                }
                console.log("Current data: ", doc.data());
            })
        } else {
            history.push("/login")
        }
    }, [])
    function AddPills() {
        getDoc(doc(db, "medical", user.uid)).then(docSnap => {
            if (docSnap.exists()) {
                const data = { pills, time, date }
                const newData = docSnap.data();
                console.log(typeof newData);
                console.log(newData.Pills)
                const myData = newData.Pills
                console.log(myData)
                myData.push(data)
                console.log(docSnap.data())
                updateDoc(doc(db, 'medical', user.uid), {
                    Pills: myData
                })
                console.log()
            } else {
                const data = [{ pills, time, date }]
                setDoc(doc(db, "medical", user.uid), {
                    Pills: data
                })
                console.log("No such document!");
            }
        })
    }
    const del = (index) => {
        console.log(index)
        getDoc(doc(medicalCollection, user.uid)).then(docSnap => {
            if (docSnap.exists()) {
                const newData = docSnap.data();
                console.log(newData)
                const goals = newData.Pills
                console.log(goals)
                const don = goals.filter(goal => goal.pills !== index)
                console.log("Hi", don)
                console.log(goals)
                const data = { pills, time, date }
                updateDoc(doc(medicalCollection, user.uid), {
                    Pills: don
                })
            }
        })
        console.log("Delete")
    }
    const update = (object) => {
        console.log(object)
        getDoc(doc(medicalCollection, user.uid)).then(docSnap => {
            if (docSnap.exists()) {
                const newData = docSnap.data();
                const goals = newData.Pills
                console.log(goals)

                goals.map((goal) => {
                    if (goal.pills === selectedPills.pills) {
                        goal.pills = pills
                        goal.time = time
                        goal.date = date
                    }
                })
                console.log(goals)
                updateDoc(doc(medicalCollection, user.uid), {
                    Pills: goals
                })
            }
        })
        setTime("")
        setPills("")
        setDate("")
        history.push("/pills", { direction: "forward" });
        console.log("update")
    }
    const openModal = (object) => {
        setIsEdit(true);
        console.log(object)
        setSelectedPills(object)
    }

    return (
        <IonPage >
            <IonContent className='bg'>
                <Header title="Pills Reminder" />
                <button onClick={() => setIsOpen(true)} slot='fixed' style={{ borderRadius: "50px", height: "60px", width: "60px", marginTop: "600px", marginLeft: "275px", backgroundColor: "#7f2f86", color: "white" }}>
                    <IonIcon icon={add} />
                </button>
                <IonModal isOpen={isOpen} className="content" style={{}}>
                    <Header title="Fills The Form" />
                    <IonCard className='pills-card'>
                        <IonItemDivider>
                            <IonInput type='time' value={time} onIonChange={(e) => setTime(e.target.value)} />
                        </IonItemDivider>
                        <IonItemDivider>
                            <IonInput type='text' placeholder='Pills' value={pills} onIonChange={(e) => setPills(e.target.value)} />
                        </IonItemDivider>
                        <IonItemDivider style={{ marginBottom: "20px" }}>
                            <IonInput type='date' value={date} onIonChange={(e) => setDate(e.target.value)} />
                        </IonItemDivider>
                        <IonItemDivider className='btnModal' style={{ paddingBottom: "10px" }}>
                            <button style={{ height: "50px", width: "60px", marginRight: "25px", borderRadius: "10px", marginLeft: "25px", backgroundColor: "#2fdf75", color: "white" }} onClick={AddPills}>Submit</button>
                            <button onClick={() => setIsOpen(false)} style={{ height: "50px", width: "60px", marginRight: "25px", borderRadius: "10px", backgroundColor: "#eb445a", color: "white" }}>Close</button>
                        </IonItemDivider>
                    </IonCard>
                </IonModal>
                <div style={{ marginTop: "150px" }}>
                    {postData && postData.map((item, index) => {
                        return (
                            <IonCard className='pillcard' key={index}>
                                <div className='pillhours'>
                                    <p>{item.time}</p>
                                    <li className='pilllist'>
                                        <span>{item.pills}</span> <br />
                                    </li>
                                </div>
                                <span className='iconDel'>
                                    <IonIcon icon={trashBin} size="large" className="del" style={{ marginLeft: "200px", marginTop: "90px" }} color="danger" onClick={() => del(item.pills)} />
                                </span>
                                <span>
                                    <IonIcon icon={createSharp} size="large" style={{ marginLeft: "20px", marginTop: "90px" }} color="warning" onClick={() => openModal(item)} />
                                </span>
                                <IonModal isOpen={isEdit} className="content" style={{}}>
                                    <Header title="Fills The Form" />
                                    <IonCard className='pills-card'>
                                        <IonItemDivider>
                                            <IonInput type='time' onIonChange={(e) => setTime(e.target.value)} />
                                        </IonItemDivider>
                                        <IonItemDivider>
                                            <IonInput type='text' placeholder='Pills' onIonChange={(e) => setPills(e.target.value)} />
                                        </IonItemDivider>
                                        <IonItemDivider style={{ marginBottom: "20px" }}>
                                            <IonInput type='date' onIonChange={(e) => setDate(e.target.value)} />
                                        </IonItemDivider>
                                        <IonItemDivider className='btnModal' style={{ paddingBottom: "10px" }}>
                                            <button style={{ height: "50px", width: "60px", marginRight: "25px", borderRadius: "10px", marginLeft: "25px", backgroundColor: "#2fdf75", color: "white" }} onClick={() => update(selectedPills)}>Submit</button>
                                            <button onClick={() => setIsEdit(false)} style={{ height: "50px", width: "60px", marginRight: "25px", borderRadius: "10px", backgroundColor: "#eb445a", color: "white" }}>Close</button>
                                        </IonItemDivider>
                                    </IonCard>
                                </IonModal>
                                <div className='pilldate'>
                                    <p id='day'>{item.date}</p>
                                </div>
                            </IonCard>
                        )
                    })}
                </div>
            </IonContent>
            <TabBar />
        </IonPage>
    );
}
export default Remind;