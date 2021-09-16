import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function App(){
  const[alcool, setAlcool] = useState('');
  const[gasolina, setGasolina] = useState('');

  function handleSubmit(){
    const combustivel = alcool / gasolina;
        
    if(combustivel < 0.7){
      alert('Abasteça com alcool.  ' + combustivel.toFixed(2));
      }else if(combustivel >= 0.7){
       alert('Abasteça com gasolina. '+ combustivel.toFixed(2));
      }
  }


  return(
    <View style = {styles.container}> 
      <Text style = {styles.title}>Calcule Combustível</Text>
      <Text style = {styles.descriçao}>verfique se compensa abastecer com alcool ou gasolina!</Text>

      <TextInput 
      style = {styles.input}
      value={alcool}
      onChangeText={ (alcool) => setAlcool(alcool)}
      placeholder="preço do alcool"
      keyboardType="numeric"
      />

    <TextInput 
      style = {styles.input}
      value={gasolina}
      onChangeText={ (gasolina) => setGasolina(gasolina)}
      placeholder="preço da gasolina"
      keyboardType="numeric"
      />


      <TouchableOpacity
      style={styles.button}
      onPress={handleSubmit}
      >
        <Text sytle={styles.buttonText}>Calcular </Text>


      </TouchableOpacity>



     
    </View>

  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    
  },
  title:{
    textAlign:'center',
    fontSize: 30,
    color: 'blue',
    fontWeight: 'bold',
    marginTop: 40
  },
  descriçao:{
    textAlign:'center',
    fontWeight: 'bold',
    fontSize:18,
    color: 'black'
  },
  input:{
    backgroundColor: 'gray',
    fontWeight: 'bold',
    fontSize:16,
    borderRadius: 10,
    margin: 15,
    padding:10,
    color: 'white'
  },

  button:{
    justifyContent:'center',
    alignItems:'center',
    margin:15,
    backgroundColor:'lightblue',
    padding:10,
    borderRadius: 10,
     },
  buttonText:{
    fontSize:32,
    color:'blue',
  }

});