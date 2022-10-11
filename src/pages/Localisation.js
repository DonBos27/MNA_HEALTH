import { Geolocation } from '@capacitor/geolocation';
import { useEffect, useState } from 'react';
import axios from 'axios'
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
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonItemDivider,
    IonGrid,
    IonRow,
    IonCol,
} from '@ionic/react';
// import * as axios from 'axios'
import Header from '../components/Header';
import logo from '../pictures/logo.svg';
import { cog, home, map, star } from 'ionicons/icons';
import TabBar from '../components/TabBar';
const Localisation = () => {
    // const mapRef = useRef();
    // let newMap = GoogleMap;

    // async function createMap() {
    //     if (!mapRef.current) return;
    //     newMap = await GoogleMap.create({
    //         id: 'my-cool-map',
    //         element: mapRef.current,
    //         apiKey: process.env.REACT_APP_YOUR_API_KEY_HERE,
    //         config: {
    //             center: {
    //                 lat: 33.6,
    //                 lng: -117.9
    //             },
    //             zoom: 8
    //         }
    //     })
    // }

    const [lat, setLat] = useState(-26.1586944);
    const [long, setLong] = useState(28.0920064);
    const [places, setPlaces] = useState([]);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [fake, setFake] = useState([]);

    const printCurrentPosition = async () => {
        const coordinates = await Geolocation.getCurrentPosition();
        console.log("Current position:", coordinates);
    }
    useEffect(() => {
        printCurrentPosition();
    }, []);
    const fetchNearbyPlaces = () => {
        // var axios = require('axios');
        var config = {
            method: 'get',
            url: `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${long}&radius=5000&type=gym&key=AIzaSyBkue_ZXAlaDnMZcISiXRkgn0NGDLCSxGY`,
            headers: {}
        };

        (axios(config)).then(function (response) {
            console.log(JSON.stringify(response.data));
        }).catch(function (error) {
            console.log(error);
        });
    }
    const placeView = (place, address, name) => {
        setAddress(address);
        setPlaces(place);
        setName(name);
    }
    useEffect(() => {
        fetchNearbyPlaces();
    }, []);

    return (
        <IonPage >
            <IonContent className='main'>
                <Header title='Finds Hospitals' />
            </IonContent>
            {/* <div className="component-wrapper">
                <capacitor-google-map ref={mapRef} style={{
                    display: 'inline-block',
                    width: 275,
                    height: 290,
                    marginTop: 0,
                    marginBottom: 50
                }}></capacitor-google-map>*/}

            {/* <button onClick={printCurrentPosition} style={{ marginBottom: "45px" }}>Create Map</button> */}
            {/* </div>  */}
            <TabBar />
        </IonPage>
    )
}
    ;
export default Localisation;




// AIzaSyBkue_ZXAlaDnMZcISiXRkgn0NGDLCSxGY