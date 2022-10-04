// import { Geolocation } from '@capacitor/geolocation';
// import {
//         IonPage,
//         IonHeader,
//         IonToolbar,
//         IonTitle,
//         IonContent,
//     } from '@ionic/react';


// const Localisation = () => {
//     const printCurrentPosition = async () => {
//         const coordinates = await Geolocation.getCurrentPosition();
//         console.log('Current position:', coordinates);
//     };
//     return (
//         <IonPage><button onClick={printCurrentPosition}>hello</button></IonPage>
//     )
// }
// export default Localisation;


import { GoogleMap } from '@capacitor/google-maps';
import { useRef } from 'react';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
} from '@ionic/react';
import Header from '../components/Header';
import { cog, home, map } from 'ionicons/icons';
const Localisation = () => {
    const mapRef = useRef();
    let newMap = GoogleMap;

    async function createMap() {
        if (!mapRef.current) return;
        newMap = await GoogleMap.create({
            id: 'my-cool-map',
            element: mapRef.current,
            apiKey: process.env.REACT_APP_YOUR_API_KEY_HERE,
            config: {
                center: {
                    lat: 33.6,
                    lng: -117.9
                },
                zoom: 8
            }
        })
    }

    return (
        <IonPage >
            <IonContent className='main'>
                <Header title='Finds Hospitals' />
            </IonContent>
            <div className="component-wrapper">
                <capacitor-google-map ref={mapRef} style={{
                    display: 'inline-block',
                    width: 275,
                    height: 290,
                    marginTop: 0,
                    marginBottom: 50
                }}></capacitor-google-map>

                <button onClick={createMap} style={{ marginBottom: "45px" }}>Create Map</button>
            </div>
            <IonTabBar slot="bottom">
                <IonTabButton tab="home" href="/home">
                    <IonIcon icon={home} />
                    <IonLabel>Home</IonLabel>
                </IonTabButton>
                <IonTabButton tab="localisation" href="/localisation">
                    <IonIcon icon={map} />
                    <IonLabel>Map</IonLabel>
                </IonTabButton>
                <IonTabButton tab="setting" href="/setting">
                    <IonIcon icon={cog} />
                    <IonLabel>Setting</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonPage>
    )
}
    ;
export default Localisation;




// AIzaSyBkue_ZXAlaDnMZcISiXRkgn0NGDLCSxGY