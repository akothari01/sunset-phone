import { Text, View, Button } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 60,
        backgroundColor: "rgb(252, 188, 159)"
      }}
    >
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
        }}
      >Sunset Time: NA</Text>
    </View>
  );
}
