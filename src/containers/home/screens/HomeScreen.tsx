import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const dummy_users =[
  {id:1, name: 'Yuliana Muriel', email: 'yulimuriel@gmail.com'},
  {id:2, name: 'Dalia Noriega', email: 'dalianoriega@gmail.com'},
  {id:3, name: 'Adelita Alvarez', email: 'adelitaalvarez@gmail.com'},
]

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets()

  return (
    <View style={[styles.container, {paddingTop: top}]}>

      <Text style={styles.title}>Hola Dionisio Noriega</Text>

      <Text>Lista de Usuarios</Text>

      <FlatList
      data={dummy_users}
      renderItem = {({item}) => (
        <View style={{ flexDirection: 'row', gap: 16}}>
          <Text style={{}}>{item.name}</Text>
          <Text style={{}}>{item.email}</Text>
          <TouchableOpacity><Text>Editar</Text></TouchableOpacity>
          <TouchableOpacity><Text>Eliminar</Text></TouchableOpacity>
        </View>
      )}
      contentContainerStyle={{gap: 30}}
      />
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