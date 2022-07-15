import {Text, View, Image, StyleSheet, ScrollView} from "react-native";
import {useEffect, useState} from "react";
import {EventService} from "../services/EventService";
import {FeedService} from "../services/FeedService";


const news = [
    {
        date: '15 июля',
        title: 'Команда "кукумбер" выиграла в хакатоне "умный город"!',
        url: 'https://s9.stc.all.kpcdn.net/family/wp-content/uploads/2022/02/ogurzi_polza_i_vred_oblogka_960-960x540.jpg'
    },
    {
        date: '10 июля',
        title: 'Своей картиной "Спортсмены" Малевич хотел сказать, что болеет за Мурманскуюы футбольную команду - Север',
        url: 'https://aif-s3.aif.ru/images/013/650/d3a1813cbc20fbd6c7493361e9aa9f89.jpg'
    },
    {
        date: '2 июля', title: 'Скоро будет хакатон!!!',
        url: 'https://www.passwordrevelator.net/blog/wp-content/uploads/2019/11/smart-city-ville-connect%C3%A9.jpg'
    },
]

function FeedScreen({navigation}) {
    const [feeds, setFeeds] = useState([]);

    useEffect(() => {
        FeedService.allFeeds()
            .then(({data, status}) => {
                setFeeds(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);


    return (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <ScrollView>
                {feeds && feeds.map((feed) => (
                    <View key={feed.title} style={style.block}>
                        <Image style={style.photo}
                               source={{uri: feed.image_url}}/>
                        <View style={style.descr}>
                            <Text>{feed.date}</Text>
                            <Text style={style.news}>{feed.title}</Text>
                            <Text>{feed.description}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({
    block: {
        marginTop: 16,
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