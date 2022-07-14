import React from "react";
import {StyleSheet, Text, View, Button, TextInput, Keyboard, TouchableWithoutFeedback, Platform, KeyboardAvoidingView} from "react-native";

function LoginScreen({navigation}) {
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={style.container}
        >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Регистрация</Text>
            <TextInput
                style={style.input}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="Ваш никнейм"
                // keyboardType="numeric"
            />
            <TextInput
                style={style.input}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="Почта"
                keyboardType="email-address"
            />
            <TextInput
                style={style.input}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="Номер телефона"
                keyboardType="phone-pad"
            />
            <TextInput
                style={style.input}
                placeholder="Придумайте пароль"
                secureTextEntry={true}
                autoCapitalize='none'
            />
            <Button title="Войти" onPress={() => navigation.navigate('home')}/>
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