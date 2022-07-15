import {Keyboard, KeyboardAvoidingView, Platform, TextInput, TouchableWithoutFeedback, View} from "react-native";
import React, {useState} from "react";
import {Input, Text} from "@rneui/themed";
import Button from "../components/Button";
import {EventService} from "../services/EventService";
import {store} from "../store";

function EventApplyScreen({navigation, route}) {
    const {event} = route.params;
    const [fields, setFields] = useState({
        memberName: "", members: ""
    });

    function applyMember() {
        let members = [store.profile.email]
        if (event.team_size !== 1)
            members = fields.members.split(/\r?\n/).map(x => x.trim());
        EventService.applyTeam(event, fields.memberName.trim(), members)
            .then(res => {
                navigation.popToTop();
                navigation.navigate('schedule');
            })
            .catch(err => {
                console.log(err);
            })
    }

    function hasApplied() {
        for (const ev of store.events)
            if (ev.event.id === event.id)
                return ev.event;
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
                <View style={{width: '100%'}}>
                    <Text>Введите название команды</Text>
                    <Input
                        placeholder="Динамо"
                        onChangeText={(text) => {
                            setFields({...fields, memberName: text})
                        }}/>
                    <Text style={{marginBottom: 8}}>Введите почты участников ({event.team_size}){"\n"}
                        Каждую на новой строке</Text>
                    <Input
                        style={{textAlignVertical: 'top'}}
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
            <View style={{width: '100%'}}>
                <Button title="Зарегистрироваться"
                        onPress={applyMember}/>
            </View>
        </View>
    );
}

export default EventApplyScreen;