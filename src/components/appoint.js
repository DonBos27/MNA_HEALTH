import React, { useState } from 'react';
import { IonButtons, IonInput, IonCard, IonLabel, IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonIcon, IonItemDivider } from '@ionic/react';
import './CardDoctor.css';
import Header from './Header';
import { add } from "ionicons/icons";
import { useHistory } from 'react-router';
import { calendar, watch } from 'ionicons/icons';
import { trashBin, createSharp } from 'ionicons/icons';
function Appoint() {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState([])
    const [name, setName] = useState("");
    const [jobs, setJobs] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const history = useHistory()
    function AddDoctor(event) {
        event.preventDefault();
        setData([{ time, name, jobs, date }, ...data]);
        setTime("")
        setName("")
        setJobs("")
        setDate("")
        history.push("/appointreminder", { direction: "forward" });
    }
    const del = () => {
        console.log("deleted")
    }
    const update = () => {
        console.log("update")
    }

    return (
        <IonPage >
            <IonContent className='main'>
                <button className='btn' expand="block" onClick={() => setIsOpen(true)}>
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
                    {data.map((item, index) => {
                        return (
                            <IonCard >
                                <div>
                                    <div>
                                        <h2 style={{ paddingLeft: "15px", color: "red" }}>
                                            {item.name}
                                            <IonIcon icon={trashBin} className="del" style={{ paddingLeft: "125px" }} color="danger" onClick={del} />
                                            <IonIcon icon={createSharp} style={{ marginLeft: "20px" }} color="warning" onClick={update} />
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

