import { Text, View, Switch, ImageBackground, Linking } from "react-native";
import {useState, useEffect} from 'react';

import * as Location from 'expo-location';

import TimeSwitch from "./components/TimeSwitch";


export default function Index() {

  const [location, setLocation] = useState<Location.LocationObject | null >(null);
  const [locationDetails, setLocationDetails] = useState<Location.LocationGeocodedAddress[] | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

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
    console.log(JSON.stringify(locationAddress))
    }
    getCurrentLocation()
  }, [new Date()])

  useEffect(()=>{
    if(location){
      fetch(`https://api.sunrisesunset.io/json?lat=${location.coords.latitude}&lng=${location.coords.longitude}`)
      .then(response =>(response.json()))
      .then(data => {
        console.log(data)
        console.log('here')
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
        gap: 60
        }}>
          <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <TimeSwitch/>
            <TimeSwitch/>
            <TimeSwitch/>
          </View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
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
