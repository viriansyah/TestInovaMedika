import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

export default function Jadwal_Dokter() {
  const Pemeriksaan = [
    {
    id: '1',
    dokter:'dr. Asep',
    jadwal:'Senin-Rabu-Jumat',
    jam:'09.00-12.00 & 13.00-16.00'
    },
    {
    id: '2',
    dokter:'dr. Agus',
    jadwal:'Selasa-Kamis-Sabtu',
    jam:'07.00-12.00'
    },
    {
    id: '3',
    dokter:'dr. Angga',
    jadwal:'Senin-Jumat',
    jam:'07.00-10.00 & 14.00-17.00'
    },
    {
    id: '4',
    dokter:'dr. Ahnap',
    jadwal:'Selasa-Sabtu',
    jam:'09.00-12.00 & 14.00-17.00'
    },
    {
    id: '5',
    dokter:'dr. Aza',
    jadwal:'Senin-Kamis',
    jam:'07.00-12.00'
    },
    {
    id: '6',
    dokter:'dr. Alam',
    jadwal:'Kamis-Sabtu',
    jam:'07.00-10.00 & 13.00-17.00'
    },
    {
      id: '7',
      dokter:'dr. Atut',
      jadwal:'Senin-Rabu-Jumat',
      jam:'12.00-17.00'
      },
    ];

  const renderItem=({item})=>{
    return(
      <View style={{flex:1,flexDirection:'row'}}>
        <View style={styles.item}>
        <Text>Nama Dokter : {item.dokter}</Text>
        <Text>Jadwal Prakter : {item.jadwal}</Text>
        <Text>Jam Praktek : {item.jam}</Text>
        </View>
      </View>
    )
  }


  return (
    <View style={styles.container}>
      <FlatList
      data={Pemeriksaan}
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