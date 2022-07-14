 // экран регистрации:
// имя фамилия
// телефон
// придумайте пароль
// зарегистрироваться -> главный экран

import React from "react";
import {StyleSheet, Text, View, Button, TextInput} from "react-native";

function LoginScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Добро пожаловать!</Text>
            <TextInput
                style={style.input}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="Ваш телефон"
                keyboardType="numeric"
            />
            <TextInput
                style={style.input}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="Введите пароль"
                keyboardType="numeric"
            />
            <Button title="Войти" onPress={() => navigation.navigate('home')}/>
            <Button style={style.reg} title="Нет аккаунта? Зарегистрируйтесь!" onPress={() => navigation.navigate('reg')}/>
        </View>
    );
}

const style = StyleSheet.create({
    input: {
        height: 50,
        width: 200,
        margin: 12,
        paddingHorizontal: 15,
        borderWidth: 1,
        padding: 10,
    },

    reg: {
        backgroundColor: 'white',
    }
})

export default LoginScreen;