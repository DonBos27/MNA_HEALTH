// import React, { useState, useEffect } from 'react';
// import { IonButtons, IonInput, IonCard, IonLabel, IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonIcon, IonItemDivider } from '@ionic/react';
// import './remind.css';
// import Header from './Header';
// import { add } from "ionicons/icons";
// import { useHistory } from "react-router";
// import { trashBin, createSharp } from 'ionicons/icons';
// import { auth, medicalCollection, database, db } from '../firebase/configFirebase'
// import { addDoc, onAuthStateChanged, setDoc, doc, deleteDoc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
// import { getAuth } from "firebase/auth";
// import { uid } from 'uid'
// import { ref, set, onValue, remove } from "firebase/database";

// function Remind() {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isEdit, setIsEdit] = useState(false)
//     const [data, setData] = useState([])
//     const [pills, setPills] = useState("");
//     const [time, setTime] = useState("");
//     const [date, setDate] = useState("");
//     const [id, setId] = useState("");
//     const [tempUidd, setTempUidd] = useState("");
//     const history = useHistory();
//     const [postData, setPostData] = useState([])
//     const datas = [{ pills, time, date }]
//     // const [pillsArray, setPillsArray] = useState(datas)
//     // Verified if user exist
//     const auth = getAuth();
//     const user = auth.currentUser;

//     useEffect(() => {
//         if (user) {
//             getDoc(doc(db, "medical", user.uid)).then(docSnap => {
//                 if (docSnap.exists()) {
//                     const newData = docSnap.data();
//                     setPostData(newData.Pills);
//                     console.log(newData);
//                     console.log(postData)
//                     console.log(user.uid)
//                 }
//             })
//             // onValue(ref(database, `/${auth.currentUser.uid}`), (snapshot) => {
//             //     setData([]);
//             //     const dn = snapshot.val();
//             //     if (dn !== null) {
//             //         Object.values(dn).map((data) => {
//             //             setData((oldArray) => [...oldArray, data]);
//             //         });
//             //     }
//             //     history.push("/pillsreminder")
//             // });
//         } else {
//             history.push("/login")
//         }
//     }, [])
//     function AddPills() {
//         getDoc(doc(db, "medical", user.uid)).then(docSnap => {
//             if (docSnap.exists()) {
//                 const data = { pills, time, date }
//                 const newData = docSnap.data();
//                 console.log(typeof newData);
//                 console.log(newData.Pills)
//                 const don = newData.Pills
//                 don.push(data)
//                 console.log(docSnap.data())
//                 updateDoc(doc(db, 'medical', user.uid), {
//                     Pills: don
//                 })
//                 console.log()
//             } else {
//                 const data = [{ pills, time, date }]
//                 setDoc(doc(db, "medical", user.uid), {
//                     Pills: data
//                 })
//                 console.log("No such document!");
//             }

//         })
//     }


//     //     const uidd = uid();
//     //     set(ref(database, `/${auth.currentUser.uid}/${uidd}`), {
//     //         time: time,
//     //         pills: pills,
//     //         date: date,
//     //         uidd: uidd
//     //     });
//     //     setData([{ time, pills, date }, ...data]);
//     //     setTime('')
//     //     setPills('')
//     //     setDate('')
//     //     history.push("/pillsreminder", { direction: "forward" });
//     // }
//     const del = async (uid) => {
//         // remove(ref(database, `/${auth.currentUser.uid}/${uid}`));
//         // setData(data.filter((item) => item.uidd !== uid));
//         const uidd = uid()
//         const data = [{ id, pills, time, date }]
//         await deleteDoc(doc(db, "medical", data));

//         // setPillsArray((data) => data.filter((_, i) => data.id !== i));
//     }
//     const update = (userid) => {
//         // const uidd =  uid();
//         remove(ref(database, `/${auth.currentUser.uid}/${userid}`)).then(docSnap => {
//             const uidd = uid();
//             set(ref(database, `/${auth.currentUser.uid}/${uidd}`), {
//                 time: time,
//                 pills: pills,
//                 date: date,
//                 uidd: uidd
//             })
//         });
//         // setData([{ time, pills, date }]);
//         setTime("")
//         setPills("")
//         setDate("")
//         // setIsEdit(false);
//         history.push("/pillsreminder", { direction: "forward" });


//         // database()
//         //     .ref(`/${auth.currentUser.uid}/${uid}`)
//         //     .set({
//         //         time: time,
//         //         pills: pills,
//         //         date: date,
//         //     })
//         //     .then(() => console.log('Data updated.'));
//         // const uidd = uid();
//         // update(ref(database, `/${auth.currentUser.uid}/${tempUidd}`), {
//         //     time: time,
//         //     pills: pills,
//         //     date: date,
//         //     tempUidd: tempUidd
//         // });


//         // const data = { pills, time, date }
//         // updateDoc(doc(db, 'medical', user.uid), {
//         //     Pills: don
//         // })
//         // console.log()


//         // setData([{ time, pills, date }]);
//         // setData("");
//         // setIsEdit(false);
//         console.log("update")
//     }

//     return (
//         <IonPage >
//             <IonContent className='bg'>
//                 <button className='btn' expand="block" onClick={() => setIsOpen(true)} slot='fixed'>
//                     <IonIcon icon={add} />
//                 </button>
//                 <IonModal isOpen={isOpen} className="content" style={{}}>
//                     <Header title="Fills The Form" />
//                     <IonCard className='pills-card'>
//                         <IonItemDivider>
//                             <IonInput type='time' value={time} onIonChange={(e) => setTime(e.target.value)} />
//                         </IonItemDivider>
//                         <IonItemDivider>
//                             <IonInput type='text' placeholder='Pills' value={pills} onIonChange={(e) => setPills(e.target.value)} />
//                         </IonItemDivider>
//                         <IonItemDivider style={{ marginBottom: "20px" }}>
//                             <IonInput type='date' value={date} onIonChange={(e) => setDate(e.target.value)} />
//                         </IonItemDivider>
//                         <IonItemDivider className='btnModal' style={{ paddingBottom: "10px" }}>
//                             <button style={{ height: "50px", width: "60px", marginRight: "25px", borderRadius: "10px", marginLeft: "25px", backgroundColor: "#2fdf75", color: "white" }} onClick={AddPills}>Submit</button>
//                             <button onClick={() => setIsOpen(false)} style={{ height: "50px", width: "60px", marginRight: "25px", borderRadius: "10px", backgroundColor: "#eb445a", color: "white" }}>Close</button>
//                         </IonItemDivider>
//                     </IonCard>
//                 </IonModal>
//                 <div style={{ marginTop: "150px" }}>
//                     {postData.map((item, index) => {
//                         return (
//                             <IonCard className='pillcard' key={index}>
//                                 <div className='pillhours'>
//                                     <p>{item.time}</p>
//                                     <li className='pilllist'>
//                                         <span>{item.pills}</span> <br />
//                                     </li>
//                                 </div>
//                                 <span className='iconDel'>
//                                     <IonIcon icon={trashBin} size="large" className="del" style={{ marginLeft: "200px", marginTop: "90px" }} color="danger" onClick={del} />
//                                 </span>
//                                 <span>
//                                     <IonIcon icon={createSharp} size="large" style={{ marginLeft: "20px", marginTop: "90px" }} color="warning" onClick={() => setIsEdit(true)} />
//                                 </span>
//                                 <IonModal isOpen={isEdit} className="content" style={{}}>
//                                     <Header title="Fills The Form" />
//                                     <IonCard className='pills-card'>
//                                         <IonItemDivider>
//                                             <IonInput type='time' value={time} onIonChange={(e) => setTime(e.target.value)} />
//                                         </IonItemDivider>
//                                         <IonItemDivider>
//                                             <IonInput type='text' placeholder='Pills' value={pills} onIonChange={(e) => setPills(e.target.value)} />
//                                         </IonItemDivider>
//                                         <IonItemDivider style={{ marginBottom: "20px" }}>
//                                             <IonInput type='date' value={date} onIonChange={(e) => setDate(e.target.value)} />
//                                         </IonItemDivider>
//                                         <IonItemDivider className='btnModal' style={{ paddingBottom: "10px" }}>
//                                             <button style={{ height: "50px", width: "60px", marginRight: "25px", borderRadius: "10px", marginLeft: "25px", backgroundColor: "#2fdf75", color: "white" }} onClick={() => update(item.uidd)}>Submit</button>
//                                             <button onClick={() => setIsEdit(true)} style={{ height: "50px", width: "60px", marginRight: "25px", borderRadius: "10px", backgroundColor: "#eb445a", color: "white" }}>Close</button>
//                                         </IonItemDivider>
//                                     </IonCard>
//                                 </IonModal>
//                                 <div className='pilldate'>
//                                     <p id='day'>{item.date}</p>
//                                 </div>
//                             </IonCard>
//                         )
//                     })}
//                 </div>

//             </IonContent>

//         </IonPage>
//     );
// }
// export default Remind;