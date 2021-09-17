import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function App(){
  const[x, setX] = useState('');
  const[y, setY] = useState('');

  function handleSubmit(){
    
    const resultado = x * y;
    alert('O resultado da multiplicação é = ' + resultado.toFixed(2));
     
  }


  return(
    <View style = {styles.container}> 
      <Text style = {styles.title}>Calcule a multplicação entre X e Y</Text>
      <Text style = {styles.descriçao}>digite os valores abaixo!</Text>

      <TextInput 
      style = {styles.input}
      value={x}
      onChangeText={ (x) => setX(x)}
      placeholder="digite o valor de X"
      keyboardType="numeric"
      />

    <TextInput 
      style = {styles.input}
      value={y}
      onChangeText={ (y) => setY(y)}
      placeholder="digite o valor de Y"
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
    fontWeight: 'bold'
  }

});