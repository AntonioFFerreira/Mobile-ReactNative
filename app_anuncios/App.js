import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
 
class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={{fontSize:28}}>App de Anúncios com Scroll Horizontal</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.box1}>
            <Text style={{fontSize:22, textAlign:'center'}}> Anúncio 1</Text>
            <Text style={{fontSize:22, textAlign:'center'}}> Descricão do produto</Text>
          </View>
          <View style={styles.box2}>
            <Text style={{fontSize:22, textAlign:'center'}}> Anúncio 2</Text>
            <Text style={{fontSize:22, textAlign:'center'}}> Descricão do produto</Text>
          </View>
          <View style={styles.box3}>
            <Text style={{fontSize:22, textAlign:'center'}}> Anúncio 3</Text>
            <Text style={{fontSize:22, textAlign:'center'}}> Descricão do produto</Text>  
          </View>
          <View style={styles.box4}>
          <Text style={{fontSize:22, textAlign:'center'}}> Anúncio 4</Text>
            <Text style={{fontSize:22, textAlign:'center'}}> Descricão do produto</Text>
          </View>
         
        </ScrollView>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 10,
    marginTop:50
    
  },
  box1:{
    backgroundColor: 'lightblue',
    height: 250,
    width: 200,
    margin:5
  },
  box2:{
    backgroundColor: 'lightgreen',
    height: 250,
    width: 200,
    margin:5
  },
  box3:{
    backgroundColor: 'lightblue',
    height: 250,
    width: 200,
    margin:5
  },
  box4:{
    backgroundColor: 'lightgreen',
    height: 250,
    width: 200,
    margin:5
  }
})
 
export default App;
