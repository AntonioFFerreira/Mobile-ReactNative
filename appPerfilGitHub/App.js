import React, { Component } from 'react';

import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import api from './src/services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      perfil: [],
      perfilValor: '',
      valorRetorno: ''
    }
    this.retorno = this.retorno.bind(this);
  }

  async retorno() {
    let valorPerfil = this.state.perfilValor;
    const response = await api.get(valorPerfil);
    this.setState({
      perfil: response.data
    });
    this.setState({
      valorRetorno: `
        ID: ${this.state.perfil.id} \n
        NOME: ${this.state.perfil.name} \n
        REPOSITÓRIOS: ${this.state.perfil.public_repos} \n
        SEGUIDORES: ${this.state.perfil.followers} \n
        SEGUINDO: ${this.state.perfil.following} \n
      `
    })
    Keyboard.dismiss();
  }


  render() {
  
  let img = this.state.perfil.avatar_url ? this.state.perfil.avatar_url : "https://polybit-apps.s3.amazonaws.com/stdlib/users/github/profile/image.png?1564539704050"

  return (
    <View style={styles.container}>

      <View style={styles.row}> 
        <Text style={styles.titulo}>GitHub Profile </Text>
        <Feather style={{marginLeft: 10}} name='github' size={35} />
      </View>

      <View style={styles.row}>
          <TextInput 
            placeholder="Informe o usuário: "
            style={styles.input}
            onChangeText={(value) => this.setState({perfilValor: value})}
          />

          <TouchableOpacity onPress={this.retorno}>
            <Feather style={{marginLeft: 10}} name='plus' size={40} />
          </TouchableOpacity>
      </View>      

      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
      }}>
      <Image source={{uri: img}} 
        style= {{width: 300, height: 300, justifyContent: 'center'}} 
      />
      </View>

      <Text style={{textAlign: 'center'}}>
        {this.state.valorRetorno}
      </Text>

    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 50
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  input:{
    height: 45,
    borderWidth: 1,
    fontSize: 20,
    padding: 10,
    width: 300,
  }
});
export default App;