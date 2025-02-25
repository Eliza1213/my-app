import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './app/Componetes/Header';
import Foother from './app/Componetes/Foother';
import Calculadora from './app/screens';

export default function App() {
  return (
    <View style={styles.container}>
      <Header titulo='Calculadora' 
      nombre='Elizabeth Cervantes' 
      imagen={require('./assets/guero.png')}/>

      <Calculadora/>
      
      <Foother fecha='2025-02-19' telefono='614-123-4567'/>
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
