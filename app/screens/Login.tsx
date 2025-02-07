import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity} from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Image source={require("./telcel.png")} style={styles.logo} />
        <Text style={styles.label}>Número Telcel (10 dígitos)</Text>
        <TextInput placeholder="Ingrese su número" style={styles.input}/>
        <Text style={styles.label}>Contraseña</Text>
        <TextInput placeholder="Ingrese su contraseña" style={styles.input}/>
        <View style={styles.rememberContainer}>
          <Text style={styles.checkbox}>{"⬜"}</Text>
          <Text style={styles.checkboxLabel}>Recordar número</Text>
        </View>
        <Text style={styles.forgotPassword}>Olvidé mi contraseña</Text>
        <TouchableOpacity style={styles.primaryButton}>
          <Button title="Ingresar" color={'#007AFF'}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton}>
          <Button title="Continuar como invitado" color={'#007AFF'}/>
        </TouchableOpacity>
        <Text style={styles.registerText}> Si no tienes cuenta, <Text style={styles.registerLink}>Regístrate</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, 
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 15, 
    padding: 50,
    width: '100%', 
    maxWidth: 400, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, 
  },
  logo: {
    width: 2500,
    height: 200,
    resizeMode: 'contain', 
    alignSelf: 'center', 
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
    color: '#333',
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkbox: {
    fontSize: 20,
    marginRight: 5,
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#666',
  },
  forgotPassword: {
    color: '#007AFF',
    fontSize: 16,
    textAlign: 'right',
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    borderWidth: 8,
    borderColor: '#007AFF',
    marginBottom: 20,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    borderWidth: 8,
    borderColor: '#007AFF',
  },
  registerText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  registerLink: {
    color: '#007AFF',
  },
});
