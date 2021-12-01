
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

 const [primeiro, setPrimeiro] = useState(0);
 const [segundo, setSegundo] = useState(0);
 const x = parseFloat(primeiro);
 const y = parseFloat(segundo);

 const f = x * y;

 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>#Calculadora Força</Text>
      <Text style={styles.oi}>Digite a massa: </Text>
     <TextInput keyboardType="decimal-pad" style={styles.input} value={String(primeiro)} onChangeText ={setPrimeiro} />
     <Text style={styles.oi}>Digite a aceleração: </Text>
     <TextInput keyboardType="decimal-pad" style={styles.input} value={String(segundo)} onChangeText ={setSegundo} />

     <Text style={ styles.subtitle}>Resultado</Text>
     <Text style={styles.resul}>{ f }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F4F4F',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
title:{
    fontSize: 40,
    marginHorizontal: 50,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    
    
       
},
input:{
  textAlign: 'center',
  alignSelf: 'stretch',
  marginHorizontal: 30,
  height: 50,
  fontSize: 40,
  fontWeight: '100',
  backgroundColor: '#C0C0C0',
  marginTop: 40,

},
subtitle:{
  
  fontWeight: 'bold',
  marginTop: 40,
  fontSize: 40,
  color: '#DDD',
  marginHorizontal: 50,
  textAlign: 'center',
  
  
},
resul:{
  textAlign: 'center',
  alignSelf: 'stretch',
  marginHorizontal: 30,
  height: 50,
  fontSize: 40,
  fontWeight: '500',
  backgroundColor: '#7FFFD4',
  marginTop: 40,
},
oi:{
  
  marginTop: 38,
  fontSize: 15,
  color: 'white',
  marginHorizontal: 5,
  textAlign: 'center',
  minHeight: 6,

},
});
