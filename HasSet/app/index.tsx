import { Text, View, Switch, ImageBackground, Linking } from "react-native";
import {useState, useEffect} from 'react';

import * as Location from 'expo-location';

import TimeSwitch from "./components/TimeSwitch";


export default function Index() {

  type SunTimes = {
    results: {
      date: string;
      dawn: string;
      day_length: string;
      dusk: string;
      first_light: string;
      golden_hour: string;
      last_light: string;
      solar_noon: string;
      sunrise: string;
      sunset: string;
      timezone: string;
      utc_offset: number;
    };
    status: string;
  };

  const [location, setLocation] = useState<Location.LocationObject | null >(null);
  const [locationDetails, setLocationDetails] = useState<Location.LocationGeocodedAddress[] | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [sunTimes, setSunTimes] = useState<SunTimes | null>(null);

  useEffect(() => {async function getCurrentLocation(){
    let {status} = await Location.requestForegroundPermissionsAsync();
    if(status !== 'granted'){
      setErrorMsg('Permission to access location was denied');
      return;
    }
    let location = await Location.getCurrentPositionAsync()
    let locationAddress = await Location.reverseGeocodeAsync({latitude: location.coords.latitude, longitude: location.coords.longitude})
    setLocation(location)
    setLocationDetails(locationAddress)
    }
    getCurrentLocation()
  }, [new Date()])

  useEffect(()=>{
    if(location){
      fetch(`https://api.sunrisesunset.io/json?lat=${location.coords.latitude}&lng=${location.coords.longitude}`)
      .then(response =>(response.json()))
      .then(data => {
        setSunTimes(sunTimes)
      })
    }
  },[location])

  return (
      <ImageBackground source={require("@/assets/images/sunset.jpg")} style={{
        width: '100%', 
        height: '100%',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 100
        }}>
          <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxHeight: 200
          }}>
            <TimeSwitch type="Sunrise" time="5:54:56 AM"/>
            <TimeSwitch type="Noon    " time="5:54:56 AM"/>
            <TimeSwitch type="Sunset " time="5:54:56 AM"/>
          </View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "rgb(212, 197, 247)"
            }}
          >Current Location: {locationDetails ? locationDetails[0].street + ', ' + locationDetails[0].city + ', ' + locationDetails[0].country : "fetching"}</Text>
          <Text
            style={{
              color: "white",
              position: "absolute",
              bottom: 0
            }}
            onPress={() => Linking.openURL('https://sunrisesunset.io/api/')}
          >Powered by SunriseSunset.io</Text>
      </ImageBackground>
  );
}
