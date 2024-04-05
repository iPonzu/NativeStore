import { View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import style from "../config/style";
import { Image } from "expo-image";

export default function RecuperarSenhaScreen({ navigation }) {
    const [email, setEmail] = useState("");

    const auth =  getAuth()
        sendPasswordResetEmail(auth, email)
        .then(() => {
            console.log('Email enviado')
            window.localStorage.setItem('emailForSignIn', email)
        })
        .catch((error) => {
            console.log(error)
        })

    return(
        <View style={style.container}>
            <View style={style.innerContainer}>
                <Image
                    source={require('../../assets/password.png')}
                    style={{ width: 100, height: 100, alignSelf: 'center'}}
                />
                <Text 
                    variant="headlineLarge"
                    style={{
                        fontSize: 20,
                        alignSelf: 'center',
                        color: 'white',
                        fontFamily: 'Roboto'
                    
                    }}
                >
                    Recupere sua senha via email
                </Text>
                <TextInput
                    label='Email'
                    placeholder="seuemailmaislegal@email.com"
                    value={email}
                    onChangeText={setEmail}
                    style={style.input}
                />
                <Button 
                    mode='outlined'
                    style={{
                        marginRight: 70,
                        maxWidth: 200,
                        alignSelf: 'flex-end',
                        backgroundColor: 'black',
                    }}
                    onPress={() => {
                        try{
                            sendPasswordResetEmail(auth, email)
                            console.error('Email enviado')
                            navigation.navigate("LoginScreen")
                        }catch(error){
                            console.error(error)
                        }
                    }}
                    >
                        Recuperar senha 
                    </Button>
            </View>
        </View>
    )
}