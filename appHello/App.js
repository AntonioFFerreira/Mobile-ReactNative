import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: 'Joseffe'
    };
    this.entrar = this.entrar.bind(this);
  }
  
  entrar(nomeEnviado){
    this.setState({
      nome: nomeEnviado
    });
  }

  render(){
    return(
      <View style={{ marginTop: 20 }}>

        <Button title="Entrar" onPress={() => this.entrar('Joseffe B. Oliveira')} />

        <Text style={{fontSize: 28, color: 'red', textAlign: 'center'}}>
          {this.state.nome}
        </Text>
      </View>
    )
  }
}

export default App;
