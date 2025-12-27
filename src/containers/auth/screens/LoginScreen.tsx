import { Alert, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context' 
import React, { useState } from 'react'
import { Button, Input, makeHttpRequest, Spinner, URL_API_REST } from '@core'

export const LoginScreen = ({navigation}: any) => {

  const { top } = useSafeAreaInsets()

  const [loading, setLoading] = useState(false)
  const[email, setEmail] = useState('')
  const [password, setPassword] = useState('') 

  async function onSubmit(){
    if (!email || !password) {
      Alert.alert('Error todos los campos son obligatorios!!!')
      return
    }

    setLoading(true)
    try {
      await makeHttpRequest({
        host: URL_API_REST,
        path: '/login',
        method: 'POST',
        body: { email: email.toLocaleLowerCase(), password, },
    })

      //Navegar a la app
      navigation.navigate('MainApp')
    } catch (error: any) {
      Alert.alert('Error', error.message)
    }
    setLoading(false)
  }

  return (
    <View style={[styles.container, {paddingTop: top + 100}]}>

      <Text style={styles.title}>Login Screen</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email: </Text>
        <Input value={email} onChange={ setEmail} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password: </Text>
        <Input value={password} onChange={setPassword} />
      </View>

      <View style={styles.buttonsContainer}>
        { loading ? (
          <Spinner/> 
          ) : (
          <Button title='Iniciar sesion' onPress={onSubmit} /> 
          )}
      <Button title='Crear cuenta' onPress={()=> null} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 16,
    gap: 24,
  },
  title:{
    fontSize: 24,
    fontFamily: 'PlaypenSans-Bold',
    textAlign: 'center',
    marginBottom: 90,
  },
  inputContainer:{},
  label:{
    fontSize: 24,
    fontFamily: 'PlaypenSans-Regular',
    marginBottom: 8,
  },
  buttonsContainer:{
    marginTop:90,
    gap: 24,
  }
})