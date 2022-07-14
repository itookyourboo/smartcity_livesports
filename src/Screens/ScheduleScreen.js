import {color} from "@rneui/base";
import {Text, Button, Dialog} from "@rneui/themed";
import {View, StyleSheet, ScrollView} from "react-native";
import {useState} from "react";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus corporis cupiditate deleniti " +
    "dolores dolorum eos eum hic id illo labore magni, maiores minus molestiae nam nihil, obcaecati quibusdam quo sit?"

const compl = [
    {date: "7 августа", sport: 'Теннис'},
    {date: "15 августа", sport: 'Волейбол'},
]

// random color

function ScheduleScreen({navigation}) {
    const [openDialog, setOpenDialog] = useState({visible: false});

    function toggleDialog(props) {
        setOpenDialog({...openDialog, ...props, visible: !openDialog.visible});
    }

    return (
        <ScrollView>
            <View style={{flex: 1, marginBottom: 16}}>
                <Dialog
                    isVisible={openDialog.visible}
                    onBackdropPress={toggleDialog}>
                    <Dialog.Title title={openDialog.sport || 'Волейбол'}/>
                    <Text style={{marginBottom: 10}}> {openDialog.date || '15 июля'} </Text>
                    <Text> {lorem} </Text>
                </Dialog>
                {
                    compl.map(({date, sport}) => (
                        <View key={sport} style={style.block}>
                            <View style={style.date}>
                                <Text style={style.num}>{date}</Text>
                            </View>
                            <View style={style.more}>
                                <Text style={style.desc}>{sport}</Text>
                                <Button type="outline" style={style.btn} title="Подробнее"
                                        onPress={() => toggleDialog({date, sport})}/>
                            </View>
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