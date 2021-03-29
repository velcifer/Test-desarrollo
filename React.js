//Ejemplo de react.js componentes, React es una librería Javascript focalizada en el desarrollo de interfaces de usuario. Así se define la propia librería y evidentemente, 
//esa es su principal área de trabajo. Sin embargo, lo cierto es que en React encontramos un excelente aliado para hacer todo tipo de aplicaciones web.

Archivo App.js principal:

import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import firebase from 'firebase/app'
import 'firebase/auth'
//import Tarea from './src/screens/Tarea'
import { theme } from './src/core/theme'
import {
  AuthLoadingScreen,
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
  Tarea,
} from './src/screens'
import { FIREBASE_CONFIG } from './src/core/config'

const Stack = createStackNavigator()
if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG)
}

const App = () => {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="AuthLoadingScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="AuthLoadingScreen"
            component={AuthLoadingScreen}
          />
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Tarea" component={Tarea} />
          <Stack.Screen
            name="ForgotPasswordScreen"
            component={ForgotPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App

//-------componente formulario-----------//

import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

class Formulario extends Component {

  state = {
    input: ""
  }

  agregarNota = () => {
    this.props.crearNota(this.state.input)
  }

  onInputChange = (e) => {
    this.setState({
      input: e.nativeEvent.text
    })
  }

  render(){
    return ( 
      <View style={styles.form}>
        <Text style={styles.title}>Anotador</Text>
        <TextInput placeholder="Nota" value={this.state.input} onChange={this.onInputChange} style={styles.input}></TextInput>
        <Button title="Crear Nota" onPress={this.agregarNota}></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: "white",
    padding: 20,
    display: "flex",
    justifyContent: "flex-start",
    marginTop: 50,
    borderRadius: 20,
    width: 400
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  },
  input: {
    fontSize: 20,
    marginVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    padding: 2
  }
});

export default Formulario;

//-----conexion a firebase--//

importar { 
   FIREBASE_API_KEY, 
   AUTH_DOMAIN, 
   DATABASE_URL, 
   FIREBASE_PROJECT_ID, 
   FIREBASE_STORAGE_BUCKET, 
   MESSAGE_ID 
} de 'react-native-dotenv';
componenteWillMount () { 
        firebase.initializeApp ({ 
            apiKey: FIREBASE_API_KEY, 
            authDomain: AUTH_DOMAIN, 
            databaseURL: DATABASE_URL, 
            projectId: FIREBASE_PROJECT_ID, 
            storageBucket 
            : FIREBASE_STORAGE_BESSAGESIDET 
        }) , mensajería ; 
    }


Mi ejemplo : https://react-firebase-login-template.web.app/

