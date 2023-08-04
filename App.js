import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './TelaInicial';
import TelaLogin from './TelaLogin';
import CriarConta from './CriarConta';
import TelaLista from './TelaLista';
import TelaCarrinho from './TelaCarrinho';
import TelaInfo from './TelaInfo';
import db from './Firebase';
import { collection,doc,getDocs,setDoc,addDoc,updateDoc,deleteDoc,deleteField,increment } from 'firebase/firestore';

const Stack = createStackNavigator();

export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='TelaInicial'>
          <Stack.Screen name='Surface Suspensões' component={TelaInicial}/>
          <Stack.Screen name='Login' component={TelaLogin}/>
          <Stack.Screen name='Criar a Conta' component={CriarConta}/>
          <Stack.Screen name='Lista de Produtos' component={TelaLista}/>
          <Stack.Screen name='Carrinho' component={TelaCarrinho}/>
          <Stack.Screen name='Informações' component={TelaInfo}/>
        </Stack.Navigator>
      </NavigationContainer>

  );
  
}
  
}
  