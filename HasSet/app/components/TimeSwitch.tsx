import {View, Text, Switch} from 'react-native'

export default function TimeSwitch(props : {type: string, time: string}){
    return(
        <View
        style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 50,
            marginLeft: 10,
            marginRight: 10
        }}>
            <Text
            style={{
            fontSize: 40,
            fontWeight: "bold",
            color: "rgb(255, 232, 197)",
            maxWidth: "100%",
            }}
            >{props.type}</Text>
            <Text
            style={{
                fontSize: 20,
                color: "rgb(255, 255, 255)",
                fontWeight:"bold"
            }}>{props.time}</Text>
            <Switch
            style={{
                transform:[{scale: 2}]
            }}/>
        </View>
    )
}