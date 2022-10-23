import React from "react";
import {
    IonContent,
    IonPage,
    IonIcon,
    IonImg,
} from "@ionic/react";
import Logo from "../pictures/logo.svg";
import './Register.css';
import { camera } from "ionicons/icons";
import { Camera, CameraResultType, CameraSource, } from '@capacitor/camera';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/configFirebase';
import { useHistory } from 'react-router-dom';


function Register() {
    const [photo, setPhoto] = useState();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const history = useHistory();

    const RegisterBtn = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                history.push("/login", { direction: "forward" });
                setFullName("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                setDateOfBirth("");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setFullName("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                setDateOfBirth("");
            });
    }
    defineCustomElements(window);
    const takePhoto = async () => {
        const photo = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100,
        });
        setPhoto(photo.webPath)
    };
    return (
        <IonPage >
            <IonContent fullscreen className="main">
                <img src={Logo} alt="logo" id="logo" /> <br/>
                <img  className="imgPic" src={photo} alt="Add Profile"></img>
                <div className="RegFormCont" >
                    <div className="camera" onClick={takePhoto}>
                        <IonIcon icon={camera} className="camIcon" />
                    </div>
                    <div className="loginForm">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="input"
                            id="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        ></input>{" "}
                        <input
                            type="email"
                            placeholder="E-mail"
                            className="input"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                        <input
                            type="text"
                            placeholder="Date of Birth"
                            className="input"
                            id="dateOfBirth"
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                        ></input>
                        <input
                            type="password"
                            placeholder="Password"
                            className="input"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></input>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="input"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        ></input>

                        <button type="submit" className="Register" onClick={RegisterBtn}>Register</button>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default Register;
