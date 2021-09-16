import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function App(){
  const[peso, setPeso] = useState('');
  const[altura, setAltura] = useState('');

  function handleSubmit(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    
    if(imc < 18.6){
      alert('Atenção! você está abaixo do peso.  ' + imc.toFixed(2));
      }else if(imc >= 18.6 && imc < 24.9){
       alert('Peso Ideal!!! ' + imc.toFixed(2));
      }else if(imc >= 24.9 && imc < 34.9){
        alert('Levemente acima do peso. ' + imc.toFixed(2));
      }
  }


  return(
    <View style = {styles.container}> 
      <Text style = {styles.title}>Calcule seu IMC</Text>
      <Text style = {styles.descriçao}>verfique a sua saúde!</Text>

      <TextInput 
      style = {styles.input}
      value={peso}
      onChangeText={ (peso) => setPeso(peso)}
      placeholder="Peso em Kg"
      keyboardType="numeric"
      />

    <TextInput 
      style = {styles.input}
      value={altura}
      onChangeText={ (altura) => setAltura(altura)}
      placeholder="Altura em cm"
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