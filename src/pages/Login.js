import { useState } from 'react'
import { IonPage, IonContent, IonNavLink, IonIcon } from '@ionic/react'
import Logo from "../pictures/logo.svg";
import './Login.css';
import Register from './Register';
import Home from './Home';
import loginPic from '../pictures/login.gif';
import login1 from '../pictures/login1.gif';
import login2 from '../pictures/login2.gif';
import { logoGoogle, logoFacebook } from 'ionicons/icons';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/configFirebase';
import { useHistory } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                history.push("/home", { direction: "forward" });
                setEmail("");
                setPassword("");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setEmail("");
                setPassword("");
            });
    };

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
                        <IonIcon icon={logoGoogle} size="large" style={{ marginTop: "35px", marginLeft:"125px" }} />
                        <IonIcon icon={logoFacebook} size="large" style={{ marginTop: "35px", marginLeft:"25px" }} />
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
                    <IonNavLink routerDirection="forward" component={() => <Home />}>
                        <button type="submit" className="Login" onClick={handleSubmit}>Login</button>
                    </IonNavLink>
                    <p style={{ marginTop: "70px", marginLeft: "130px", fontSize: "12px", color: "white" }}>Do not have an account ?</p>
                    <IonNavLink routerDirection="forward" component={() => <Register />}>
                        <button type="submit" className="Register">Register</button>
                    </IonNavLink>
                </div>
            </IonContent>

        </IonPage >
    );
}
export default Login;