import { StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import Boton from '../app_old/Componetes/Boton';

const index = () => {
    const ruta = useRouter();
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (usuario === contrasena && usuario !== '') {
            ruta.push('./(tabs)/');
        } else {
          setError('Usuario o contraseña incorrecta');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Bienvenido</Text>
            <Text style={styles.subtitulo}>Inicia sesión para continuar</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Usuario</Text>
                <TextInput 
                    placeholder="Ingresa tu usuario" 
                    style={styles.cajas} 
                    placeholderTextColor="#BFA89E"
                    value={usuario}
                    onChangeText={setUsuario}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Contraseña</Text>
                <TextInput 
                    placeholder="********" 
                    style={styles.cajas} 
                    secureTextEntry={true}
                    placeholderTextColor="#BFA89E"
                    value={contrasena}
                    onChangeText={setContrasena}
                />
            </View>
            {error ? <Text >{error}</Text> : null}
            <Boton onPress={handleLogin} titulo='Iniciar Sesión' />

            <Text style={styles.registro}>
                ¿No tienes cuenta? <Text style={styles.link}>Regístrate aquí</Text>
            </Text>
        </View>
    );
};

export default index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDE0D4',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#4B2E1E',
        marginBottom: 5,
    },
    subtitulo: {
        fontSize: 16,
        color: '#6B4F4F',
        marginBottom: 30,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 15,
    },
    labels: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4B2E1E',
        marginBottom: 5,
    },
    cajas: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#4B2E1E',
        padding: 12,
        fontSize: 16,
        width: '100%',
        backgroundColor: '#FFF5EE',
    },
    registro: {
        marginTop: 15,
        fontSize: 14,
        color: '#6B4F4F',
    },
    link: {
        color: '#4B2E1E',
        fontWeight: 'bold',
    },
});
