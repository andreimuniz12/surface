import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,TouchableOpacity,FlatList, ScrollView,Button} from 'react-native';
import styles from './Estilo';

export default class TelaCarrinho extends React.Component {
    constructor(props){
        super(props)
        this.state = {array:this.props.route.params.produto} 
    }
    excluirItem(item){
      var novosItens = [...this.state.array]
      if(novosItens.length == 1 ){
          novosItens = [];
      }
      else{
         novosItens.splice(item.id,1);
      }
      this.setState({array:novosItens})
    }

  render(){
    return (
      <View style={{flex:1,backgroundColor:'black'}}>  
      
        <View style={{backgroundColor:'black'}}>
            <Text style={{fontSize:25,color:'yellow',marginLeft:45}}>ITENS ADICIONADOS AO CARRINHO IRAM APARECER AQUI!!</Text>    
        </View>
        
    <FlatList style={{marginTop:15,}} data={this.state.array} 
      renderItem={({item}) =>
          <View style={{fontSize:50,alignItems:'center',margin:10,}}>
            <Image style={{width:120,height:120}} source={require("./assets/Kit_suspensao_a_ar.jpg")} ></Image>  
              <Text style={{color:'white'}}>{item.descricao}{'\n'}{item.preco}</Text>
              <Button title='Tirar do carrinho' color='red' onPress={()=> this.excluirItem(item)}></Button>
            </View>}>                         
    </FlatList> 


    {/*<View style={{flex:1,justifyContent:'flex-start',backgroundColor:'black',marginLeft:150}}>
          <Image style={{width:200,height:190}}  source={require("./assets/icone_carro.png")}></Image>
    </View> */}

    <View style={{backgroundColor:'black',flexDirection:'row',justifyContent:'space-around'}}>
            <TouchableOpacity style={{backgroundColor:'black',flexDirection:'row',justifyContent:'space-around'}} onPress={()=>this.props.navigation.navigate('Surface Suspensões')}><Image style={{width:50,height:50}} source={require("./assets/icone_casa.jpg")}></Image></TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'black',flexDirection:'row',justifyContent:'space-around'}} onPress={()=> this.props.navigation.navigate('Lista de Produtos')} ><Image style={{width:50,height:50}}  source={require("./assets/logo_sacola.png")}></Image></TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'black',flexDirection:'row',justifyContent:'space-around'}} onPress={()=>this.props.navigation.navigate('Carrinho',{produto:this.state.array,default:null,})}><Image style={{width:50,height:50}}  source={require("./assets/icone_carro.png")}></Image></TouchableOpacity>
    </View>

</View>
     
  );
  
}
  
}
