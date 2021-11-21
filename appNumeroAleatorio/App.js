import { isNodesEquivalent } from '@babel/types';
import React, { Component } from 'react';
import { View, Text, TextInput, SafeAreaView, Pressable, Image, Keyboard } from 'react-native';
import { styles } from './styles';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numero: '',
      resultado: 0,
      msgErro: '',
      mensagem: '',
    };

    this.setNumero = this.setNumero.bind(this);
    this.verificar = this.verificar.bind(this);

  }

  setNumero(valor) {
    this.setState({ numero: valor, msgErro: '', resultado: 0.0 });
  };

  verificar() {
    var msgErro = '',
      mensagem = '',
      valor = 0;

    console.log(this.state.numero);
    if (this.state.numero.toString() == '' || isNaN(Number(this.state.numero))
      || Number(this.state.numero) < 0 || Number(this.state.numero) > 10) {
      msgErro = 'Informe um numero válido'
    }

    if (msgErro == '') {
      valor = Math.floor(Math.random() * 10);

      if (valor == this.state.numero) {
        mensagem = valor.toString() + '\nVocê adivinhou!!!\nParabéns!! ';

      } else {
        mensagem = valor.toString() + '\nTente novamente!!';
      }
    }

    this.setState({
      resultado: valor,
      msgErro: msgErro,
      mensagem: mensagem,
    });

    Keyboard.dismiss();
  }

  render() {
    return (
      <SafeAreaView style={styles.imageContainer}>
        <View style={styles.container}>
          <View style={styles.top}>
            <Text style={styles.tituloApp}>Jogo do Nº Aleatório</Text>
            <LogoImage />
          </View>

          <View style={styles.middle}>
            <Text style={styles.textLabel}>Pense em um nº de 0 a 10</Text>
            <TextInput
              style={styles.input}
              placeholder="Informe o número aqui"
              placeholderTextColor='darkgray'
              onChangeText={this.setNumero}
              keyboardType="numeric"
            />
            <Text style={styles.textoErro}>{this.state.msgErro}</Text>
          </View>

          <View style={styles.middle}>
            <Pressable style={styles.button} onPress={this.verificar}>
              <Text style={styles.texto}>Verificar</Text>
            </Pressable>

            <Text style={styles.tituloApp}>{this.state.mensagem}</Text>
          </View>
        </View>
      </SafeAreaView >
    );
  }
}

class LogoImage extends Component {

  render() {
    return (
      <Image
        source={require('./images/adivinha.png')}
        style={{
          //width: 180,
          //height: 180,
          alignSelf: 'center',
          resizeMode: 'cover',
        }}
      />
    );
  }
}

export default App;
