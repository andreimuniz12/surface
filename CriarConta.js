import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Button} from 'react-native';
import styles from './Estilo';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default class CriarConta extends React.Component {
    constructor(props){
        super(props)
        this.state = {email: "",password: ""}
    }
  criarConta(){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.state.email,this.state.password).then((userCredential) => {
    const user = userCredential.user;
    this.props.navigation.navigate('Login'); 
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });  
}
  
render(){
    return (
    <View style={{flex:2,backgroundColor:'#101010'}}>
        <View style={{backgroundColor:'#101010',marginTop:15}}>
           <Text style={{color:'white',fontSize:30,marginLeft:120}}>CRIE SUA CONTA!</Text>
        </View>

        <View style={{flex:4,backgroundColor:'#101010',justifyContent:'center',marginLeft:80,marginTop:50}}>
            <Text style={{fontSize:20,color:'white'}}>Nome</Text>
            <TextInput style={{backgroundColor:'white',height:50,width:250,margin:30,marginTop:20,borderWidth:1,fontSize:20,borderColor:'white'}} placeholderTextColor={"white"}/>
            <Text style={{fontSize:20,color:'white'}}>Sobrenome</Text>
            <TextInput style={{backgroundColor:'white',height:50,width:250,margin:30,marginTop:20,borderWidth:1,fontSize:20,borderColor:'white'}} placeholderTextColor={"white"}/>
            <Text style={{fontSize:20,color:'white'}}>Endereço de Email</Text>
            <TextInput style={{backgroundColor:'white',height:50,width:250,margin:30,marginTop:20,borderWidth:1,fontSize:20,borderColor:'white'}} placeholderTextColor={"white"} onChangeText={(txt)=>this.setState({email:txt})}/>
            <Text style={{fontSize:20,color:'white'}}>Senha</Text>
            <TextInput style={{backgroundColor:'white',height:50,width:250,margin:30,marginTop:20,borderWidth:1,fontSize:20,borderColor:'white'}}  placeholderTextColor={"white"} onChangeText={(txt)=>this.setState({password:txt})}/>
        </View> 

        <View style={{flex:1,width:150,height:150,marginLeft:130,marginTop:80}}><Button title='SALVAR' onPress={()=>this.criarConta()}></Button></View>
        
        <View style={{backgroundColor:'#101010',flexDirection:'row'}}>
                <Text style={{fontSize:20,marginLeft:18,color:'white',flexDirection:'row'}}>JÁ TEM UMA CONTA?</Text>
            <TouchableOpacity style={{alignItems:"center",marginLeft:10,backgroundColor:'#101010'}} 
                onPress={()=>this.props.navigation.navigate('Login')}>
                    <Text style={{fontSize:20,color:'white'}}>LOGIN</Text>
            </TouchableOpacity>
            
          </View>
        </View>
     
  );
  
}
  
}
