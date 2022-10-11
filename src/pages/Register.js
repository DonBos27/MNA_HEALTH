import React from "react";
import {
    IonContent,
    IonPage,
    IonIcon,
    IonNavLink,
} from "@ionic/react";
import Logo from "../pictures/logo.svg";
import './Register.css';
import { camera } from "ionicons/icons";
import Home from "./Home";
function Register() {
    return (
        <IonPage >
            <IonContent fullscreen className="main">
                {/* <IonLoading message="Loading" duration={2} isOpen={busy} /> */}
                <img src={Logo} alt="logo" id="logo" />
                <div className="RegFormCont" >
                    <div className="camera">
                        <IonIcon icon={camera} className="camIcon" />
                    </div>
                    <div className="loginForm">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="input"
                            id="fullName"
                        ></input>{" "}
                        <input
                            type="email"
                            placeholder="E-mail"
                            className="input"
                            id="email"
                        ></input>
                        <input
                            type="text"
                            placeholder="Date of Birth"
                            className="input"
                            id="dateOfBirth"
                        ></input>
                        <input
                            type="password"
                            placeholder="Password"
                            className="input"
                            id="password"
                        ></input>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="input"
                            id="confirmPassword"
                        ></input>
                        <IonNavLink routerDirection="forward" component={() => <Home />}>
                            <button type="submit" className="Register">Register</button>
                        </IonNavLink>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default Register;
