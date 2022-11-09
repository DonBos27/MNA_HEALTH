import { useState, useEffect } from 'react'
import { IonPage, IonContent, IonNavLink, IonIcon, useIonToast, } from '@ionic/react'
import Logo from "../pictures/logo.svg";
import './Login.css';
import Register from './Register';
import Home from './Home';
import loginPic from '../pictures/login.gif';
import login1 from '../pictures/login1.gif';
import login2 from '../pictures/login2.gif';
import { logoGoogle, logoFacebook, warning } from 'ionicons/icons';
import { setDoc,doc } from 'firebase/firestore';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider,signInWithRedirect } from "firebase/auth";
import { auth,db } from '../firebase/configFirebase';
import { useHistory } from 'react-router-dom';
import { getAuth } from 'firebase/auth';


const Login = () => {
    const [email, setEmail] = useState("");
    const [affiche, setFullName]= useState([])
    const [password, setPassword] = useState("");
    const history = useHistory();
    const [present] = useIonToast();
    const provider = new GoogleAuthProvider();
    const provider2 = new FacebookAuthProvider();
    const auth = getAuth();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                history.replace('/home');
            }
        })
    }, [])
    const google = () => {
        signInWithRedirect(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setFullName(user)
                setDoc(doc(db, "Users", user.uid), {
                    fullName: user.displayName,
                    email: user.email,
                    dateOfBirth: user.metadata.creationTime,
                    photo: user.photoURL,
                })
                // history.replace('/home');
                console.log(user)
            }).catch((error) => {
                console.log(error);
            });
    }
    const facebook = () => {
        signInWithRedirect(auth, provider2)
            .then((result) => {
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;
                const user = result.user;
                setFullName(user)
                setDoc(doc(db, "Users", user.uid), {
                    fullName: user.displayName,
                    email: user.email,
                    dateOfBirth: user.metadata.creationTime,
                    photo: user.photoURL,
                })
                // history.replace('/home');
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = FacebookAuthProvider.credentialFromError(error);
                console.log(error)
            });
    }

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
                        <IonIcon icon={logoGoogle} size="large" style={{ marginTop: "35px", marginLeft: "130px" }} onClick={google} />
                        <IonIcon icon={logoFacebook} size="large" style={{ marginTop: "35px", marginLeft: "25px" }} onClick={facebook}/>
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