import {Keyboard, KeyboardAvoidingView, Platform, TextInput, TouchableWithoutFeedback, View} from "react-native";
import React, {useState} from "react";
import {Button, Input, Text} from "@rneui/themed";
import {EventService} from "../services/EventService";

function EventApplyScreen({navigation, route}) {
    const {event} = route.params;
    const [fields, setFields] = useState({
        memberName: "", members: ""
    });

    function applyMember() {
        if (event.team_size === 1) {
            EventService.applyTeam(event.id, m)
        }
    }

    return (
        <View style={{flex: 1, padding: 16, alignItems: 'center', justifyContent: 'center'}}>
            {event.team_size === 1 ? (
                <View style={{width: '100%'}}>
                    <Text>Введите Фамилию, Имя и Отчество</Text>
                    <Input
                        placeholder="Иванов Иван Иванович"
                        onChangeText={(text) => {
                            setFields({...fields, memberName: text})
                        }}
                    />
                </View>
            ) : (
                <View style={{ width: '100%' }}>
                    <Text>Введите название команды</Text>
                    <Input
                        placeholder="Динамо"
                        onChangeText={(text) => {
                            setFields({...fields, memberName: text})
                        }}/>
                    <Text style={{ marginBottom: 8}}>Введите почты участников ({event.team_size}){"\n"}
                        Каждую на новой строке</Text>
                    <Input
                        style={{ textAlignVertical: 'top'}}
                        numberOfLines={event.team_size}
                        placeholder={[...Array(event.team_size).keys()].map(key => (
                            `email${key + 1}@yandex.ru`
                        )).join('\n')}
                        onChangeText={(text) => {
                            setFields({...fields, members: text})
                        }}
                        multiline
                    />
                </View>
            )}
            <View style={{ width: '100%' }} >
                <Button title="Зарегистрироваться"
                onPress={applyMember}/>
            </View>
        </View>
    );
}

export default EventApplyScreen;