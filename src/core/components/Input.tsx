import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

interface InputProps {
  value: string,
  onChange: (text: string) => void 
}

export const Input = ({ value, onChange}: InputProps ) => {
  return (

    <TextInput value={value} onChangeText={text => onChange(text)} style={styles.input} />

  )
}

const styles = StyleSheet.create({
    input:{
      backgroundColor: '#fff',
      width: '100%',
      padding: 16,
      borderRadius: 8,
      borderColor: '#ddd',

      //Sombras
      shadowColor: '#000',
      shadowOffset: {width:0, height:2},
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
    },
})