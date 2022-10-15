import { Geolocation } from '@capacitor/geolocation';
import { useEffect, useState } from 'react';
import axios from 'axios'
import {
    IonPage,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonItemDivider,

} from '@ionic/react';
import Header from '../components/Header';
import TabBar from '../components/TabBar';
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
const Localisation = () => {

    const [lat, setLat] = useState();
    const [long, setLong] = useState();
    const [places, setPlaces] = useState([]);

    const printCurrentPosition = async () => {
        const coordinates = await Geolocation.getCurrentPosition();
        // console.log("Current position:", coordinates);
        // console.log(coordinates.coords.latitude)
        setLat(coordinates.coords.latitude);
        setLong(coordinates.coords.longitude);
        console.log(lat);
        console.log(long)
    }
    useEffect(() => {
        printCurrentPosition();
        fetchNearbyPlaces()

    }, []);

    useEffect(() => {
        fetchNearbyPlaces()
    }, [lat, long]);
    const fetchNearbyPlaces = () => {
        // var axios = require('axios');
        var config = {
            method: 'get',
            url: `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${long}&radius=5000&type=hospital&key=AIzaSyBkue_ZXAlaDnMZcISiXRkgn0NGDLCSxGY`,
            headers: {}
        };

        (axios(config)).then(function (response) {
            console.log(response.data.results);
            setPlaces(response.data.results);

        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <IonPage >
            <IonContent className='main'>
                <Header title='Finds Hospitals' />
                <div style={{ marginTop: "150px" }}>
                    {/* <GooglePlacesAutocomplete
                        selectProps={{
                            placeholder: 'Search...',
                            onChange: (val) => {
                                console.log(val);
                                fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?place_id=${val.value.place_id}&key=AIzaSyBkue_ZXAlaDnMZcISiXRkgn0NGDLCSxGY`)
                                    .then((res) => console.log(res.data))
                                var config = {
                                    method: 'get',
                                    url: `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?place_id=${val.value.place_id}&key=AIzaSyBkue_ZXAlaDnMZcISiXRkgn0NGDLCSxGY`,
                                    headers: {}
                                };

                                (axios(config)).then(function (response) {
                                    console.log(response.data.results.geometry.location);
                                    setPlaces(response.data.results);
                                    setLat(response.data.results.geometry.location.lat);
                                    setLong(response.data.results.geometry.location.lng);
                                    // setLong(coordinates.coords.longitude);

                                }).catch(function (error) {
                                    console.log(error);
                                });
                            }
                        }}
                    apiKey="AIzaSyBkue_ZXAlaDnMZcISiXRkgn0NGDLCSxGY"
                    /> */}
                    {places.length > 0 && places.map((place, index) => (
                        <IonCard key={index} >
                            <IonCardHeader>
                                <img style={place.photos && { height: "25vh", width: "100%" }}
                                    src={
                                        place.photos &&
                                        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${place.photos.map(
                                            (photo) => photo.photo_reference
                                        )}&key=AIzaSyBkue_ZXAlaDnMZcISiXRkgn0NGDLCSxGY`} alt="No Picture Found" 
                                    // src={place.icon} alt="No Picture Found"
                                    />
                            </IonCardHeader>
                            {/* <hr style={{backgroundColor:"black", width:"88%", marginLeft:"15px"}}></hr> */}
                            <IonItemDivider style={{ backgroundColor: "" }}>
                                <IonCardContent>
                                    <h2 style={{ color: "black", fontWeight: "bold", marginBottom: "10px" }}>{place.name}</h2>
                                    <h4 style={{ color: "black", marginBottom: "2px" }}>
                                        {place.vicinity}
                                    </h4>
                                    <hr style={{ backgroundColor: "black", width: "100%" }}></hr>
                                    <div>
                                        {place.opening_hours && place.opening_hours.open_now === true ? <h2 style={{ color: "green" }}>Open</h2> : <h2 style={{ color: "red" }}>Closed</h2>}
                                    </div>
                                </IonCardContent>
                            </IonItemDivider>
                        </IonCard>
                    ))}
                </div>
            </IonContent>
            <TabBar />
        </IonPage>
    )
}
    ;
export default Localisation;




// AIzaSyBkue_ZXAlaDnMZcISiXRkgn0NGDLCSxGY