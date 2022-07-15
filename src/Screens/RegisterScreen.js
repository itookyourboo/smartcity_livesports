import React, {useRef, useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    Platform,
    KeyboardAvoidingView
} from "react-native";
import Button from "../components/Button";
import {Input} from "@rneui/themed";
import {AuthService} from "../services/AuthService";
import TokenManager from "../services/TokenManager";

function RegisterScreen({navigation}) {

    const [fields, setFields] = useState({
        email: "", username: "", password: ""
    });

    const [data, setData] = useState();

    function register() {
        AuthService.register(fields.username, fields.email, fields.password)
            .then(res => {
                navigation.navigate('home');
            })
            .catch(err => {
                setData(err.message);
            });
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
                        placeholder="Логин"
                        onChangeText={(text) => {
                            setFields({...fields, username: text})
                        }}
                    />
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
                    <View style={{width: '100%'}}>
                        <Button title="Зарегистрироваться" onPress={register}/>
                        {data && <Text>{data}</Text>}
                    </View>
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

export default RegisterScreen;