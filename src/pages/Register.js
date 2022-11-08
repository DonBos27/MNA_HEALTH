import React, { useEffect } from "react";
import {
    IonContent,
    IonPage,
    IonIcon,
    IonImg,
    useIonToast,
} from "@ionic/react";
import Logo from "../pictures/logo.svg";
import './Register.css';
import { camera, warning } from "ionicons/icons";
import { Camera, CameraResultType, CameraSource, } from '@capacitor/camera';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth, db, userCollection } from '../firebase/configFirebase';
import { addDoc, setDoc, doc, collection } from "firebase/firestore";
import { useHistory } from 'react-router-dom';


function Register() {
    const [photo, setPhoto] = useState();
    const [displayName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const history = useHistory();
    const [present] = useIonToast();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                history.replace('/login');
            }
        })
    }, [])
    const RegisterBtn = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            present({
                message: 'Passwords do not match!',
                duration: 3000,
                position: 'bottom',
                icon: warning,
                cssClass: 'custom-toast',
                buttons: [
                    {
                        text: 'Dismiss',
                        role: 'cancel'
                    }
                ],
            });
            history.push("/register", { direction: "forward" });
            setPassword("");
            setConfirmPassword("");
        }
        else if (displayName === '' || email === '' || password === '' || confirmPassword === '' || dateOfBirth === '') {
            present({
                message: 'Please fill in all the fields!',
                duration: 3000,
                position: 'bottom',
                icon: warning,
                cssClass: 'custom-toast',
                buttons: [
                    {
                        text: 'Dismiss',
                        role: 'cancel'
                    }
                ],
            });
            history.push("/register", { direction: "forward" });
        }
        else if (password.length < 6) {
            present({
                message: 'Password must be at least 6 characters!',
                duration: 3000,
                position: 'bottom',
                icon: warning,
                cssClass: 'custom-toast',
                buttons: [
                    {
                        text: 'Dismiss',
                        role: 'cancel'
                    }
                ],
            });
            history.push("/register", { direction: "forward" });
            setPassword("");
            setConfirmPassword("");
        }
        else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    setDoc(doc(db, "Users", user.uid), {
                        fullName: displayName,
                        email: email,
                        dateOfBirth: dateOfBirth,
                    })
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
                    present({
                        message: 'User already exists!',
                        duration: 4000,
                        position: 'bottom',
                        icon: warning,
                        cssClass: 'custom-toast',
                        buttons: [
                            {
                                text: 'Dismiss',
                                role: 'cancel'
                            }
                        ],
                    });
                    setFullName("");
                    setEmail("");
                    setPassword("");
                    setConfirmPassword("");
                    setDateOfBirth("");
                });
        }
    }
    const handleLogin = () => {
        history.push("/login", { direction: "forward" });
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
                <img src={Logo} alt="logo" id="logo" /> <br />
                <div className="RegFormCont" >
                    <div className="camera" onClick={takePhoto}>
                        <IonIcon icon={camera} className="camIcon" onClick={takePhoto} />
                    </div>
                    <img className="imgPic" src={photo} alt="" onClick={takePhoto}></img>
                    <div className="loginForm">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="input"
                            id="fullName"
                            value={displayName}
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
                            type="date"
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
                        <p style={{ marginTop: "95px", marginLeft: "120px", fontSize: "12px", color: "white" }}>Already have an account</p>
                        <button type="submit" className="log" onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
}
export default Register;
