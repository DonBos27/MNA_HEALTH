import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact,
  IonNav,
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabs,
  IonTabButton,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Slide from './pages/Slide';
import Home from './pages/Home';
import Localisation from './pages/Localisation';
import Setting from './pages/Setting';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Register from './pages/Register';
import PillsReminder from './pages/PillsReminder';
import AppointReminder from './pages/AppointReminder';
// import Medicalinfo from './pages/MedicalInfo';
// import SettingCard from './components/MedicalInfo';
import MedicalInfo from './components/MedicalInfo';
import Login from './pages/Login';
import AccountInfo from './pages/AccountInfo';

setupIonicReact();

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/slide">
          <Slide />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/localisation">
          <Localisation />
        </Route>
        <Route path="/setting">
          <Setting />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/pillsreminder">
          <PillsReminder />
        </Route>
        <Route path="/appointreminder">
          <AppointReminder />
        </Route>
        <Route path="/medicalinformation">
          <MedicalInfo />
        </Route>
        <Route path="/accountinformation">
          <AccountInfo/>
        </Route>
        <Route exact path="/">
          {/* <Redirect to="/register" /> */}
          <IonNav root={() => <Slide />}></IonNav>;
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
