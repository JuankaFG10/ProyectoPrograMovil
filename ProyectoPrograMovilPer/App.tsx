import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButton';

export default function App() {
  const handleOnLogin = () => {
    console.log("prueba login desde app");
    alert("Alerta login desde app");
  }

  const handleOnLogout = () => {
    alert("Alerta logout desde app");
  }

  // 1. Definimos la función para recuperar contraseña
  const handleForgotPassword = () => {
    alert("Redirigiendo a recuperar contraseña...");
  }

  return (
    <View style={styles.container}>
      <Text>INICIO DE SESION</Text>
      <StatusBar style="auto" />
      <View style={styles.buttonsWrapper}>
        <View style={styles.card}>
          <CustomButton 
            title={'Login'} 
            onClick={handleOnLogin} 
          />
          <CustomButton 
            title={'Salir'}
            onClick={handleOnLogout}
            variant={'secondary'} 
          />
          
         
          <CustomButton 
            title={'¿Has olvidado la contraseña?'}
            onClick={handleForgotPassword}
            variant={'forgotPassword'} 
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff'
  },
  card:{
    width: "80%",
    height: "80%",
    borderRadius: 15,
    backgroundColor:'#e9e9e9',
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  buttonsWrapper:{
    marginTop: 15,
    width: "80%",
    height: "40%",
    alignItems: "center",
  },
});