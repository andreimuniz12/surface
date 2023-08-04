import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableOpacity,Button} from 'react-native';
import styles from './Estilo';
import { ScrollView } from 'react-native-gesture-handler';

export default class TelaInicial extends React.Component {
    constructor(props){
        super(props)
        this.state = {array:[]}
        
    }

read(){

}

   gerenciaProd(descricao,preco){
        var obj = {
            descricao:descricao,
            preco:preco,
            id:this.state.array.length
        }
        this.setState({array:[...this.state.array,obj]})
   }                                                                        
  render(){
    return (
        <View style={{flex:1,backgroundColor:'yellow'}}>
            
            <View style={{backgroundColor:'#101010',flexDirection:'row'}}>
                <Text style={{fontSize:20,marginLeft:180,color:'white'}}>BEM VINDO FAÇA O</Text>
                <TouchableOpacity style={{alignItems:"center",marginLeft:10,backgroundColor:'#101010'}} onPress={()=>this.props.navigation.navigate('Login')}>
                    <Text style={{fontSize:20,color:'white'}}>LOGIN</Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View style={{flex:1,backgroundColor:'#101010'}}>
                    <Image  style={{flex:1,width:150,height:150,marginLeft:150}} source={require("./assets/SURFACE_LOGO.png")}></Image>
                </View>

                <View style={{flex:1,backgroundColor:'#101010'}}>
                    <Text style={{fontSize:30,color:'white',marginLeft:80}}>PEÇAS EM PROMOÇÃO</Text>
                </View>

        
                <View style={{flex:3,flexDirection:'row',backgroundColor:'#101010',justifyContent:'center',flexWrap:"wrap"}}>

                <View style={{backgroundColor:'#101010'}}>
                        <Image style={{width:120,height:120}}  source={require("./assets/Kit_suspensao_a_ar.jpg")}></Image>
                        <Text style={{fontSize:15,color:'white'}}>Kit Suspensão a ar</Text>
                        <Text style={{fontSize:15,color:'white'}}>R$1500</Text>
                        <Button title={"Adicionar no \n carrinho"} onPress={()=>this.gerenciaProd('kit suspensão a ar','R$1500')}></Button>
                        <View style={{marginTop:10}}>
                            <Button title='Ver informações' onPress={()=>this.props.navigation.navigate("Informações")} color='gray'></Button>
                        </View>
                </View> 

                    <View style={{backgroundColor:'#101010'}}>
                        <Image style={{width:120,height:120}}  source={require("./assets/Kit_suspensao_a_ar.jpg")}></Image>
                        <Text style={{fontSize:15,color:'white'}}>Kit Suspensão a ar</Text>
                        <Text style={{fontSize:15,color:'white'}}>R$1500</Text>
                        <Button title={"Adicionar no \n carrinho"} onPress={()=>this.gerenciaProd('kit suspensão a ar','R$1500')}></Button>
                        <View style={{marginTop:10}}>
                            <Button title='Ver informações' onPress={()=>this.props.navigation.navigate('Informações')} color='gray'></Button>
                        </View>
                    </View>
                    
                    <View style={{backgroundColor:'#101010'}}>
                        <Image style={{width:120,height:120}}  source={require("./assets/Kit_suspensao_a_ar.jpg")}></Image>
                        <Text style={{fontSize:15,color:'white'}}>Kit Suspensão a ar</Text>
                        <Text style={{fontSize:15,color:'white'}}>R$1500</Text>
                        <Button title={"Adicionar no \n carrinho"} onPress={()=>this.gerenciaProd('kit suspensão a ar','R$1500')}></Button>
                        <View style={{marginTop:10}}>
                            <Button title='Ver informações' onPress={()=>this.props.navigation.navigate('Informações')} color='gray'></Button>
                        </View>
                    </View>
                    <View style={{backgroundColor:'#101010'}}>
                        <Image style={{width:120,height:120}}  source={require("./assets/Kit_suspensao_a_ar.jpg")}></Image>
                        <Text style={{fontSize:15,color:'white'}}>Kit Suspensão a ar</Text>
                        <Text style={{fontSize:15,color:'white'}}>R$1500</Text>
                        <Button title={"Adicionar no \n carrinho"} onPress={()=>this.gerenciaProd('kit suspensão a ar','R$1500')}></Button>
                        <View style={{marginTop:10}}>
                            <Button title='Ver informações' onPress={()=>this.props.navigation.navigate('Informações')} color='gray'></Button>
                        </View>
                    </View>

                    <View style={{backgroundColor:'#101010'}}>
                        <Image style={{width:120,height:120}}  source={require("./assets/Kit_suspensao_a_ar.jpg")}></Image>
                        <Text style={{fontSize:15,color:'white'}}>Kit Suspensão a ar</Text>
                        <Text style={{fontSize:15,color:'white'}}>R$1500</Text>
                        <Button title={"Adicionar no \n carrinho"} onPress={()=>this.gerenciaProd('kit suspensão a ar','R$1500')}></Button>
                        <View style={{marginTop:10}}>
                            <Button title='Ver informações' onPress={()=>this.props.navigation.navigate('Informações')} color='gray'></Button>
                        </View>
                    </View>
                    <View style={{backgroundColor:'#101010'}}>
                        <Image style={{width:120,height:120}}  source={require("./assets/Kit_suspensao_a_ar.jpg")}></Image>
                        <Text style={{fontSize:15,color:'white'}}>Kit Suspensão a ar</Text>
                        <Text style={{fontSize:15,color:'white'}}>R$1500</Text>
                        <Button title={"Adicionar no \n carrinho"} onPress={()=>this.gerenciaProd('kit suspensão a ar','R$1500')}></Button>
                        <View style={{marginTop:10}}>
                            <Button title='Ver informações' onPress={()=>this.props.navigation.navigate('Informações')} color='gray'></Button>
                        </View>
                    </View>
                    <View style={{backgroundColor:'#101010'}}>
                        <Image style={{width:120,height:120}}  source={require("./assets/Kit_suspensao_a_ar.jpg")}></Image>
                        <Text style={{fontSize:15,color:'white'}}>Kit Suspensão a ar</Text>
                        <Text style={{fontSize:15,color:'white'}}>R$1500</Text>
                        <Button title={"Adicionar no \n carrinho"} onPress={()=>this.gerenciaProd('kit suspensão a ar','R$1500')}></Button>
                        <View style={{marginTop:10}}>
                            <Button title='Ver informações' onPress={()=>this.props.navigation.navigate('Informações')} color='gray'></Button>
                        </View>
                    </View>
                    <View style={{backgroundColor:'#101010'}}>
                        <Image style={{width:120,height:120}}  source={require("./assets/Kit_suspensao_a_ar.jpg")}></Image>
                        <Text style={{fontSize:15,color:'white'}}>Kit Suspensão a ar</Text>
                        <Text style={{fontSize:15,color:'white'}}>R$1500</Text>
                        <Button title={"Adicionar no \n carrinho"} onPress={()=>this.gerenciaProd('kit suspensão a ar','R$1500')}></Button>
                        <View style={{marginTop:10}}>
                            <Button title='Ver informações' onPress={()=>this.props.navigation.navigate('Informações')} color='gray'></Button>
                        </View>
                    </View>
                </View>
               
        </ScrollView>
                
          <View style={{backgroundColor:'black',flexDirection:'row',justifyContent:'space-around'}}>
            <TouchableOpacity style={{backgroundColor:'black',flexDirection:'row',justifyContent:'space-around'}}><Image style={{width:50,height:50}} source={require("./assets/icone_casa.jpg")}></Image></TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'black',flexDirection:'row',justifyContent:'space-around'}} onPress={()=> this.props.navigation.navigate('Lista de Produtos')} ><Image style={{width:50,height:50}}  source={require("./assets/logo_sacola.png")}></Image></TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'black',flexDirection:'row',justifyContent:'space-around'}} onPress={()=>this.props.navigation.navigate('Carrinho',{produto:this.state.array,default:null })}><Image style={{width:50,height:50}}  source={require("./assets/icone_carro.png")}></Image></TouchableOpacity>
        </View>      
        
         

</View>
        
  );
  
}
  
}
