import { StyleSheet, Text, TextInput, View, Button, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

interface Calcular {
  consumo: number;
  tipoPorcentaje: number;
  tipoMonto: number;
  totalMonto: number;
}

const Calculadora = () => {
  const [consumo, setConsumo] = useState<string>('');
  const [tipoPorcentaje, setipoPorcentaje] = useState<number>(10);
  const [PorcentajePerso, setPorcentajePerso] = useState<string>('');
  const [tipoMonto, setTipoMonto] = useState<number>(0);
  const [totalMonto, setTotalMonto] = useState<number>(0);
  const [history, setHistory] = useState<Calcular[]>([]);

  const calcularTip = () => {
    const monto = parseFloat(consumo);
    const porcentaje = PorcentajePerso ? parseFloat(PorcentajePerso) : tipoPorcentaje;

    if (isNaN(monto) || isNaN(porcentaje) || monto <= 0) {
      alert('Ingresa números válidos.');
      return;
    }

    let tip = monto * (porcentaje / 100);
    const total = monto + tip;

    setTipoMonto(parseFloat(tip.toFixed(2)));
    setTotalMonto(parseFloat(total.toFixed(2)));

    setHistory([{ 
        consumo: monto, 
        tipoPorcentaje: porcentaje, 
        tipoMonto: tip, 
        totalMonto: total 
    }, ...history]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Propinas</Text>

      {/* Entrada del monto de consumo */}
      <TextInput
        style={styles.input}
        placeholder="Monto del consumo"
        keyboardType="numeric"
        value={consumo}
        onChangeText={setConsumo}
      />

      {                            }
      <Text style={styles.label}>Selecciona un porcentaje:</Text>
      <View style={styles.buttonGroup}>
        {[10, 15, 20].map((tip) => (
          <TouchableOpacity key={tip} style={styles.button} onPress={() => setipoPorcentaje(tip)}>
            <Text style={styles.buttonText}>{tip}%</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Entrada personalizada de porcentaje */}
      <TextInput
        style={styles.input}
        placeholder="Porcentaje personalizado"
        keyboardType="numeric"
        value={PorcentajePerso}
        onChangeText={setPorcentajePerso}
      />

      {                                     }
      <Button title="Calcular" onPress={calcularTip} />

      {                }
      {tipoMonto > 0 && (
        <View style={styles.results}>
          <Text>Monto de la Propina: ${tipoMonto}</Text>
          <Text>Total a Pagar: ${totalMonto}</Text>
        </View>
      )}

      {                         }
      <FlatList
        data={history}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <Text>Consumo: ${item.consumo}</Text>
            <Text>Propina: {item.tipoPorcentaje}%</Text>
            <Text>Monto de Propina: ${item.tipoMonto}</Text>
            <Text>Total: ${item.totalMonto}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Calculadora;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#6A4C9C',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  results: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#C8A2C8',
    borderRadius: 5,
    alignItems: 'center',
  },
  historyItem: {
    backgroundColor: '#D8B7DD',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
});
