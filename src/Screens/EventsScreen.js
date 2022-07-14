import {ScrollView, View} from "react-native";
import {Button, Text, Card} from "@rneui/themed";


const events = [
    {title: 'Волейбол'},
    {title: 'Настольный теннис'},
    {title: 'Баскетбол'},
    {title: 'Бадминтон'},
    {title: 'Многоборье ГТО'},
    {title: 'Шахматы'},
    {title: 'Плавание'},
]

function EventsScreen({navigation}) {
    return (
        <ScrollView>
            <View style={{flex: 1, marginBottom: 16}}>
                <View>
                    {events.map((props) => (
                        <Card key={props.title}>
                            <Card.Title>{props.title || 'Title'}</Card.Title>
                            <Card.Divider/>
                            <Text style={{marginBottom: 10}}>{props.description || 'Описание мероприятия'}</Text>
                            <Button type="outline" title="Подробнее"></Button>
                        </Card>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}

export default EventsScreen;