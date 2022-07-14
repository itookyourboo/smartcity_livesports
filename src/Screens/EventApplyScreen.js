import {useState, createRef} from 'react';
import {ScrollView, View, LogBox, KeyboardAvoidingView} from "react-native";
import {Button, Text, Card, Dialog, Input} from "@rneui/themed";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus corporis cupiditate deleniti " +
    "dolores dolorum eos eum hic id illo labore magni, maiores minus molestiae nam nihil, obcaecati quibusdam quo sit?"

function EventApplyScreen({navigation, route}) {

    const {description, date} = route.params;
    const teamName = createRef();
    const teammates = createRef();

    function applyEvent() {
        navigation.popToTop();
        navigation.navigate('schedule');
    }

    return (
        <KeyboardAvoidingView style={{flex: 1, padding: 16, alignItems: 'center'}}>
            <Text style={{marginBottom: 10}} h4={true}> {date || '30 июля 2022'}</Text>
            <Text style={{marginBottom: 10}}> {description || lorem} </Text>
            <Text style={{marginBottom: 10}} h4={true}>Регистрация команды</Text>
            <Input ref={teamName} placeholder="Название команды"/>
            <Input ref={teammates} placeholder="Участники"/>
            <Button
                style={{alignSelf: 'flex-end'}}
                title="Подать заявку"
                onPress={applyEvent}
            />
        </KeyboardAvoidingView>
    );
}

export default EventApplyScreen;