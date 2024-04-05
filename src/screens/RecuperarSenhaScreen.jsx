import { View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { useState } from "react";
import style from "../config/style";
import { getAuth, sendPasswordResetEmail } from "../config/firebase";

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
                    style={{ width: 200, height: 200, marginLeft: 50}}
                />
                <Text variant="headlineLarge">
                    Recupere sua senha via email
                </Text>
                <TextInput
                    label='Email'
                    placeholder="seumelhoremail@email.com"
                    value={email}
                    onChangeText={setEmail}
                    style={style.input}
                />
                <Button 
                    mode='outlined'
                    onPress={() => {
                        try{
                            sendPasswordResetEmail(auth, email)
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