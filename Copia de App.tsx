import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, TextInput, Alert, TouchableOpacity } from 'react-native';
import { Button} from '@core';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

export default function App() {
const [loaded, error] = useFonts({
    'PlaypenSans-Bold': require('./assets/fonts/PlaypenSans-Bold.ttf'),
    'PlaypenSans-Light': require('./assets/fonts/PlaypenSans-Light.ttf'),
    'PlaypenSans-Regular': require('./assets/fonts/PlaypenSans-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* <Text style = {{fontFamily:'PlaypenSans-Bold', fontSize:24}}> HOLA MUNDO DESDE REACT</Text>,
      <Text style = {{fontFamily:'PlaypenSans-Regular', fontSize:24}}> HOLA MUNDO DESDE REACT</Text>,
      <Text style = {{fontFamily:'PlaypenSans-Light', fontSize:24}}> HOLA MUNDO DESDE REACT</Text>
      <StatusBar style="auto" />

      <Spinner /> 

      <Button title='Presioname!' onPress={() => Alert.alert('Hola Mundo')} />
      <ActivityIndicator size='large' color='blue'/>
      <TextInput style={{backgroundColor: 'pink', width: 300, padding: 16}}  />  */}

      <Button title='Hello' onPress={() => console.log('Hello')}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 18,
  },
});