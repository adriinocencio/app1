import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto1}>Adrielly Souza Inocencio - Armário 2 PC 13</Text>
      <Text style={styles.titulo}>Conchas</Text>
      <Text style={styles.texto2}>As conchas são órgãos duros, de formação calcária, presentes na parte externa do corpo dos moluscos. Como os moluscos não possuem ossos na parte interna do corpo, as conchas possuem a função de garantir a proteção do corpo destes animais. As conchas podem ser de diversos tipos: formadas por uma peça única, com formato de cone, com formato de espiral, arredondada, fechada, aberta, duas partes ligadas por uma pequena membrana, entre outras.</Text>
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

  titulo: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },

  texto2: {
    marginTop: 10,
    padding: 10,
    fontSize: 16,
  },
});
