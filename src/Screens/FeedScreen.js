import {Text, View, Image, StyleSheet, ScrollView} from "react-native";

function FeedScreen({navigation}) {
    return (
        <ScrollView>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>

            <View style={style.block}>
                <Image style={style.photo} source = {{uri: "https://s9.stc.all.kpcdn.net/family/wp-content/uploads/2022/02/ogurzi_polza_i_vred_oblogka_960-960x540.jpg"}}/>
                <View style={style.descr}>
                    <Text>15 июля</Text>
                    <Text style={style.news}>Команда "кокумбер" выйграла в хакатоне "умный город"!</Text>
                </View>
            </View>

            <View style={style.block}>
                <Image style={style.photo} source = {{uri: "https://upload.wikimedia.org/wikipedia/commons/2/2a/%D0%A1%D0%BF%D0%BE%D1%80%D1%82%D1%81%D0%BC%D0%B5%D0%BD%D1%8B._1930-1931._%D0%93%D0%A0%D0%9C.png"}}/>
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
    block: {
        marginTop: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        backgroundColor: '#F6F6F6',
        // marginHorizontal: 10
    },

    photo: {
        alignSelf: 'stretch',
        height: 200
    },

    descr: {
        padding: 10,
    },

    news: {
        fontSize: 15,
        fontWeight: '500'
    }

})

export default FeedScreen;