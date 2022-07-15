import React, {useState} from "react";
import {StyleSheet, Text, View, Button, ScrollView} from "react-native";

const defaultNews = [
    {title: 'Волейбол', desc: 'На направление Волейбол зарегистрировалось +3 команды!'},
    {title: 'Шахматы', desc: 'Установилось четкое время начала соревнований'},
    {title: 'Баскетбол', desc: 'Напоминание! В связи с эпидемиологической ситуацией болельщиков брать с собой на игру нельзя'},
    {title: 'Волейбол', desc: 'На направление Баскетбол зарегистрировалось +3 команды!'},
]

function NotificationScreen({navigation}) {

    const [news, setNews] = useState(defaultNews);

    function read(index) {
        setNews(news.filter((feed) => feed !== news[index]));
    }

    return (
        <ScrollView>
        <View style={{alignItems: 'center', justifyContent: 'center', marginBottom: 16}}>
            {
                news.map(({title, desc}, index) => (
                    <View key={index} style={style.massage}>
                        <Text style={style.sport}>
                            {title}
                        </Text>
                        <Text style={style.description}>
                            {desc}
                        </Text>
                        <View style={style.btn}>
                            <Button title="ОК"
                            onPress={() => read(index)}/>
                        </View>
                    </View>
                ))
            }
        </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    massage: {
        marginTop: 20,
        alignSelf: 'stretch',
        padding: 16,
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

    // borderLeftWidth: 5,
    // borderLeftColor: 'red'

    sport: {
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 5,
    },

    description: {
        fontSize: 18,
        fontWeight: '500',
    },

    btn: {
        alignSelf: 'flex-start',
        marginTop: 5,
        width: '100%'
    }
})

export default NotificationScreen;