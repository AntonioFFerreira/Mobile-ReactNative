import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';




import React, {useState} from 'react';

import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';




export default function App() {
 
 
 //1 passo é criar as variaveis
var [totalReal, setTotalReal] = useState('');

var [totalDollar, setTotalDollar] = useState('');

var [cotacao, setCotacao] = useState('');

var [mostrar, setMostrar] = useState(false);
//2 passo - é criar a funcao que calcular
function CalcularTotal(){

  //TOTAL DOLLAR =  QTDREAL / COTAÇÃO DO DIA DO DOLLAR
  totalDollar = parseFloat(totalReal) / parseFloat(cotacao);
  
  setTotalDollar(totalDollar);
 
 
  setMostrar(true);

  //alert("O Total em Dollar será: " + totalDollar.toFixed(2));
mostrar == true &&
            <TextInput style={styles.campo}  value={totalDollar}/> 

}
 


  return (
    <View style={styles.container}>
       <Text style={styles.titulo}>Conversor de Moeda</Text>

       <TextInput style={styles.campo} placeholder="Total em Reais.." 
       keyboardType="numeric"
       onChangeText={(totalReal) => setTotalReal(totalReal)}
       />

       <TextInput style={styles.campo} placeholder="Cotação do Dia"
        onChangeText={(cotacao) => setCotacao(cotacao)}    
        keyboardType="numeric"/>
      
        {
                    
        
        }

       <TouchableOpacity style={styles.botao} onPress={CalcularTotal}>
           <Text>CALCULAR</Text>
       </TouchableOpacity>
   
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E8B57"
  },

  titulo:{
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 40,
    fontSize: 30,
    color: "#FFF"
  },

  campo:{
    backgroundColor: "#FFF",
    borderRadius: 30,
    margin: 15,
    padding: 10,
    fontSize: 15,
    color: "#006400"
  },

  botao:{
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#FFD700',
    padding: 10,
  },


  
});