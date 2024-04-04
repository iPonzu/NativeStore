import { View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { useState } from 'react'
import { signInWithEmailAndPassword } from '../config/firebase'
import auth from '../config/firebase'

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const FazerLogin = async () => {
        try{
            const usuario = await signInWithEmailAndPassword(auth,email, senha)
            console.log(usuario)
            navigation.navigate('Home')
        }catch(error){
            if(error.code === 'auth/user-not-found'){
                console.error('Usuário não encontrado')
            }if(error.code === 'auth/invalid-credential'){
                console.error('Credenciais incorretas')
            }else{
                console.error(error)
            }
        }
    }

    return(
        <View style={style.container}>
            <View style={style.innerContainer}>
                <Image
                    source={require('../../assets/pizza-icon.png')}
                    style={{ width: 200, height: 200, marginLeft: 50}}
                />
                <Text variant='headlineLarge' style={style.Center}>
                    8Pizza Store 
                </Text>
                <Text vauriant='headlineSmall' style={style.Center}>
                    Realize seu login
                </Text>
                <TextInput
                    label='Email'
                    value={email}
                    onChangeText={setEmail}
                    style={style.input}
                />
                <TextInput
                    label='Senha'
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                    style={style.input}
                />
                <Button onPress={() => navigation.navigate('RecuperarSenhaScreen')}>
                    Recuperar senha
                </Button>
                <Button onPress={() => navigation.navigate('CadastroScreen')}>
                    Realizar cadastro
                </Button>
                <Button
                    mode='outlined'
                    style={style.button} //TODO >>  marginTop: 10, maxWidth: 260, alignSelf: 'flex-end' <<
                    onPress={FazerLogin}
                />
            </View>
        </View>
    )
}