import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    backgroundColor: '#fcfcfc',
  },

  container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#fcfcfc',
  },

  top: {
 //   flex: 0.5,
   // justifyContent: "center",
    marginTop: 5,
  },

  middle: {
 //   flex: 0.7,
  },

  bottom: {
 //   flex: 0.3,
    justifyContent: "center",
  },

  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "salmon",
    alignSelf: "center",
    marginBottom: 60,
    minWidth: "90%",
  },

  tituloApp: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: "bold",
 //   color: 'white',
    fontFamily: "Cochin",
    padding: 10,
  },

  textLabel: {
    padding: 20,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Cochin",
  },

  input: {
    height: 60,
    textAlign: 'center',
    borderWidth: 0,
    fontWeight: "bold",
    fontSize: 25,
    padding: 10,
  },

  texto: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold",
  },

  textoErro: {
    fontSize: 20,
    textAlign: 'center',
    color: 'red',
    fontWeight: "bold",
    marginBottom: 20,
  },  

  image: {
    flex: 1,
  },

  baseText: {
    fontFamily: "Cochin"
  }
});

export { styles };
