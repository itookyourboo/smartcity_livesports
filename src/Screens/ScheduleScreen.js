import {color} from "@rneui/base";
import {Text, Dialog} from "@rneui/themed";
import Button from "../components/Button";
import {View, StyleSheet, ScrollView} from "react-native";
import {useEffect, useState} from "react";
import {store} from "../store"
import useForceUpdate from "../services/useForceUpdate";

function ScheduleScreen({navigation}) {
    const [openDialog, setOpenDialog] = useState({visible: false});

    function toggleDialog(props) {
        setOpenDialog({...openDialog, ...props, visible: !openDialog.visible});
    }

    function eventDescription(event) {
        navigation.push('event_description', { eventParams: event });
    }

    const forceUpdate = useForceUpdate();

    useEffect(() => {
        const intervalId = setInterval(forceUpdate, 5000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <ScrollView>
            <View style={{flex: 1, marginBottom: 16}}>
                {
                    store.teams.map(({name, members, event}) => (
                        <View key={event.id} style={style.block}>
                            <View style={style.more}>
                                <Text style={style.num}>{
                                    new Date(event.date).toLocaleDateString('ru-RU')
                                }</Text>
                                <Text>{event.place}</Text>
                            </View>
                            <View style={style.more}>
                                <Text style={style.desc}>{event.sport}</Text>
                                <Button type="outline" style={style.btn} title="Подробнее"
                                        onPress={() => eventDescription(event)}/>
                            </View>
                            <Text> {name} </Text>
                        </View>
                    ))
                }
            </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    block: {
        // backgroundColor: '#7AC1F8',
        marginTop: 16,
        alignSelf: 'stretch',
        padding: 15,
        marginHorizontal: 10,
        borderRadius: 8,
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