import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Senha from './pages/Senha';
import Pagamento from './pages/Pagamento';
import Loading from './pages/Loading';



const Stack = createStackNavigator();

function Routes(){
      return(
            <NavigationContainer>
                  <Stack.Navigator>
                  <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{headerShown: false}}
                        />
                        <Stack.Screen
                        name="Cadastro"
                        component={Cadastro}
                        options={{headerShown: false}}
                        />
                         <Stack.Screen
                        name="Senha"
                        component={Senha}
                        options={{headerShown: false}}
                        />
                        <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{headerShown: false}}
                        />
                        <Stack.Screen
                        name="Detail"
                        component={Detail}
                        options={{
                        headerRight: () => (
                              <TouchableOpacity>
                                    <Feather style={{marginRight: 20, }}
                                    name="shopping-cart"
                                    size={26}
                                    color="#00C013"
                                    />
                              </TouchableOpacity>
                        )
                        }}
                        />
                         <Stack.Screen
                        name="Pagamento"
                        component={Pagamento}
                        options={{headerShown: false}}
                        />
                         <Stack.Screen
                        name="Loading"
                        component={Loading}
                        options={{headerShown: false}}
                        />
                  </Stack.Navigator>
            </NavigationContainer>
      )
}
export default Routes;