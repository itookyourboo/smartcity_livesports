import {Button, Text, View} from "react-native";


const btns = [
    {title: "Вход и Регистрация", screen: 'login'},
    {title: "Календарь мероприятий", screen: 'events'},
    {title: "График соревнований", screen: 'schedule'},
    {title: "Лента новостей", screen: 'feed'},
]

function HomeScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <View style={{marginTop: 10}}>
                {
                    btns.map(({title, screen}) => (
                        <View key={screen} style={{marginTop: 5}}>
                            <Button
                                title={title}
                                onPress={() => navigation.push(screen)}/>
                        </View>
                    ))
                }
            </View>
        </View>
    );
}

export default HomeScreen;