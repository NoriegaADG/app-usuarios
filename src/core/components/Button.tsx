import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

interface ButtonProps{
	title: string
	onPress: () => void
}

export const Button = ({title, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
					<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
  )
} 

const styles = StyleSheet.create({

	btn : {
		backgroundColor:COLORS.primary, 
		padding:16, 
		borderRadius:5, 
		marginTop:10
	},
	text:{
		color:COLORS.white, 
		fontSize: 24,
		textAlign: 'center',
	}

})