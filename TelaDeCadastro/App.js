
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

export default function App() {

const [nome, setNome] = useState('');
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');

const cadastro = () => {
  alert('funcionando');
}

  return (
    <View style={styles.container}>
      <StatusBar hidden/>

       <Image style={{width:200,height:180}} source={require('./assets/icons/logoL.png')} />

       <TextInput placeholder="Nome..." style={styles.TextInput} onChangeText={text=>setNome(text)} />
       <TextInput placeholder="E-mail..." style={styles.TextInput} onChangeText={text=>setEmail(text)}/>
       <TextInput secureTextEntry={true} placeholder="Senha..." style={styles.TextInput} onChangeText={text=>setSenha(text)} />

       <TouchableOpacity style={styles.btnCadastro} onPress={()=> cadastro()}>
          <Text styles={{color:'white',textalign:'center'}}>CADASTRAR</Text>
       </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040404',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  TextInput: {
    width: '90%',
    height: 48,
    backgroundColor:'white',
    borderRadius: 30,
    paddingLeft: 10,
    marginBottom: 10,
  },
  btnCadastro:{
    width:'90%',
    height: 46,
    backgroundColor:'#85c453',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
});