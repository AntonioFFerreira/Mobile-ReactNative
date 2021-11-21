import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
 
class App extends Component{
  render(){
 
    let nome = 'Rosangela';
    let img = 'https://avatars.githubusercontent.com/u/68075168?v=4';
 
    return(
      <View style={{margin: 10}}>
        <Text style={{color: 'blue', fontSize: 25, margin: 20}}>Exercício - #App 01</Text>
         
        <Image
          source={{ uri: img }}
          style={{ width: 250, height: 250, margin:60}}
        />
      <View>
        <Text style={{ fontSize: 15 }}>nome:</Text>
          <Text style={{ fontSize: 25 }}>{nome}</Text>
        </View>
        <View>
        <Text style={{ fontSize: 15 }}>Matrícula FATEC RL:</Text>
         
        </View>
        <View>
        <Text style={{ fontSize: 15 }}>Formação:</Text>
          <Text style={{ fontSize: 25 }}>estudante.</Text>
        </View>
        <View>
        <Text style={{ fontSize: 15 }}>Projetos:</Text>
          <Text style={{ fontSize: 25 }}>Aprendendo sistemas para internet.</Text>
        </View>
      </View>
    )
  }
}
 
export default App;