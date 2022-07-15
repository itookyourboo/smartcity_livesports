import {useState, createRef, useEffect} from 'react';
import {ScrollView, View, LogBox, KeyboardAvoidingView} from "react-native";
import {Button, Text, Card, Dialog, Input, Image} from "@rneui/themed";
import {EventService} from "../services/EventService";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus corporis cupiditate deleniti " +
    "dolores dolorum eos eum hic id illo labore magni, maiores minus molestiae nam nihil, obcaecati quibusdam quo sit?"

function EventDescriptionScreen({navigation, route}) {
    const {eventParams} = route.params;

    const [event, setEvent] = useState();

    const teamName = createRef();
    const teammates = createRef();

    useEffect(() => {
        EventService.fullEvent(eventParams.id)
            .then(({data, status}) => {
                setEvent(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);


    function applyEvent() {
        navigation.popToTop();
        navigation.navigate('event_apply', {
            event: event
        });
    }

    function renderEvent(event) {
        let date = new Date(event.date);
        date = date.toLocaleDateString('ru-RU');
        return (
            <View>
                {event.image_url && <Card.Image style={{marginBottom: 8}} source={{uri: event.image_url}} />}
                <Text h4={true}>Где и когда</Text>
                <Text>{event.place}, {date}</Text>
                {event.description && <View>
                    <Text h4={true}>Описание</Text>
                    <Text>{event.description}</Text>
                </View>}
                <Text h4={true}>Размер команды</Text>
                <Text>{event.team_size} человек(а)</Text>
                {event.stream_url && <Text h4={true}>Прямая трансляция</Text>}
                {event.stream_url && <Text style={{color: 'blue'}} onPress={
                    () => Linking.openUrl(event.stream_url)
                }>{ event.stream_url }</Text>}
            </View>
        )
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView style={{flex: 1, padding: 16, flexDirection: 'column',
                alignItems: 'center', justifyItems: 'space-between', justifyContent: 'space-between'}}>
                {event && renderEvent(event)}
                <View style={{ marginTop: 16, width: '100%'}}>
                    <Button
                        title="Подать заявку"
                        onPress={applyEvent}/>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

export default EventDescriptionScreen;