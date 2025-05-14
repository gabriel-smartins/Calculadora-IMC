import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = () => {

    let pesoCalc = parseFloat(peso.replace(',', '.'));
    let alturaCalc = parseFloat(altura.replace(',', '.'));
    
    if (isNaN(pesoCalc) || isNaN(alturaCalc) || pesoCalc <= 0 || alturaCalc <= 0) {
      setResultado('Valores de peso ou altura inválidos');
      return;
    }

    let imc = pesoCalc / (alturaCalc * alturaCalc);
    let classificacao = '';

    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
    }
    else if (imc < 25) {
      classificacao = 'Peso normal';
    }
    else if (imc < 30) {
      classificacao = 'Sobrepeso';
    }
    else if (imc < 35) {
      classificacao = 'Obesidade grau I';
    }
    else if (imc < 40) {
      classificacao = 'Obesidade grau II';
    }
    else {
      classificacao = 'Obesidade grau III';
    }

    setResultado(`IMC: ${imc.toFixed(2)} - ${classificacao}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de IMC</Text>

      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        value={peso}
        onChangeText={setPeso}
      />

      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        value={altura}
        onChangeText={setAltura}
      />

      <TouchableOpacity style={styles.btn} onPress={calcularIMC}>
        <Text style={styles.btnText}>Calcular IMC</Text>
      </TouchableOpacity>

      <Text style={styles.resultado}>{resultado}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f0f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2a2a2a',
  },
  input: {
    height: 50,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 14,
    width: "100%",
    marginBottom: 15,
    fontSize: 16,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  btn: {
    backgroundColor: '#4db6ac',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    width: "100%",
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultado: {
    marginTop: 25,
    fontSize: 18,
    color: '#2e7d32',
    textAlign: 'center',
  },
 
});