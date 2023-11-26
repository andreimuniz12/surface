import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity,ScrollView,Image,Button,FlatList} from 'react-native';
import styles from './Estilo';

export default class TelaLista extends React.Component {
    constructor(props){
        super(props)
        this.state = {array:[]}
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
          
        <View style={{flex:4,backgroundColor:'black'}}>
            <Text style={{fontSize:6,color:'white', marginLeft:20}}>MELHORES PEÇAS E SUPENSÕES PARA SEU CARRO</Text>
        </View>

            <ScrollView>

                <View style={{flex:1,backgroundColor:'#101010'}}>
                    <Image  style={{flex:1,width:150,height:150,marginLeft:150}} source={require("./assets/SURFACE_LOGO.png")}></Image>
                </View>

                <View style={{flex:1,backgroundColor:'#101010'}}>
                    <Text style={{fontSize:30,color:'white',marginLeft:80}}>MELHORES PEÇAS E SUPENSÕES</Text>
                </View>

                <View style={{flex:3,flexDirection:'row',backgroundColor:'#101010',justifyContent:'center',flexWrap:"wrap"}}>

                    <View style={{backgroundColor:'#101010',marginTop:60,borderRadius:10,borderColor:'white',borderWidth:2}}>
                        <Image style={{width:155,height:120}}  source={require("./assets/suspensao.jpg")}></Image>
                        <Text style={{fontSize:15,color:'white'}}>Kit Suspensão a ar</Text>
                        <Text style={{fontSize:15,color:'white'}}>R$1500</Text>
                        <Button title={"Adicionar no \n carrinho"} onPress={()=>this.gerenciaProd('kit suspensão a ar','R$1500')}></Button>
                        <View style={{marginTop:10}}>
                           <Button title='Ver informações' onPress={()=>this.props.navigation.navigate('Informações')} color='gray'></Button>
                        </View> 
                    </View>
                    
                    <View style={{backgroundColor:'#101010',marginLeft:50,marginTop:60,borderRadius:10,borderColor:'white',borderWidth:2}}>
                        <Image style={{width:155,height:120}}  source={require("./assets/bolsas.png")}></Image>
                        <Text style={{fontSize:15,color:'white'}}>Kit 4 bolsas a ar</Text>
                        <Text style={{fontSize:15,color:'white'}}>R$800</Text>
                        <Button title={"Adicionar no \n carrinho"} onPress={()=>this.gerenciaProd('Kit  4 bolsas a ar ','R$800')}></Button>
                        <View style={{marginTop:10}}>
                           <Button title='Ver informações' onPress={()=>this.props.navigation.navigate('Informações')} color='gray'></Button>
                        </View>
                    </View>
                    
                    <View style={{backgroundColor:'#101010',marginTop:60,borderRadius:10,borderColor:'white',borderWidth:2}}>
                        <Image style={{width:155,height:120}}  source={require("./assets/Kit_suspensao3.jpg")}></Image>  
                        <Text style={{fontSize:15,color:'white'}}>Bolsa de suspensão</Text>
                        <Text style={{fontSize:15,color:'white'}}>R$200</Text>
                        <Button title={"Adicionar no \n carrinho"} onPress={()=>this.gerenciaProd('Bolsa de suspensão','R$200')}></Button>
                        <View style={{marginTop:10}}>
                           <Button title='Ver informações' onPress={()=>this.props.navigation.navigate('Informações')} color='gray'></Button>
                        </View>  
                    </View>

                    <View style={{backgroundColor:'#101010',marginLeft:50,marginTop:60,borderRadius:10,borderColor:'white',borderWidth:2}}>
                        <Image style={{width:155,height:120}}  source={require("./assets/suspensao.jpg")}></Image>
                        <Text style={{fontSize:15,color:'white'}}>Suspensão a ar vv2</Text>
                        <Text style={{fontSize:15,color:'white'}}>R$2500</Text>  
                        <Button title={"Adicionar no \n carrinho"} onPress={()=>this.gerenciaProd('Suspensão a ar vv2 ','R$2500')}></Button>
                        <View style={{marginTop:10}}>
                           <Button title='Ver informações' onPress={()=>this.props.navigation.navigate('Informações')} color='gray'></Button>
                        </View>
                    </View>

                    <View style={{backgroundColor:'#101010',marginTop:60,borderRadius:10,borderColor:'white',borderWidth:2}}>
                        <Image style={{width:155,height:120}}  source={require("./assets/controles_black.jpg")}></Image>
                        <Text style={{fontSize:15,color:'white'}}>Controles central v1</Text>
                        <Text style={{fontSize:15,color:'white'}}>R$80</Text>
                        <Button title={"Adicionar no \n carrinho"} onPress={()=>this.gerenciaProd('Controles central v1','R$80')}></Button>
                        <View style={{marginTop:10}}>
                           <Button title='Ver informações' onPress={()=>this.props.navigation.navigate('Informações')} color='gray'></Button>
                        </View>
                    </View>
                    <View style={{backgroundColor:'#101010',marginLeft:50,marginTop:60,borderRadius:10,borderColor:'white',borderWidth:2}}>
                        <Image style={{width:155,height:120}}  source={require("./assets/controles_white.jpg")}></Image>
                        <Text style={{fontSize:15,color:'white'}}>Controles central v2 </Text>
                        <Text style={{fontSize:15,color:'white'}}>R$80</Text>
                        <Button title={"Adicionar no \n carrinho"} onPress={()=>this.gerenciaProd('Controles central v2','R$80')}></Button>
                        <View style={{marginTop:10}}>
                           <Button title='Ver informações' onPress={()=>this.props.navigation.navigate('Informações')} color='gray'></Button>
                        </View>
                    </View>

                    <View style={{backgroundColor:'#101010',marginTop:60,borderRadius:10,borderColor:'white',borderWidth:2}}>
                        <Image style={{width:155,height:120}}  source={require("./assets/kit_completo.jpg")}></Image>
                        <Text style={{fontSize:15,color:'white'}}>Kit Completo</Text>
                        <Text style={{fontSize:15,color:'white'}}>R$3000</Text>
                        <Button title={"Adicionar no \n carrinho"} onPress={()=>this.gerenciaProd('Kit Completo','R$3000')}></Button>
                        <View style={{marginTop:10}}>
                           <Button title='Ver informações' onPress={()=>this.props.navigation.navigate('Informações')} color='gray'></Button>
                        </View>
                    </View>

                    <View style={{backgroundColor:'#101010',marginLeft:50,marginTop:60,borderRadius:10,borderColor:'white',borderWidth:2}}>
                        <Image style={{width:155,height:120}}  source={require("./assets/Kit_suspensao_a_ar.jpg")}></Image>
                        <Text style={{fontSize:15,color:'white'}}>Kit Suspensão a ar</Text>
                        <Text style={{fontSize:15,color:'white'}}>R$1500</Text>
                        <Button title={"Adicionar no \n carrinho"} onPress={()=>this.gerenciaProd('kit suspensão a ar','R$1500')}></Button>
                        <View style={{marginTop:10}}>
                           <Button title='Ver informações' onPress={()=>this.props.navigation.navigate('Informações')} color='gray'></Button>
                        </View>
                    </View>
                            
                    <View style={{backgroundColor:'#101010',marginTop:60,borderRadius:10,borderColor:'white',borderWidth:2}}>
                        <Image style={{width:155,height:120}}  source={require("./assets/Kit_suspensao_a_ar.jpg")}></Image>
                        <Text style={{fontSize:15,color:'white'}}>Kit Suspensão a ar</Text>
                        <Text style={{fontSize:15,color:'white'}}>R$1500</Text>
                        <Button title={"Adicionar no \n carrinho"} onPress={()=>this.gerenciaProd('kit suspensão a ar','R$1500')}></Button>
                        <View style={{marginTop:10}}>
                           <Button title='Ver informações' onPress={()=>this.props.navigation.navigate('Informações')} color='gray'></Button>
                        </View>
                    </View>
                    
                    <View style={{backgroundColor:'#101010',marginLeft:50,marginTop:60,borderRadius:10,borderColor:'white',borderWidth:2}}>
                        <Image style={{width:155,height:120}}  source={require("./assets/Kit_suspensao_a_ar.jpg")}></Image>
                        <Text style={{fontSize:15,color:'white'}}>Kit Suspensão a ar</Text>
                        <Text style={{fontSize:15,color:'white'}}>R$1500</Text>
                        <Button title={"Adicionar no \n carrinho"} onPress={()=>this.gerenciaProd('kit suspensão a ar','R$1500')}></Button>
                        <View style={{marginTop:10}}>
                           <Button title='Ver informações' onPress={()=>this.props.navigation.navigate('Informações')} color='gray'></Button>
                        </View>
                    </View>
                    <View style={{backgroundColor:'#101010',marginTop:60,borderRadius:10,borderColor:'white',borderWidth:2}}>
                        <Image style={{width:155,height:120}}  source={require("./assets/Kit_suspensao_a_ar.jpg")}></Image>
                        <Text style={{fontSize:15,color:'white'}}>Kit Suspensão a ar</Text>
                        <Text style={{fontSize:15,color:'white'}}>R$1500</Text>
                        <Button title={"Adicionar no \n carrinho"} onPress={()=>this.gerenciaProd('kit suspensão a ar','R$1500')}></Button>
                        <View style={{marginTop:10}}>
                           <Button title='Ver informações' onPress={()=>this.props.navigation.navigate('Informações')} color='gray'></Button>
                        </View>
                    </View>
                    <View style={{backgroundColor:'#101010',marginLeft:50,marginTop:60,borderRadius:10,borderColor:'white',borderWidth:2}}>
                        <Image style={{width:155,height:120}}  source={require("./assets/Kit_suspensao_a_ar.jpg")}></Image>
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
                <TouchableOpacity style={{backgroundColor:'black',flexDirection:'row',justifyContent:'space-around'}} onPress={()=>this.props.navigation.navigate('Surface Suspensões')}><Image style={{width:50,height:50}} source={require("./assets/icone_casa.jpg")}></Image></TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'black',flexDirection:'row',justifyContent:'space-around'}} onPress={()=> this.props.navigation.navigate('Lista de Produtos')} ><Image style={{width:50,height:50}}  source={require("./assets/logo_sacola.png")}></Image></TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'black',flexDirection:'row',justifyContent:'space-around'}} onPress={()=>this.props.navigation.navigate('Carrinho',{produto:this.state.array,default:null,})}><Image style={{width:50,height:50}}  source={require("./assets/icone_carro.png")}></Image></TouchableOpacity>
        </View> 

        </View>
     
  );
  
}
  
}
