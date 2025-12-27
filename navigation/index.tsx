import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  HomeScreen,
  LoginScreen,
  ProfileScreen,
  RegisterScreen,
} from '@containers'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

const hideHeader = { headerShown: false }

export function NavigationApp() {
  const Stack = createNativeStackNavigator()
  function AuthStack() {
    // funcion que renderiza stack de autenticacion
    return (
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={hideHeader}
        />
        <Stack.Screen
          name='Register'
          component={RegisterScreen}
          options={hideHeader}
        />
      </Stack.Navigator>
    )
  }

  const Tab = createBottomTabNavigator()
  function MainApp() {
    // funcion que renderiza stack de la aplicacion
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',

          tabBarStyle: {
            height: 70, // 👈 más razonable
            paddingBottom: 10,
            paddingTop: 10, // altura segura
          },

          tabBarIconStyle: {
            marginTop: 0, // 👈 importante
          },

          tabBarIcon: ({ focused, color }) => {
            const iconName = route.name === 'Home' ? 'home' : 'person'
            return (
              <MaterialIcons
                name={iconName}
                size={28} // 👈 reduce tamaño
                color={color}
              />
            )
          },
        })}>
        <Tab.Screen name='Home' component={HomeScreen} options={hideHeader} />
        <Tab.Screen
          name='Profile'
          component={ProfileScreen}
          options={hideHeader}
        />
      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Authentication'>
        <Stack.Screen
          name='Authentication'
          component={AuthStack}
          options={hideHeader}
        />
        <Stack.Screen name='MainApp' component={MainApp} options={hideHeader} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
