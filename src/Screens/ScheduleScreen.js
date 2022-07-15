import { color } from "@rneui/base";
import {Text, View, StyleSheet, Button} from "react-native";

const compl = [
    {date: "7 августа", sport: 'Теннис'},
    {date: "15 августа", sport: 'Волейбол'},
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
                <View style={style.more}>
                    <Text style={style.desc}>{sport}</Text>
                    <Button type="outline" style={style.btn} title="Подробнее" onPress={() => navigation.navigate('notification')}/>
                </View>
            </View>
            ))
            }
        </View>
    );
}

const style = StyleSheet.create({
    block: {
        // backgroundColor: '#7AC1F8',
        marginTop: 20,
        alignSelf: 'stretch',
        padding: 15,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        backgroundColor: '#F6F6F6',
    },

    num: {
        fontSize: 17,
        fontWeight: '400',
        marginBottom: 5,
    },

    desc: {
        fontSize: 23,
        fontWeight: '500',
    },

    more: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})

export default ScheduleScreen;