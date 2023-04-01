import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Alert } from 'react-native'
import React,{useState, useEffect} from 'react'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import { useNavigation } from '@react-navigation/native';

export default function Profile() {
  const [data, setData] = useState(null);
  const api='http://localhost:8000/user/profile'
  const apilogout='http://localhost:8000/auth/logout'
  const navigation = useNavigation();

  const handleUpdate=()=>{
    navigation.navigate('UpdateProfile')
  }
  const handleLogout=()=>{
    navigation.navigate('Login')
  }

  const logout=async()=>{
    try {
      const token = await AsyncStorage.getItem('token');

      await axios.post(apilogout, null, {
        headers: { Authorization: `Bearer ${token}` },
      });

      await AsyncStorage.removeItem('token');
      
      handleLogout()
    } catch (error) {
      console.error(error);
    }
  }

  const getProfile=async()=>{
    try{
      const token = await AsyncStorage.getItem('token');
        if (!token) {
          throw new Error('Token tidak ditemukan di Async Storage profile.');
        }
        const response = await axios.get(api,{
          headers: {
            Authorization: `Bearer ${token}`
        }})
      if (response.status===200){
        setData(response.data);
      }else{
        throw new Error('Gagal mengambil data dari API.');
      }
    }catch(error) {
      console.log('Error', error.message);
    }
  }

  const refreshProfile=()=>{
    const interval = setInterval(() => {
      getProfile()
    },5000)
    return()=>clearInterval(interval)
  }

  useEffect(()=>{
    getProfile(),
    refreshProfile()
  },[])

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.text} 
        onPress={handleUpdate}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
      {data?(
        <View>
        <MaterialCommunityIcons name="account-circle-outline"size={150} style={styles.image}/>
      <Text style={styles.image3}>{data.nama}</Text>
      <View style={styles.profile}>
        <FontAwesome name="id-card-o"size={30}/>
        <Text style={styles.image2}>{data.no_ktp}</Text>
      </View>
      <View style={styles.profile}>
        <FontAwesome name="id-card-o"size={30}/>
        <Text style={styles.image2}>{data.no_kartu}</Text>
      </View>
      <View style={styles.profile}>
        <MaterialCommunityIcons name="cellphone"size={30}/>
        <Text style={styles.image2}>{data.no_handphone}</Text>
      </View>
      <View style={styles.profile}>
        <MaterialCommunityIcons name="email-outline"size={30}/>
        <Text style={styles.image2}>{data.email}</Text>
      </View>
      <View style={styles.profile}>
        <MaterialCommunityIcons name="calendar-account-outline"size={30}/>
        <Text style={styles.image2}>{data.tgl_lahir}</Text>
      </View>
      <View style={styles.profile}>
        <FontAwesome name="home"size={30}/>
        <Text style={styles.image2}>{data.alamat}</Text>
      </View>
      <TouchableOpacity 
        style={styles.buttonLogout} 
        onPress={logout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
      </View>
      ):(
        <Text>Loading...</Text>
      )}
      
  </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20
  },
  image:{
    textAlign:'center',
    alignItems:'center',
  },
  image2:{
    textAlign:'center',
    alignItems:'center',
    marginTop:6,
    marginLeft:20
  },
  image3:{
    textAlign:'center',
    alignItems:'center',
    marginBottom:20
  },
  profile:{
    flexDirection:'row',
    marginBottom:15
  },
  text:{
    textAlign:'right',
    justifyContent:'flex-end',
    alignItems:'flex-end',
  },
  buttonLogout:{
    height:40,
    backgroundColor:'coral',
    width:Dimensions.get('window').width - 40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100,
  }
  
})