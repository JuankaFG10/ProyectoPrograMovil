import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButton';

export default function App() {

  const handleOnLogin = () => {
    console.log(" prueba desde app");
    alert("Tu Iphone ha sido actualizado");

  }

  const handleOnLogout = () => {
    console.log("alerta logout desde app")
    alert("Alerta desde app");
  }

  return (
    <View style={styles.container}>
      <Text>Open up App</Text>
      <StatusBar style="auto" />
      <CustomButton 
      title = {'login'}
      onClick={handleOnLogin}
      />
      <CustomButton 
      title = {'Salir'} 
      onClick={handleOnLogout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
