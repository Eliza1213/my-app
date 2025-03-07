import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, TextInput, View } from 'react-native';
import Login from './app_old/screens/Login';
import Header from './app_old/Componetes/Header';
import Foother from './app_old/Componetes/Foother';
import Calculadora from './app_old/screens';

export default function App() {
  return (
    <View style={styles.container}>
      <Header titulo='Calculadora' 
      nombre='ELIZABETH FLORES CERVANTES' 
      imagen={require('./assets/guero.png')}/>

      <Calculadora/>
      
      <Foother fecha='2025-02-07' telefono='614-123-4567'/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE0D4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize:30,
    fontWeight:'bold',
    color:'#4B2E1E'
  }
});
