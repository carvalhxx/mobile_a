import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Apostila03 from './components/apostila_03_avancado';

export default function App() {
  return (
    <View style={styles.container}>
      <Apostila03 />
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#9E9E9E',
  },
});
