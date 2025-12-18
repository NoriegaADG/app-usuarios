import * as React from 'react';
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const hideHeader = { headerShown: false }


export function NavigationApp(){

    const Stack = createNativeStackNavigator()

    function AuthStack(){
        //Funcion que renderiza stack de autenticacion
        return(
            <Stack.Navigator>
                <Stack.Screen name='Login' component={()=> <Text>Hola desde el Login</Text>} options= {hideHeader} />
                <Stack.Screen name='Register' component={ ()=> <Text>Hola desde el Registro</Text> } options= {hideHeader} />
            </Stack.Navigator>
        )
    }

    const Tab = createBottomTabNavigator()
    function MainApp(){
        //Funcion que renderiza stack de la aplicacion
        return (
            
            <Tab.Navigator>
                <Tab.Screen name='Home' component= { () => <Text> Hola desde Home </Text>} options= {hideHeader} />
                <Tab.Screen name='Profile' component = { () => <Text> Hola desde Profile </Text>} options= {hideHeader} />
            </Tab.Navigator>
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Authentication'>
                <Stack.Screen name='Authentication' component={AuthStack} options= {hideHeader}/>
                <Stack.Screen name='MainApp' component={MainApp} options= {hideHeader} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}