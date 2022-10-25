import { useState } from 'react'
import { IonPage, IonContent, IonNavLink, IonIcon, useIonToast, } from '@ionic/react'
import Logo from "../pictures/logo.svg";
import './Login.css';
import Register from './Register';
import Home from './Home';
import loginPic from '../pictures/login.gif';
import login1 from '../pictures/login1.gif';
import login2 from '../pictures/login2.gif';
import { logoGoogle, logoFacebook, warning } from 'ionicons/icons';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/configFirebase';
import { useHistory } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const [present] = useIonToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
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
            history.push("/login", { direction: "forward" });
        }
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                history.push("/home", { direction: "forward" });
                setEmail("");
                setPassword("");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                present({
                    message: 'Wrong email or password!',
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
                setEmail("");
                setPassword("");
            });
    };
    const handleRegister = () => {
        history.push("/register", { direction: "forward" });
    }

    return (
        <IonPage >
            <IonContent fullscreen className="main">
                <div className="headContainer" >
                </div>
                <img src={Logo} alt="logo" className="logo" />
                <div className="loginInput">
                    <img src={loginPic} style={{ width: "25%", borderRadius: "50px", backgroundColor: "#0e6c94", marginLeft: "20px" }} />
                    <img src={login1} style={{ width: "25%", borderRadius: "50px", backgroundColor: "#0e6c94", marginLeft: "20px" }} />
                    <img src={login2} style={{ width: "25%", borderRadius: "50px", backgroundColor: "#0e6c94", marginLeft: "20px" }} />
                    <div>
                        <IonIcon icon={logoGoogle} size="large" style={{ marginTop: "35px", marginLeft: "130px" }} />
                        <IonIcon icon={logoFacebook} size="large" style={{ marginTop: "35px", marginLeft: "25px" }} />
                    </div>
                    <input
                        type="email"
                        placeholder="E-mail"
                        id="LoginEmail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <input
                        type="password"
                        placeholder="Password"
                        id="LoginPassword"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    <button type="submit" className="Login" onClick={handleSubmit}>Login</button>
                    <p style={{ marginTop: "70px", marginLeft: "130px", fontSize: "12px", color: "white" }}>Do not have an account ?</p>
                    <button type="submit" className="Register" onClick={handleRegister}>Register</button>
                </div>
            </IonContent>

        </IonPage >
    );
}
export default Login;