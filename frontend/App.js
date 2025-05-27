import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

export default function App() {
  const [pacientes, setPacientes] = useState([]);
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');

  const carregarPacientes = async () => {
    const response = await axios.get('http://localhost:3000/pacientes');
    setPacientes(response.data);
  };

  const cadastrarPaciente = async () => {
    await axios.post('http://localhost:3000/pacientes', {
      nome,
      cpf,
      num_contrato: 'CONTRATO-' + Math.random().toString(36).substr(2, 9)
    });
    carregarPacientes();
  };

  useEffect(() => { carregarPacientes(); }, []);

  return (
    <View style={styles.container}>
      <TextInput placeholder="Nome" value={nome} onChangeText={setNome} style={styles.input} />
      <TextInput placeholder="CPF" value={cpf} onChangeText={setCpf} style={styles.input} />
      <Button title="Cadastrar" onPress={cadastrarPaciente} />
      
      <FlatList
        data={pacientes}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nome}</Text>
            <Text>{item.cpf}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 8 },
  item: { padding: 10, borderBottomWidth: 1 }
});