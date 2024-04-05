import { Button, TextInput, Text } from 'react-native-paper'
import { View } from 'react-native'
import { useState } from 'react'
import style from '../config/style'
import { createUserWithEmailAndPassword } from '../config/firebase'
import { setDoc } from 'firebase/firestore'

export default function CadastroScreen({ navigation }) {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const CadastrarUsuario = async () => {
        try{
            const usuario = await createUserWithEmailAndPassword(auth, email, senha)
            const uid = await usuario.user.uid
            await setDoc(doc(db, 'usuarios', uid), {
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
            <Image
                source={require('../../assets/cadastro.png')}
                style={{ width: 200, height: 200, marginLeft: 50}}
            />
            <View style={style.innerContainer}>
                <Text variant='bodySmall'>
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
                    style={style.button}
                    onPress={() => {
                        try{
                            CadastrarUsuario()
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
