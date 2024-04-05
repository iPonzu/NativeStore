import style from "../config/produto_Style";
import { Card, Text, Button } from "react-native-paper";
import { ScrollView, View } from "react-native";
import produto_Style from "../config/produto_Style";

export default function ProdutoScreen({ navigation }){

    const BackToLogin = () => {
        navigation.navigate('LoginScreen')
    }

    return(
        <ScrollView>
            <Text 
                variant="titleLarge"
                style={produto_Style.title}
            >
                8Pizza Store 🍕 
            </Text>
            <View style={produto_Style.container2}>
                <Card style={produto_Style.card}>
                    <Card.Content>
                        <Text variant='bodyLarge'>Pizza de tomate seco com queijo de búffala</Text>
                        <Text variant='bodyMedium' 
                            style={{marginBottom: 10}}>
                                Com seu queijo de búffala que derrete na boca e seu tomate seco que acentua o sabor, essa pizza é uma das mais pedidas e queridas da casa.
                                R$ 45,00
                            </Text>
                    </Card.Content>
                    <Card.Cover 
                        source={require('../images/pizza1.jpg')}
                        style={{ width: 250, height: 250}}
                    />
                </Card>
                <Card style={produto_Style.card}>
                    <Card.Content>
                        <Text variant='bodyLarge'>Pizza de cogumelos</Text>
                        <Text variant='bodyMedium' 
                            style={{marginBottom: 10}}>
                                Cogumelos do tipo champinhon, dão sabor e textura a um dos sabores que mais chamam atenção na casa e aos nossos amigos vegetarianos
                                R$ 50,00
                            </Text>
                    </Card.Content>
                    <Card.Cover 
                        source={require('../images/pizza2.jpg')}
                        style={{ width: 250, height: 250}}
                    />
                </Card>
                <Card style={produto_Style.card}>
                    <Card.Content>
                        <Text variant='bodyLarge'>Pizza de calabresa</Text>
                        <Text variant='bodyMedium' 
                            style={{marginBottom: 10}}>
                                A clássica pizza de calabresa, com seu sabor marcante e inconfundível. Uma das mais pedidas da casa.
                                R$ 40,00
                            </Text>
                    </Card.Content>
                    <Card.Cover 
                        source={require('../images/pizza3.jpg')}
                        style={{ width: 250, height: 250}}
                    />
                </Card>
                <Card style={produto_Style.card}>
                    <Card.Content>
                        <Text variant='bodyLarge'>Pizza de 4 Queijos</Text>
                        <Text variant='bodyMedium' 
                            style={{marginBottom: 10}}>
                                A combinação perfeita de 4 tipos de queijos diferentes, onde seu paladar vai implorar por mais.
                                R$ 35,00
                            </Text>
                    </Card.Content>
                    <Card.Cover 
                        source={require('../images/pizza4.jpg')}
                        style={{ width: 250, height: 250}}
                    />
                    </Card> 
                    <Card style={produto_Style.card}>
                        <Card.Content>
                            <Text variant='bodyLarge'>Pizza de frango com catupiry artesanal</Text>
                            <Text variant='bodyMedium' 
                                style={{marginBottom: 10}}>
                                    A pizza de catupiry artesanal, une o frango saboroso com o catupiry da casa em uma massa crocante, se tornando seu melhor acompanhante na noite de sexta com amigos.
                                    R$ 30,00
                                </Text>
                        </Card.Content>
                        <Card.Cover 
                            source={require('../images/pizza5.jpg')}
                            style={{ width: 250, height: 250}}
                        />
                    </Card>
                    <Card style={produto_Style.card}>
                        <Card.Content>
                            <Text variant='bodyLarge'>Pizza de pepperoni</Text>
                            <Text variant='bodyMedium' 
                                style={{marginBottom: 10}}>
                                    A clássica pizza de pepperoni agrada paladares ao redor do mundo, e aqui não seria diferente com seu picante agradável e harmonioso com a crocância da massa, clássico.
                                    R$ 25,00
                                </Text>
                        </Card.Content>
                        <Card.Cover 
                            source={require('../images/pizza6.jpg')}
                            style={{ width: 250, height: 220}}
                        />
                    </Card>

                    <Button
                        mode='outlined'
                        style={{
                            marginRight: 70,
                            marginBottom: 10,
                            maxWidth: 200,
                            alignSelf: 'flex-end',
                            backgroundColor: 'black',
                        }}
                        onPress={BackToLogin}
                        >
                            Voltar para o login
                    </Button>
                </View>
        </ScrollView>
    )
}   