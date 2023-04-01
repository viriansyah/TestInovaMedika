import { StyleSheet, Text, View, FlatList, Alert } from 'react-native'
import React ,{useState, useEffect}from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function Riwayat_Pemeriksaan() {
  const [data, setData]= useState([])
  const api='http://localhost:8000/diagnosa'

  const handleRiwayatPemeriksaan=async()=>{
    try{
      const token=await AsyncStorage.getItem('token')
      if(!token){
        throw new Error('Token tidak ditemukan di Async Storage riwayat pemeriksaan.');
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

  const refresh=()=>{
    const interval = setInterval(() => {
      handleRiwayatPemeriksaan()
    },5000)
    return()=>clearInterval(interval)
  }

  useEffect(()=>{
    handleRiwayatPemeriksaan(),
    refresh()
  },[])

  const renderItem=({item})=>{
    return(
      <View style={{flex:1,flexDirection:'row'}}>
        <View style={styles.item}>
        <Text>No Kartu : {item.no_kartu}</Text>
        <Text>Nama Pasien : {item.nama}</Text>
        <Text>Tanggal Periksa : {item.tgl_periksa}</Text>
        <Text>Nama Dokter : {item.dokter}</Text>
        <Text>Diagnosa : {item.diagnosa}</Text>
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