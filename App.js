import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto1}>Adrielly Souza Inocencio - Armário 2 PC 13</Text>
      <Text style={styles.texto2}>Adrielly Souza Inocencio - Armário 2 PC 13</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'left',
  },

  texto1: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  texto2: {
    marginTop: 10, // Adiciona espaço entre os dois textos
    backgroundColor: '#b10bd6', // Cor de fundo diferente
    borderColor: '#fa0202', // Cor da borda
    color: '#FFFFFF',// Cor da letra
    borderWidth: 1, // Largura da borda
    padding: 10,
    fontSize: 16,
  },
});
