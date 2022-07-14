import React from "react";
import {StyleSheet, Text, View, Button, TextInput} from "react-native";

function LoginScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Регистрация</Text>
            <TextInput
                style={style.input}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="Ваш никнейм"
                keyboardType="numeric"
            />
            <TextInput
                style={style.input}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="Почта"
                keyboardType="numeric"
            />
            <TextInput
                style={style.input}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="Номер телефона"
                keyboardType="numeric"
            />
            <TextInput
                style={style.input}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="Придумайте пароль"
                keyboardType="numeric"
            />
            <Button title="Войти" onPress={() => navigation.navigate('home')}/>
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