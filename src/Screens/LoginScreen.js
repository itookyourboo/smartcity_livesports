import React from "react";
import {StyleSheet,Keyboard, TouchableWithoutFeedback, Platform, KeyboardAvoidingView, Text, View, Button, TextInput} from "react-native";

function LoginScreen({navigation}) {
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={style.container}
        >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Добро пожаловать!</Text>
            <TextInput
                style={style.input}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="Ваш телефон"
                keyboardType="phone-pad"
            />
            <TextInput
                style={style.input}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="Введите"
                secureTextEntry={true}
                autoCapitalize='none'
            />
            <Button title="Войти" onPress={() => navigation.navigate('home')}/>
            <Button style={style.reg} title="Нет аккаунта? Зарегистрируйтесь!" onPress={() => navigation.navigate('reg')}/>
        </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },

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