import { View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { useState } from 'react'
import { Image } from 'expo-image'
import { signInWithEmailAndPassword } from 'firebase/auth'
import auth from '../config/firebase'
import style from '../config/style'

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const FazerLogin = async () => {
        try {
           const usuario = await signInWithEmailAndPassword(auth, email, senha) 
           console.log(usuario)
           navigation.navigate("ProdutoScreen")
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <View style={style.container}>
            <View style={style.innerContainer}>
                <Image
                    source={require('../../assets/pizza-icon.png')}
                    style={{ width: 200, height: 200, marginLeft: 60}}
                />
                <Text variant='headlineLarge' style={style.center}>
                    8Pizza Store 
                </Text>
                <Text vauriant='headlineSmall' style={style.center}>
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
                <Button 
                    mode='outlined'
                    style={{
                        marginRight: 70,
                        maxWidth: 200,
                        alignSelf: 'flex-end',
                        backgroundColor: 'black',
                    }}
                    onPress={() => navigation.navigate('RecuperarSenhaScreen')}
                >
                    Recuperar senha
                </Button>
                <Button 
                    mode='outlined'
                    style={{
                        marginRight: 67,
                        marginTop: 3,
                        maxWidth: 200,
                        alignSelf: 'flex-end',
                        backgroundColor: 'black',               
                    }}
                    onPress={() => navigation.navigate('CadastroScreen')}
                >
                    Realizar cadastro
                </Button>
                <Button
                    mode='outlined'
                    style={{
                        marginTop: 10,
                        maxWidth: 260,
                        alignSelf: 'flex-end',
                        backgroundColor: 'black',
                        textDecorationColor: 'white'
                    }}
                    onPress={FazerLogin}
                >
                    Entrar
                </Button>
            </View>
        </View>
    )
}