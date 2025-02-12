import { Text, View, Button, ImageBackground } from "react-native";

export default function Index() {
  return (
      <ImageBackground source={require("@/assets/images/sunset.jpg")} style={{
        width: '100%', 
        height: '100%',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 60
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
          }}
        >Current Location: NA</Text>
        <Button
          title="Get Location"
          onPress={() => {
            console.log("Get Location");
          }}
        />
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "rgb(149, 151, 216)"
          }}
        >Sunset Time: NA</Text>
      </ImageBackground>
  );
}
