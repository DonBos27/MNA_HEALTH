import { useState } from 'react'
import { IonPage, IonContent, IonNavLink, IonItemDivider, IonFooter, IonToolbar, IonTitle, IonIcon } from '@ionic/react'
import Logo from "../pictures/logo.svg";
import './Login.css';
import Register from './Register';
import Home from './Home';
import MedicalAppImg from '../pictures/medical-app.gif';
import MedicalInfo from '../pictures/health.gif';
import loginPic from '../pictures/login.gif';
import login1 from '../pictures/login1.gif';
import login2 from '../pictures/login2.gif';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    // const history = useHistory();

    // const { currentUser } = useAuth();

    // useEffect(() => {
    //     if (currentUser) {
    //     history.push("/login");
    //     }
    // }, [currentUser, history]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // try {
        // setError("");
        // setLoading(true);
        // await login(email, password);
        // history.push("/");
        // } catch {
        // setError("Failed to log in");
        // }
        // setLoading(false);
    };

    return (
        <IonPage >
            <IonContent fullscreen className="main">
                <div className="headContainer" >
                    {/* <img src={MedicalAppImg} alt="logo" style={{borderRadius:"50%", width:"100px",marginTop:"120px", marginLeft:"-35px"}} /> */}
                </div>
                <img src={Logo} alt="logo" className="logo" />
                <div className="loginInput">
                    <img src={loginPic} style={{ width: "25%", borderRadius: "50px", backgroundColor: "#0e6c94", marginLeft: "20px" }} />
                    <img src={login1} style={{ width: "25%", borderRadius: "50px", backgroundColor: "#0e6c94", marginLeft: "20px" }} />
                    <img src={login2} style={{ width: "25%", borderRadius: "50px", backgroundColor: "#0e6c94", marginLeft: "20px" }} />

                    <input
                        type="email"
                        placeholder="E-mail"
                        id="LoginEmail"
                    ></input>
                    <input
                        type="password"
                        placeholder="Password"
                        id="LoginPassword"
                    ></input>
                    <IonNavLink routerDirection="forward" component={() => <Home />}>
                        <button type="submit" className="Login">Login</button>
                    </IonNavLink>
                    <p style={{ marginTop: "70px", marginLeft: "95px", fontSize: "12px", color: "white" }}>Do not have an account ?</p>
                    <IonNavLink routerDirection="forward" component={() => <Register />}>
                        <button type="submit" className="Register">Register</button>
                    </IonNavLink>
                </div>
                {/* <IonIcon name="logo-facebook" ></IonIcon> */}
            </IonContent>

        </IonPage >
    );
}
export default Login;