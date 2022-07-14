import { color } from "@rneui/base";
import {Text, View, StyleSheet} from "react-native";

const compl = [
    {date: "7 августа", sport: 'теннис'},
    {date: "15 августа", sport: 'волейбол'},
]

// random color

function ScheduleScreen({navigation}) {
    return (
        <View style={{alignItems: 'flex-start', justifyContent: 'center'}}>
            {
            compl.map(({date, sport}) => (
            <View style={style.block}> 
                <View style={style.date}>
                    <Text style={style.num}>{date}</Text>
                </View>
                <View>
                    <Text style={style.desc}>{sport}</Text>
                </View>
            </View>
            ))
            }
        </View>
    );
}

const style = StyleSheet.create({
    block: {
        backgroundColor: '#7AC1F8',
        marginTop: 20,
        alignSelf: 'stretch',
        padding: 15,
        marginHorizontal: 10,
    },
    num: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 10,
    },

    desc: {
        fontSize: 20,
        fontWeight: '400',
        color: 'white'
    }
})

export default ScheduleScreen;