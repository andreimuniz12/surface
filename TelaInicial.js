import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableOpacity,Button} from 'react-native';
import styles from './Estilo';
import { ScrollView } from 'react-native-gesture-handler';
import { Link } from '@react-navigation/native';

export default class TelaInicial extends React.Component {
    constructor(props){
        super(props)
        this.state = {array:[],img:Link}     
    }
   gerenciaProd(descricao,preco,img){
        var obj = {
            descricao:descricao,
            preco:preco,
            img:img,
            id:this.state.array.length
        }
        this.setState({array:[...this.state.array,obj]})
   }                                                                        
   render(){
    return(  
        <View style={{flex:1,backgroundColor:'#101010'}}>
            <View style={{backgroundColor:'#101010',flexDirection:'row'}}>
                <Text style={{fontSize:15,marginLeft:170,color:'white'}}>BEM VINDO FAÇA O</Text>
                <TouchableOpacity style={{alignItems:"center",marginLeft:10,backgroundColor:'#101010'}} onPress={()=>this.props.navigation.navigate('Login')}>
                    <Text style={{fontSize:15,color:'white'}}>LOGIN</Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View style={{flex:1,backgroundColor:'#101010'}}>
                    <Image  style={{flex:1,width:150,height:150,marginLeft:150}} source={require("./assets/SURFACE_LOGO.png")}></Image>
                </View>
                <View style={{flex:1,backgroundColor:'#101010'}}>
                    <Text style={{fontSize:23,color:'white',marginLeft:80}}>PEÇAS EM PROMOÇÃO</Text>
                </View>

           
                <View style={{flex:3,flexDirection:'row',backgroundColor:'#101010',justifyContent:'center',flexWrap:"wrap",marginTop:20}}>
                        {/*Lista de produtos em promoção */}

                <View style={{backgroundColor:'black',borderRadius:10,borderColor:'white',borderWidth:2}}>
                        <Image style={{width:155,height:120}}  source={require("./assets/Kit_suspensao_a_ar.jpg")}></Image>
                        <Text style={{fontSize:15,color:'white'}}>Kit Suspensão a ar</Text>
                        <Text style={{fontSize:15,color:'white'}}>R$1500</Text>
                        <Button title={"Adicionar no \n carrinho"} onPress={()=>this.gerenciaProd('kit suspensão a ar','R$1500','Kit_suspensao_a_ar.jpg')}></Button>  
                        <View style={{marginTop:10}}>  
                            <Button title='Ver informações' onPress={()=>this.props.navigation.navigate("Informações")} color='gray'></Button>
                        </View>    
                </View> 

                    <View style={{backgroundColor:'#101010',marginLeft:50,borderRadius:10,borderColor:'white',borderWidth:2}}>
                        <Image style={{width:155,height:120}}  source={require("./assets/suspensao_2.jpg")}></Image>
                        <Text style={{fontSize:15,color:'white'}}>Kit bolsa</Text>
                        <Text style={{fontSize:15,color:'white'}}>R$600</Text>
                        <Button title={"Adicionar no \n carrinho"} onPress={()=>this.gerenciaProd('kit bolsa','R$600',"./assets/suspensao_2.jpg")}></Button>
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
                    
                    <View style={{backgroundColor:'#101010',height:20,width:385,marginLeft:50,marginTop:30}}>
                        <Text style={{fontSize:17,color:'white',marginLeft:50}}>PRODUTOS MAIS VENDIDOS</Text>
                    </View>

                    <View style={{backgroundColor:'#101010',marginTop:60,borderRadius:10,borderColor:'white',borderWidth:2}}>
                        <Image style={{width:155,height:120}}  source={require("./assets/bolsas_especificas.jpg")}></Image>
                        <Text style={{fontSize:15,color:'white'}}>Kit Suspensão a ar</Text>
                        <Text style={{fontSize:15,color:'white'}}>R$1900</Text>
                        <Button title={"Adicionar no \n carrinho"} onPress={()=>this.gerenciaProd('kit suspensão a ar','R$1900')}></Button>
                        <View style={{marginTop:10}}>  
                            <Button title='Ver informações' onPress={()=>this.props.navigation.navigate("Informações")} color='gray'></Button>
                        </View>   
                    </View> 

                    <View style={{backgroundColor:'#101010',marginLeft:50,marginTop:60,borderRadius:10,borderColor:'white',borderWidth:2}}>
                        <Image style={{width:155,height:120}}  source={require("./assets/controles_white.jpg")}></Image>    
                        <Text style={{fontSize:15,color:'white'}}>Controles central v2</Text> 
                        <Text style={{fontSize:15,color:'white'}}>R$80</Text> 
                        <Button title={"Adicionar no \n carrinho"} onPress={()=>this.gerenciaProd('Controles central v2','R$80')}></Button>
                        <View style={{marginTop:10}}>
                            <Button title='Ver informações' onPress={()=>this.props.navigation.navigate('Informações')} color='gray'></Button>
                        </View>
                    </View> 

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
                <TouchableOpacity style={{backgroundColor:'black',flexDirection:'row',justifyContent:'space-around'}}><Image style={{width:50,height:50}} source={require("./assets/icone_casa.jpg")}></Image></TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'black',flexDirection:'row',justifyContent:'space-around'}} onPress={()=> this.props.navigation.navigate('Lista de Produtos')} ><Image style={{width:50,height:50}}  source={require("./assets/logo_sacola.png")}></Image></TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'black',flexDirection:'row',justifyContent:'space-around'}} onPress={()=>this.props.navigation.navigate('Carrinho',{produto:this.state.array,default:null })}><Image style={{width:50,height:50}}  source={require("./assets/icone_carro.png")}></Image></TouchableOpacity>
          </View>      

</View>
        
  );
  
}
  
}
