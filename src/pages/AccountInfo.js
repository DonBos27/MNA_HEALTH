import { IonContent, IonLabel, IonPage, IonInput, IonItem, IonModal,IonItemDivider } from '@ionic/react';
import TabBar from '../components/TabBar';
import './AccountInfo.css';
import { useState } from 'react';
import Slide from './Slide';
const AccountInfo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [password, setPassword] = useState("");
    const submit = () => {
        console.log("submit");
    }
    const logout = () => {
        console.log("logout");
    }
    return (
        <IonPage>
            <IonContent className='main'>
                <div className='top'>
                    <p>Edit</p>
                    <img></img>
                    <h2>DON BOS</h2>
                </div >
                <div className='accountinfo'>
                    <p>Account Information <span style={{ float: "right", paddingRight: "10px" }} onClick={() => setIsOpen(true)}>Edit</span> </p>
                    <IonModal isOpen={isOpen} className="medinfo">
                        <div className="info" style={{marginTop:"100px", borderRadius:"50px"}}>
                            <p>Your Information</p>
                            <IonItem>
                                <IonLabel position='stacked'>Full Name</IonLabel>
                                <IonInput type='text'></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position='stacked'>Email</IonLabel>
                                <IonInput type='email'></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position='stacked'>Date Of Birth</IonLabel>
                                <IonInput type='date'></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position='stacked'>Password</IonLabel>
                                <IonInput type='password'></IonInput>
                            </IonItem>
                            <IonItemDivider className='btnmedinfo' style={{ paddingBottom: "10px" }}>
                                <button style={{ height: "50px", width: "60px", marginRight: "25px", borderRadius: "10px", marginLeft: "75px", backgroundColor: "#2fdf75", color: "white" }} onClick={submit}>Submit</button>
                                <button onClick={() => setIsOpen(false)} style={{ height: "50px", width: "60px", marginRight: "25px", borderRadius: "10px", backgroundColor: "#eb445a", color: "white" }}>Close</button>
                            </IonItemDivider>
                        </div>
                    </IonModal>
                    <IonItem>
                        <IonLabel position='stacked'>Full Name</IonLabel>
                        <IonInput disabled></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position='stacked'>Email</IonLabel>
                        <IonInput type='email' disabled></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position='stacked'>Date Of Birth</IonLabel>
                        <IonInput type='date' disabled></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position='stacked'>Password</IonLabel>
                        <IonInput type='password' disabled></IonInput>
                    </IonItem>
                </div>
                <button type="submit" className="btnReg" onClick={logout}>Log Out</button>
            </IonContent>
            <TabBar />
        </IonPage>
    )
}
export default AccountInfo;