import {Text, View, Image, StyleSheet, ScrollView} from "react-native";

function NotificationScreen({navigation}) {
    return (
        <ScrollView>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>

            <View style={style.block}>
                <View style={style.descr}>
                    <Text>15 июля</Text>
                    <Text style={style.news}>Команда "кокумбер" выйграла в хакатоне "умный город"!</Text>
                </View>
            </View>

            <View style={style.block}>
                <View style={style.descr}>
                    <Text>2 мая</Text>
                    <Text style={style.news}>Своей картиной "Спортсмены" Малевич хотел сказать, что болеет за Мурманскуюы футбольную команду - Север</Text>
                </View>
            </View>
        </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({
})

export default NotificationScreen;