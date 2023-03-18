import { ScrollView,TouchableOpacity,TextInput, StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const [email,setEmail]=useState('')
  const [password, setPassword]=useState('')

  const navigation = useNavigation();

  const handleLogin=()=>{
    navigation.navigate('Bottom_Tab')
  }

  const handleRegister=()=>{
    navigation.navigate('Register')
  }
  return (
    <ImageBackground
    source={require('../Images/zxczxc.jpg')}
    resizeMode="cover"
    style={styles.container}>
      <ScrollView>    
        <View style={styles.loginFormContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.judulform}>Form Login Pasien</Text>
              <Text style={styles.inputLabel}>Email Pasien</Text>
                <TextInput
                style={styles.input}
                placeholder='Masukkan Email Pasien'
                value={email}
                onChangeText={val => setEmail(val)}
                maxLength={20}
                keyboardType="email-address"
                autoCapitalize='none'
                autoComplete='email'/>
          </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Password Pasien</Text>
                <TextInput
                style={styles.input}
                placeholder='Password'
                maxLength={100}
                value={password}
                onChangeText={val => setPassword(val)}
                secureTextEntry/>
            </View>
        </View>
          <View style={{height:20}}/>
            <View style={{flexDirection:"row", marginBottom:20}}>
              <Text style={styles.inputLabel1}>Don't have an account? </Text>
                <TouchableOpacity onPress={handleRegister}>
                  <Text style={styles.inputLabel}>Register</Text>
                </TouchableOpacity>
            </View>
              <TouchableOpacity 
              style={styles.buttonLogin}
              onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
container:{
    padding:20,
    flex: 1,
  },
  judulform:{
    fontWeight:'500',
    color:'#212121',
    fontSize:25,
    textAlign:'center'
  },
  loginFormContainer:{
    width:Dimensions.get('window').width-40,
  },
  inputContainer:{
    marginTop:5,
    marginBottom:5,
  },
  inputLabel:{
    fontWeight:'500',
    color:'#212121',
    fontSize:18,
  },
  inputLabel1:{
    fontWeight:'400',
    color:'#212121',
    fontSize:18,
  },
  input:{
    flex:1,
    backgroundColor:'#fafafa',
    marginTop:8,
    padding:10,
    borderRadius:100,
    minHeight:40,
  },
  buttonLogin:{
    height:40,
    backgroundColor:'coral',
    width:Dimensions.get('window').width - 40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100,
  },
  buttonText:{
    fontWeight:'bold',
    fontSize:18,
    textTransform:'uppercase',
    color:'#fafafa',
  },
  buttonRegister:{
    marginVertical:10,
    justifyContent:'center',
    alignItems:'center',
  }
})