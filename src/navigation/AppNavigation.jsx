import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import CadastroScreen from "../screens/CadastroScreen";
import RecuperarSenhaScreen from "../screens/RecuperarSenhaScreen";
import ProdutosScreen from "../screens/ProdutoScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ 
                        title: "Login",
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Produtos"
                    component={ProdutosScreen}
                    options={{
                        title: "Produtos",
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Recuperar Senha"
                    component={RecuperarSenhaScreen}
                    options={{
                        title: "Recuperar Senha",
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Cadastro"
                    component={CadastroScreen}
                    options={{
                        title: "Cadastro",
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}