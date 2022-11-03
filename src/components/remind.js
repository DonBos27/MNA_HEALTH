import React, { useState, useEffect } from 'react';
import { IonButtons, IonInput, IonCard, IonLabel, IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonIcon, IonItemDivider } from '@ionic/react';
import './remind.css';
import Header from './Header';
import { add } from "ionicons/icons";
import { useHistory } from "react-router";
import { trashBin, createSharp } from 'ionicons/icons';
import { auth, medicalCollection, database, db } from '../firebase/configFirebase'
import { addDoc, onAuthStateChanged, setDoc, doc, deleteDoc, getDoc, getDocs } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
import { uid } from 'uid'
import { ref, set, onValue, remove } from "firebase/database";

function Remind() {
    const [isOpen, setIsOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false)
    const [data, setData] = useState([])
    const [pills, setPills] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [tempUidd, setTempUidd] = useState("");
    const history = useHistory();
    const [postData, setPostData] = useState("")

    // Verified if user exist
    const auth = getAuth();
    const user = auth.currentUser;

    useEffect(() => {
        if (user) {
            // getDoc(doc(db, "medical", user.uid)).then(docSnap => {
            //     if (docSnap.exists()) {
            //         const newData = docSnap.data();
            //         setPostData(newData);
            //         console.log(newData);
            //     }
            // })

            // let items = [];
            // getDocs(medicalCollection).then((snapshot) => {
            //     snapshot.forEach((doc) => {
            //         items.push(doc.data());
            //     })
            //     setData(items)
            //     console.log(items)
            // })

            onValue(ref(database, `/${auth.currentUser.uid}`), (snapshot) => {
                setData([]);
                const dn = snapshot.val();
                if (dn !== null) {
                    Object.values(dn).map((data) => {
                        setData((oldArray) => [...oldArray, data]);
                    });
                }
                history.push("/pillsreminder")
            });
        } else {
            history.push("/login")
        }
    }, [])
    function AddPills() {
        // setDoc(doc(db, "medical", user.uid), {
        //     pills: pills,
        //     time: time,
        //     date: date,

        // })
        const uidd = uid();
        set(ref(database, `/${auth.currentUser.uid}/${uidd}`), {
            time: time,
            pills: pills,
            date: date,
            uidd: uidd
        });
        setData([{ time, pills, date }, ...data]);
        setTime('')
        setPills('')
        setDate('')
        history.push("/pillsreminder", { direction: "forward" });
    }
    const del = (uid) => {
        // const uidd = uid()
        // await deleteDoc(doc(db, "medical", user.uid));
        remove(ref(database, `/${auth.currentUser.uid}/${uid}`));
        console.log("deleted")
    }
    // const edit = (uidd) => {
    //     setIsEdit(true);
    //     setTempUidd(uidd);
    //     // setIsOpen(true);
    // }
    const update = () => {
        const uidd = uid();
        // database()
        //     .ref(`/${auth.currentUser.uid}/${uidd}`)
        //     .set({
        //         time: time,
        //         pills: pills,
        //         date: date,
        //     })
        //     .then(() => console.log('Data updated.'));
        // const uidd = uid();
        update(ref(database, `/${auth.currentUser.uid}/${tempUidd}`), {
            time: time,
            pills: pills,
            date: date,
            tempUidd: tempUidd
        });
        // setData([{ time, pills, date }]);
        // setData("");
        setIsEdit(false);
        console.log("update")
    }

    return (
        <IonPage >
            <IonContent className='main'>
                <button className='btn' expand="block" onClick={() => setIsOpen(true)} slot='fixed'>
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
                    {data.map((item, index) => {
                        return (
                            <IonCard className='pillcard' key={index}>
                                <div className='pillhours'>
                                    <p>{item.time}</p>
                                    <li className='pilllist'>
                                        <span>{item.pills}</span> <br />
                                    </li>
                                </div>
                                <span className='iconDel'>
                                    <IonIcon icon={trashBin} size="large" className="del" style={{ marginLeft: "200px", marginTop: "90px" }} color="danger" onClick={() => del(item.uidd)} />
                                </span>
                                <span>
                                    <IonIcon icon={createSharp} size="large" style={{ marginLeft: "20px", marginTop: "90px" }} color="warning" onClick={() => setIsEdit(true)} />
                                </span>
                                <IonModal isOpen={isEdit} className="content" style={{}}>
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
                                            <button style={{ height: "50px", width: "60px", marginRight: "25px", borderRadius: "10px", marginLeft: "25px", backgroundColor: "#2fdf75", color: "white" }} onClick={() => update(item.uidd)}>Submit</button>
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

        </IonPage>
    );
}
export default Remind;