import {useState} from 'react';
import {ScrollView, View, LogBox} from "react-native";
import {Button, Text, Card, Dialog} from "@rneui/themed";


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
    const [openDialog, setOpenDialog] = useState({visible: false});

    function toggleDialog(props) {
        setOpenDialog({...openDialog, ...props, visible: !openDialog.visible});
    }

    function eventApply() {
        navigation.push('event_apply', {
            title: openDialog.title,
            description: openDialog.description
        });
        setOpenDialog({...openDialog, visible: false});
    }

    return (
        <ScrollView>
            <View style={{flex: 1, marginBottom: 16}}>
                <Dialog
                    isVisible={openDialog.visible}
                    onBackdropPress={toggleDialog}>
                    <Dialog.Title title={openDialog.title || 'Мероприятие'}/>
                    <Text> {openDialog.description || 'Описание мероприятия'} </Text>
                    <Dialog.Actions>
                        <Dialog.Button title="Подать заявку" onPress={eventApply}/>
                        <Dialog.Button title="Закрыть" onPress={toggleDialog}/>
                    </Dialog.Actions>
                </Dialog>

                <View>
                    {events.map((props) => (
                        <Card key={props.title}>
                            <Card.Title>{props.title || 'Мероприятие'}</Card.Title>
                            <Card.Divider/>
                            <Text>{props.date || '30 июля 2022'}</Text>
                            <Text style={{marginBottom: 10}}>{props.description || 'Описание мероприятия'}</Text>
                            <Button
                                type="outline" title="Подробнее"
                                onPress={() => toggleDialog(props)}/>
                        </Card>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}

export default EventsScreen;