import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

export default function Riwayat_Reservasi() {
  const Reservasi = [
    {
    id: '1',
    kartu:'123123123123',
    nama:'Agus',
    tanggal:'2023-01-17',
    dokter:'dr. Asep'
    },
    {
    id: '2',
    kartu:'312313243768',
    nama:'Hana',
    tanggal:'2023-02-27',
    dokter:'dr. Agus'
    },
    {
    id: '3',
    kartu:'323463331346',
    nama:'Jeni',
    tanggal:'2023-05-15',
    dokter:'dr. Ahnap'
    },
    {
    id: '4',
    kartu:'123653123423',
    nama:'Kodir',
    tanggal:'2023-08-18',
    dokter:'dr. Aza'
    },
    {
    id: '5',
    kartu:'536747235975',
    nama:'Yati',
    tanggal:'2023-09-28',
    dokter:'dr. Atut'
    },
    {
    id: '6',
    kartu:'756734573457',
    nama:'Toto',
    tanggal:'2023-05-14',
    dokter:'dr. Alam'
    },
    ];

  const renderItem=({item})=>{
    return(
      <View style={{flex:1,flexDirection:'row'}}>
        <View style={styles.item}>
        <Text>No Kartu : {item.kartu}</Text>
        <Text>Nama Pasien : {item.nama}</Text>
        <Text>Tanggal Periksa : {item.tanggal}</Text>
        <Text>Nama Dokter : {item.dokter}</Text>
        </View>
      </View>
    )
  }


  return (
    <View style={styles.container}>
      <FlatList
      data={Reservasi}
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