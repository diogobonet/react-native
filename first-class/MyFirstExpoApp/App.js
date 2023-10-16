import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha jornada no React Native</Text>
      <Text style={styles.green}>Fundamentos do React Native</Text>
      <Text style={styles.green}>Expo e Expo CLI</Text>
      <Text style={styles.green}>Estilização com StyleSheet</Text>
      <Text style={styles.red}>Navegação</Text>
      <Text style={styles.red}>Scroll View</Text>
      <Text style={styles.red}>Periféricos</Text>
      <Text style={styles.red}>Styled Components</Text>
      <Text style={styles.red}>Temas e Estilos Globais</Text>
      <Text style={styles.red}>Consumo de API's</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
    flex: 2,
    gap: 10
  },
  title: {
    fontSize: 42,
    textDecorationLine: 'underline',
  },
  green: {
    padding: 12,
    borderRadius: 5,
    backgroundColor: '#90ee90',
    color: '#000000',
  },
  red: {
    padding: 12,
    backgroundColor: '#FF7F7F',
    color: '#000000',
    borderRadius: 5,
  }
});
