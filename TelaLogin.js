import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Button,TouchableOpacity} from 'react-native';
import styles from './Estilo';
import { TextInput } from 'react-native-gesture-handler';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default class TelaLogin extends React.Component {
    constructor(props){
        super(props)
        this.state = {email:"",password:""}
    }

    logarConta(){
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.state.email, this.state.password).then((userCredential) => {
    const user = userCredential.user;
    this.props.navigation.navigate('Surface Suspensões')
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Preencha os Campos")
  });
    }
  render(){
    return (
      <View style={{flex:1,backgroundColor:'#101010'}}>
        <View style={{flex:2,backgroundColor:'#101010'}}>
        <View style={{backgroundColor:'#101010'}}>
            <Image style={{width:150,height:150,marginLeft:150}} source={require("./assets/SURFACE_LOGO.png")}></Image>
            <Text style={{fontSize:20,color:'yellow',marginLeft:80}}>SEU CARRO MERECE UM ESTILO PRÓPIO</Text>
            <Text style={{fontSize:30,color:'white',marginLeft:190,marginTop:10 }}>LOGIN</Text>
        </View>
        
        <View style={{flex:2,backgroundColor:'#101010',marginLeft:20}}>
          <Text style={{color:'white',marginLeft:20,fontSize:15}}>EMAIL</Text>
          <TextInput style={{backgroundColor:'white',height:50,width:250,margin:30,marginTop:20,borderWidth:1,fontSize:20,borderColor:'white'}}  onChangeText={(txt)=>this.setState({email:txt})} placeholderTextColor={"white"}/>
          
          <Text style={{color:'white',marginLeft:20}}>SENHA</Text>
          <TextInput style={{backgroundColor:'white',height:50,width:150,margin:30,marginTop:20,borderWidth:1,fontSize:20,borderColor:'white'}}  onChangeText={(txt)=>this.setState({password:txt})} placeholderTextColor={"white"}/>  
        </View> 

        </View>

      <View style={{width:150,height:150,marginLeft:130}}><Button title='CONTINUE' onPress={()=>this.logarConta()}></Button></View>

      <View style={{backgroundColor:'#101010',flexDirection:'row'}}>
                <Text style={{fontSize:20,marginLeft:18,color:'white',flexDirection:'row'}}>NÃO TEM UMA CONTA?</Text>
            <TouchableOpacity style={{alignItems:"center",marginLeft:10,backgroundColor:'#101010'}} 
                onPress={()=>this.props.navigation.navigate('Criar a Conta')}>
                    <Text style={{fontSize:20,color:'white'}}>SIGN UP</Text>
            </TouchableOpacity> 
            
            </View>
      </View>

        
     
  );
  
}
  
}
