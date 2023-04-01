import { TouchableOpacity,TextInput, StyleSheet, Text, View, ImageBackground, Dimensions, Alert } from 'react-native'
import React,{useState} from 'react'
import DatePicker from 'react-native-date-picker'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function UpdateProfile() {
    const [noKartu, setNoKartu]=useState('')
    const [noKtp, setNoKtp]=useState('')
    const [namaPasien, setNamaPasien]=useState('')
    const [email,setEmail]=useState('')
    const [noHp, setNoHp]=useState('')
    const [date, setDate]=useState(new Date())
    const [open, setOpen]=useState(false)
    const [alamat, setAlamat]=useState('')
    const [password, setPassword]=useState('')
    const [data, setData]= useState([])
    const navigation = useNavigation();
    const api='http://localhost:8000/user'


    const formdata={
      "no_ktp":noKtp,
      "no_kartu":noKartu,
      "nama":namaPasien,
      "no_handphone":noHp,
      "email":email,
      "tgl_lahir":date,
      "alamat":alamat,
      "password":password,
    }

    const handleupdate=async()=>{
      try{
        const token=await AsyncStorage.getItem('token')
        if(!token){
          throw new Error('Token tidak ditemukan di Async Storage update profile.');
        }
  
        const response = await axios.put(api,formdata,{
          headers: {
            Authorization: `Bearer ${token}`
        }})
        if (response.status===200){
          setData(response.data);
          navigation.navigate('Profile')
        }else{
          throw new Error('Gagal mengambil data dari API.');
        }
      }catch(error) {
        Alert.alert('Error', error.message);
      }
    }

    return (
    <>
    <DatePicker
        modal
        mode='date'
        open={open}
        date={date}
        onConfirm={(date) => {
            setOpen(false)
            setDate(date)
            console.log(date)
        } }
        onCancel={() => {
            setOpen(false)
        } } />
            <ImageBackground
                source={require('../Images/zxczxc.jpg')}
                resizeMode="cover"
                style={styles.container}>
              <Text style={styles.judulform}>Form Update Pasien</Text>
                <ScrollView>    
                <View style={styles.loginFormContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>No KTP Pasien</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Masukkan No KTP Pasien'
                            value={noKtp}
                            onChangeText={val => setNoKtp(val)}
                            maxLength={20}
                            keyboardType="numeric" />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>No Kartu Pasien</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Masukkan No Kartu Pasien'
                            value={noKartu}
                            onChangeText={val => setNoKartu(val)}
                            maxLength={20}
                            keyboardType="numeric" />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Nama Pasien</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Masukkan Nama Pasien'
                            value={namaPasien}
                            onChangeText={val => setNamaPasien(val)}
                            maxLength={20}
                            keyboardType="default" />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>No Handphone Pasien</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Masukkan No Handphone Pasien'
                            value={noHp}
                            onChangeText={val => setNoHp(val)}
                            maxLength={20}
                            keyboardType="numeric" />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Email Pasien</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Masukkan Email Pasien'
                            value={email}
                            onChangeText={val => setEmail(val)}
                            maxLength={20}
                            keyboardType="email-address"
                            autoCapitalize='none'
                            autoComplete='email' />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Tanggal Lahir Pasien</Text>
                            <Text
                            style={styles.input}
                            placeholder='Pilih Tanggal'
                            value={date}
                            onPress={() => setOpen(true)}
                            onChangeText={date => setDate(date)}
                            showSoftInputOnFocus={false}>
                            {date.toISOString().substr(0, 10)}</Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Alamat Pasien</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Masukkan Alamat Pasien'
                            value={alamat}
                            onChangeText={val => setAlamat(val)}
                            maxLength={100}
                            keyboardType="default" />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Password</Text>
                        <TextInput
                        style={styles.input}
                        placeholder='Password'
                        maxLength={100}
                        value={password}
                        onChangeText={val => setPassword(val)}
                        secureTextEntry
                        />
                    </View>
                    
                </View>

                <View style={{height:20}}/>

                <TouchableOpacity 
                    style={styles.buttonLogin} 
                    onPress={handleupdate}>
                    <Text style={styles.buttonText}>Update</Text>
                    </TouchableOpacity>
                </ScrollView>

            </ImageBackground></>
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
    fontSize:16,
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