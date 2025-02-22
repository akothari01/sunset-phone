import {View, Text, Switch} from 'react-native'

export default function TimeSwitch(props : {type: string, time: string, value: boolean, toggle: ()=>void}){
    return(
        <View
        style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 50,
            minWidth: "100%"
        }}>
            <Text
            style={{
            fontSize: 40,
            fontWeight: 900,
            color: "rgb(255, 236, 207)",
            }}
            >{props.type}</Text>
            <Text
            style={{
                fontSize: 20,
                color: "rgb(255, 255, 255)",
                fontWeight:600,
            }}>{props.time}</Text>
            <Switch
            style={{
                transform:[{scale: 2}],

            }}
            value={props.value}
            onValueChange={props.toggle}
            trackColor={{false: '#767577', true: '#81b0f0'}}/>
        </View>
    )
}