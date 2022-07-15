import {useEffect, useState} from 'react';
import {ScrollView, View} from "react-native";
import {Button, Text, Card, Dialog} from "@rneui/themed";
import {EventService} from "../services/EventService";


function EventsScreen({navigation}) {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        EventService.allEvents()
            .then(({data, status}) => {
                setEvents(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    function eventApply(props) {
        navigation.push('event_description', {
            eventParams: props
        });
    }

    return (
        <ScrollView>
            <View style={{flex: 1, marginBottom: 16}}>
                <View>
                    {events && events.map((props) => (
                        <Card key={props.id}>
                            <Card.Title>{props.sport}</Card.Title>
                            {props.image_url && <Card.Image source={{uri: props.image_url}}/>}
                            <Card.Divider/>
                            <Text>{props.place} {
                                new Date(props.date).toLocaleDateString('ru-RU')
                            }</Text>
                            { props.caption && <Text style={{marginBottom: 10}}>{props.caption}</Text>}
                            <Button
                                type="outline" title="Подробнее"
                                onPress={() => eventApply(props)}/>
                        </Card>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}

export default EventsScreen;