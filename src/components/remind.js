import React, { useState } from 'react';
import { IonButtons, IonInput, IonCard, IonLabel, IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonIcon, IonItemDivider } from '@ionic/react';
import './remind.css';
import Header from './Header';
import { add } from "ionicons/icons";
import { useHistory } from "react-router";
import { trashBin, createSharp } from 'ionicons/icons';
function Remind() {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState([])
    const [pills, setPills] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const history = useHistory();
    function AddPills(event) {
        event.preventDefault();
        setData([{ time, pills, date }, ...data]);
        setTime("")
        setPills("")
        setDate("")
        history.push("/pillsreminder", { direction: "forward" });
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
                                    <IonIcon icon={trashBin} size="large" className="del" style={{ marginLeft: "200px", marginTop: "90px" }} color="danger" onClick={del} />
                                </span>
                                <span>
                                    <IonIcon icon={createSharp} size="large" style={{ marginLeft: "20px", marginTop: "90px" }} color="warning" onClick={update} />
                                </span>
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

