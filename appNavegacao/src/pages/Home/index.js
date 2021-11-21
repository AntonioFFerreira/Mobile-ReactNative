import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  function irSobre(){
    navigation.navigate('Sobre', { nome: 'Rosangela', email:'rosangela@gmail.com' } );
  }

 return (
   <View>
     <Text>Home</Text>
     <Text>Bem vindo a tela home!!</Text>
     <Button
     title="Ir para Sobre"
     onPress={irSobre}
     />
   </View>
  );
}