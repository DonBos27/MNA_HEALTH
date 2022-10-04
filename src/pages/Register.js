import React from "react";
import {
    IonContent,
    IonPage,
    IonIcon,
    IonNavLink

} from "@ionic/react";
import Logo from "../pictures/logo.svg"
import './Register.css';
import { camera } from "ionicons/icons";
import Home from "./Home";
function Register() {
    return (
        <IonPage style={{ backgroundColor: "#0E6C94" }}>
            <IonContent fullscreen className="main">
                {/* <IonLoading message="Loading" duration={2} isOpen={busy} /> */}
                <img src={Logo} alt="logo" className="logo" style={{ marginTop: "45px", width: "75px", marginLeft: "100px" }} />
                <div className="RegFormCont" >
                    <div style={{ width: "75px", height: "75px", backgroundColor: "#D9D9D9", marginLeft: "105px", borderRadius: "50%", marginTop: "-25px", position: "absolute" }} >
                        <IonIcon icon={camera} style={{ marginTop: "25px", marginLeft: "28px" }} />
                    </div>
                    <div className="loginForm">
                        <input
                            type="text"
                            placeholder="Full Name"
                            style={{ marginTop: "65px", paddingLeft: "10px" }}
                            className="input"
                        ></input>{" "}
                        <input
                            type="email"
                            placeholder="E-mail"
                            style={{ marginTop: "20px", paddingLeft: "10px" }}
                            className="input"
                        ></input>
                        <input
                            type="text"
                            placeholder="Date of Birth"
                            style={{ marginTop: "20px", paddingLeft: "10px" }}
                            className="input"
                        ></input>
                        <input
                            type="password"
                            placeholder="Password"
                            style={{ marginTop: "20px", paddingLeft: "10px" }}
                            className="input"
                        ></input>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            style={{ marginTop: "20px", paddingLeft: "10px", marginBottom: "50px" }}
                            className="input"
                        ></input>
                        <IonNavLink routerDirection="forward" component={() => <Home />}>
                            <button type="submit" style={{ marginBottom: "30px", fontWeight: "bold", marginTop: "10px" }} >Register</button>
                        </IonNavLink>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default Register;
