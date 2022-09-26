import { GoogleMap } from '@capacitor/google-maps';
import { useRef } from 'react';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
} from '@ionic/react';
import Header from '../components/Header';

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

                <button onClick={createMap} style={{ marginBottom: "25px" }}>Create Map</button>
            </div>
        </IonPage>
    )
}
    ;
export default Localisation; 