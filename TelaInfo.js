import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity,ScrollView,Image,Button,FlatList} from 'react-native';
import styles from './Estilo';

export default class TelaLista extends React.Component {
    constructor(props){
        super(props)
        this.state= {array:[]}
    }
    gerenciaProd(descricao,preco){
        var obj = {
            descricao:descricao,
            preco:preco
        }
        this.setState({array:[...this.state.array,obj]})
   }                                                                        


  render(){
    return (
        <View style={{flex:1,backgroundColor:'#101010'}}>
          
          <ScrollView>
            
            <View style={{flex:1,backgroundColor:'#101010'}}>
                    <Image  style={{flex:1,width:150,height:150,marginLeft:150}} source={require("./assets/SURFACE_LOGO.png")}></Image>
            </View>
            
            <View style={{flex:4,backgroundColor:'#101010'}}>
                    <Text style={{fontSize:30,color:'white',marginLeft:80}}>Aqui você ve as principais informações do produto</Text>
            </View>
                <View style={{flex:1,backgroundColor:'#101010'}}>
                    <Text style={{fontSize:15,color:'white',marginLeft:130}}>Kit SUPENSÃO V9 ULTRA</Text>
                </View>

                <View style={{flex:3,flexDirection:'row',backgroundColor:'#101010',justifyContent:'center',flexWrap:"wrap"}}>

                    <View style={{backgroundColor:'#101010'}}>
                        <Image style={{width:120,height:120}}  source={require("./assets/suspensao.jpg")}></Image>
                        <Text style={{fontSize:15,color:'white'}}>Kit Suspensão a ar v9 ultra</Text>
                        <Text style={{fontSize:15,color:'white'}}>R$1500</Text>
                        <Button title={"Adicionar no \n carrinho"} onPress={()=>this.gerenciaProd('kit suspensão a ar','R$1500')}></Button>
                    </View>
                </View>
                   
        </ScrollView>
                
        <View style={{backgroundColor:'black',flexDirection:'row',justifyContent:'space-around'}}>
                <TouchableOpacity style={{backgroundColor:'black',flexDirection:'row',justifyContent:'space-around'}} onPress={()=>this.props.navigation.navigate('Surface Suspensões')}><Image style={{width:50,height:50}} source={require("./assets/icone_casa.jpg")}></Image></TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'black',flexDirection:'row',justifyContent:'space-around'}} onPress={()=> this.props.navigation.navigate('Lista de Produtos')} ><Image style={{width:50,height:50}}  source={require("./assets/logo_sacola.png")}></Image></TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'black',flexDirection:'row',justifyContent:'space-around'}} onPress={()=>this.props.navigation.navigate('Carrinho',{produto:this.state.array,default:null })}><Image style={{width:50,height:50}}  source={require("./assets/icone_carro.png")}></Image></TouchableOpacity>
        </View> 

        </View>
     
  );
  
}
  
}

