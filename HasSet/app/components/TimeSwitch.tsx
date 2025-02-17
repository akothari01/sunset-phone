import {View, Text, Switch} from 'react-native'

export default function TimeSwitch(){
    return(
        <View
        style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text
            style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "rgb(149, 151, 216)"
            }}
            >Sunset Time</Text>
            <Text>time</Text>
            <Switch/>
        </View>
    )
}