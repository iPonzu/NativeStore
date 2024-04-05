import { Button, TextInput, Text } from 'react-native-paper'
import { View } from 'react-native'
import { useState } from 'react'
import style from '../config/style'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import auth, { db } from '../config/firebase'
import { setDoc, doc } from 'firebase/firestore'
import { Image } from 'expo-image'

export default function CadastroScreen({ navigation }) {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const CadastrarUsuario = async () => {
        try{
            const usuario = await createUserWithEmailAndPassword(auth, email, senha)
            const uid = await usuario.user.uid
            await setDoc(doc(db, "usuarios", uid), {
                nome: nome,
                email: email
            })
            navigation.navigate("LoginScreen")
        }catch(error){
            console.error(error)
        }
    }
    return(
        <View style={style.container}>
            <View style={style.innerContainer}>
                <Image
                    source={require('../../assets/cadastro.png')}
                    style={{ width: 100, height: 100, alignSelf: 'center'}}
                />
                <Text 
                    variant='bodyLarge' 
                    style={{
                        fontSize: 20,
                        alignSelf: 'center',
                        color: 'white',
                        fontFamily: 'Roboto'
                    }}
                >
                    Faça seu cadastro
                </Text>
                <TextInput
                    label='Nome'
                    mode='outlined'
                    value={nome}
                    onChangeText={setNome}
                    style={style.input}
                />
                <TextInput
                    label='Email'
                    mode='outlined'
                    value={email}
                    onChangeText={setEmail}
                    style={style.input}
                />
                <TextInput
                    label='Senha'
                    mode='outlined'
                    value={senha}
                    onChangeText={setSenha}
                    style={style.input}
                />
                <Button 
                    mode='outlined'
                    style={{
                        marginRight: 95,
                        marginTop: 10,
                        maxWidth: 200,
                        alignSelf: 'flex-end',
                        backgroundColor: 'black',
                    }}
                        onPress={() => {
                            try{
                                CadastrarUsuario()
                                console.error('Usuário cadastrado')
                                navigation.navigate("LoginScreen")
                            }catch(error){
                                console.error(error)
                            }
                        }}
                    >
                        Cadastrar
                    </Button>
            </View>
        </View>
    )
}
