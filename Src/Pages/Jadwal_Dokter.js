import { StyleSheet, Text, View, FlatList, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function Jadwal_Dokter() {
  const [data, setData]= useState([])
  const api='http://localhost:8000/dokter'

  const handleDokter=async()=>{
    try{
      const token=await AsyncStorage.getItem('token')
      if(!token){
        throw new Error('Token tidak ditemukan di Async Storage jadwal.');
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
      Alert.alert('Error', error.message);
    }
  }

  useEffect(()=>{
    handleDokter()
  },[])

  
  const renderItem=({item})=>{
    return(
      <View style={{flex:1,flexDirection:'row'}}>
        <View style={styles.item}>
        <Text>Nama Dokter : {item.nama}</Text>
        <Text>Jadwal Prakter : {item.jadwal_praktek}</Text>
        <Text>Jam Praktek : {item.jam_praktek}</Text>
        </View>
      </View>
    )
  }


  return (
    <View style={styles.container}>
      <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item)=>item.id}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10
  },
  inputLabel:{
    fontWeight:'500',
    color:'#212121',
    fontSize:16,
    padding:10
},
  item:{
    flex:1,
    flexDirection:'column',
    backgroundColor: '#00cc66',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  }
})