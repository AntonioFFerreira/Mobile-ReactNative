import React, { Component } from 'react';
import { StyleSheet, Text, View, Switch, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      status: 0,
      status2: 0,
    };
  };

    async componentDidMount(){
    await AsyncStorage.getItem('status').then((value)=> {
      this.setState({status: JSON.parse(value)});
    })

    await AsyncStorage.getItem('status2').then((value2)=> {
      this.setState({status2: JSON.parse(value2)});
    })
  }
 
  async componentDidUpdate(_, prevState){
    const status = this.state.status;
    const status2 = this.state.status2;
 
    // if(prevState !== status){
      await AsyncStorage.setItem('status', JSON.stringify(status));
    // }

    // if(prevState !== status2){
      await AsyncStorage.setItem('status2', JSON.stringify(status2));
    // }
  }


  render() {


    return (
      <View style={{backgroundColor: `${(this.state.status == 1) ? "black" : "white"}`,
      paddingTop: 50
      }}
      >
      <ScrollView>
        <Text style={{fontSize: `${(this.state.status2 == 1) ? 35 : 25}`,
          textAlign: 'center',
          color: `${(this.state.status == 1) ? "white" : "black"}`,
      }}>Quotes Madonna</Text>
        

        <View style={styles.inline}>

            <View style={{flexDirection: 'row'}}>
              <Feather style={{marginRight: 10, color: `${(this.state.status == 1) ? "white" : "black"}`}} name='moon' size={35} />
              <Switch
                value={(this.state.status == 1) ? true : false}
                onValueChange={ (valorSwitch) => this.setState({status: valorSwitch ? 1 : 0})}
              />
            </View>

            <View style={{flexDirection: 'row'}}>
              <MaterialIcons style={{marginRight: 10, color: `${(this.state.status == 1) ? "white" : "black"}`,}} name="format-size" size={35} />
              <Switch
                value={(this.state.status2 == 1) ? true : false}
                onValueChange={ (valorSwitch) => this.setState({status2: valorSwitch ? 1 : 0})}
              />
            </View>
        
        </View>
          <Text style={{fontSize: `${(this.state.status2 == 1) ? 20 : 15}`,
          color: `${(this.state.status == 1) ? "white" : "black"}`,
          textAlign: 'center', fontStyle: 'italic',
          }}>
              “I'm tough, I'm ambitious, and I know exactaly what I want. {"\n"}
              If that makes me a bitch, okay!” {"\n"}
            </Text>
            <Text style={{fontSize: `${(this.state.status2 == 1) ? 20 : 15}`,
            color: `${(this.state.status == 1) ? "white" : "black"}`,
              textAlign: 'center', fontWeight: '700', marginBottom: 50,
            }}>
              - Madonna
            </Text>

            <Text style={{fontSize: `${(this.state.status2 == 1) ? 20 : 15}`,
              color: `${(this.state.status == 1) ? "white" : "black"}`,
              textAlign: 'center', fontStyle: 'italic',
            }}>
              “I'm tough, I'm ambitious, and I know exactly what I want. {"\n"}
              If that makes me a bitch, okay.” {"\n"}
            </Text>
            <Text style={{fontSize: `${(this.state.status2 == 1) ? 20 : 15}`,
              color: `${(this.state.status == 1) ? "white" : "black"}`,
              textAlign: 'center', fontWeight: '700', marginBottom: 50,
            }}>
              - Madonna
            </Text>

            <Text style={{fontSize: `${(this.state.status2 == 1) ? 20 : 15}`,
              color: `${(this.state.status == 1) ? "white" : "black"}`,
              textAlign: 'center', fontStyle: 'italic',
            }}>
            “To be brave is to love someone unconditionally, {"\n"} without expecting anything in return. 
            To just give. {"\n"} That takes courage, because we don't {"\n"} want to fall on our faces or leave ourselves open to hurt.”{"\n"}
            </Text>
            <Text style={{fontSize: `${(this.state.status2 == 1) ? 20 : 15}`,
              color: `${(this.state.status == 1) ? "white" : "black"}`,
              textAlign: 'center', fontWeight: '700', marginBottom: 50,
            }}>
              - Madonna
            </Text>

            <Text style={{fontSize: `${(this.state.status2 == 1) ? 20 : 15}`,
              color: `${(this.state.status == 1) ? "white" : "black"}`,
              textAlign: 'center', fontStyle: 'italic',
            }}>
            “Poor is the man whose pleasure depends {"\n"} on the permission of another.”{"\n"}
            </Text>
            <Text style={{fontSize: `${(this.state.status2 == 1) ? 20 : 15}`,
              color: `${(this.state.status == 1) ? "white" : "black"}`,
              textAlign: 'center', fontWeight: '700', marginBottom: 50,
            }}>
              - Madonna!
            </Text>       
            </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  }, 
  titulo: {
    fontSize: 25,
    textAlign: 'center',
  },
  inline: {
    flexDirection:'row',
    justifyContent: 'space-around',
    paddingTop: 50,
    paddingBottom: 50
  },
});

export default App;