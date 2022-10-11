import { useState } from 'react'
import { IonPage, IonContent, IonNavLink, IonItemDivider, IonFooter, IonToolbar, IonTitle, IonIcon } from '@ionic/react'
import Logo from "../pictures/logo.svg";
import './Login.css';
import Register from './Register';
import MedicalAppImg from '../pictures/medical-app.gif';
import MedicalInfo from '../pictures/health.gif';
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
            <IonContent fullscreen className="loginContent">
                <div className="headContainer" >
                    {/* <img src={MedicalAppImg} alt="logo" style={{borderRadius:"50%", width:"100px",marginTop:"120px", marginLeft:"-35px"}} /> */}
                </div>
                {/* <img src={MedicalInfo} alt="logo" style={{width:"100px", marginLeft:"190px",borderRadius:"50%"}} /> */}
                {/* <img src={MedicalAppImg} style={{borderRadius:"50%", width:"80px",marginTop:"15px" }}/> */}
                <img src={Logo} alt="logo" className="logo" />
                <div className="loginInput">
                    <input
                        type="email"
                        placeholder="E-mail"
                        // className="input"
                        id="LoginEmail"
                    ></input>
                    <input
                        type="password"
                        placeholder="Password"
                        // className="input"
                        id="LoginPassword"
                    ></input>
                    <IonNavLink routerDirection="forward" component={() => <Register />}>
                        <button type="submit" className="Login">Login</button>
                    </IonNavLink>
                </div>
                <IonIcon name="logo-facebook" ></IonIcon>
            </IonContent>

        </IonPage >
    );
}
export default Login;