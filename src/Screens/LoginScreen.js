import React, {useState} from "react";
import {StyleSheet, Keyboard, TouchableWithoutFeedback, Platform, KeyboardAvoidingView, View, Text} from "react-native";
import {Button, Input} from "@rneui/themed";
import {AuthService} from "../services/AuthService";

function LoginScreen({navigation}) {

    const [fields, setFields] = useState({
        email: "", username: "", password: ""
    });

    const [data, setData] = useState();

    function login() {
        AuthService.authenticate(fields.email, fields.password)
            .then(res => {
                navigation.replace('home');
            })
            .catch(err => {
                setData(err.message);
            });
    }

    function register() {
        navigation.navigate('reg');
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={style.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{flex: 1, padding: 16, alignItems: 'center', justifyContent: 'center'}}>
                    <Input
                        style={style.input}
                        placeholder="Почта"
                        keyboardType="email-address"
                        onChangeText={(text) => {
                            setFields({...fields, email: text})
                        }}
                    />
                    <Input
                        style={style.input}
                        placeholder="Пароль"
                        secureTextEntry={true}
                        autoCapitalize='none'
                        onChangeText={(text) => {
                            setFields({...fields, password: text})
                        }}
                    />
                    <View>
                        <Button style={{marginBottom: 10}}
                                title="Войти"
                                onPress={login}/>
                        <Button type="outline"
                                title="Регистрация"
                                onPress={register}/>
                    </View>
                    {data && <Text>{data}</Text>}
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
        // height: 50,
        // width: 200,
        // margin: 12,
        // paddingHorizontal: 15,
        // borderWidth: 1,
        // padding: 10,
    },

    reg: {
        backgroundColor: 'white',
    }
})

export default LoginScreen;