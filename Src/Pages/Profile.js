import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Profile() {
  const [noKartu, setNoKartu]=useState('')
  const [noKtp, setNoKtp]=useState('')
  const [namaPasien, setNamaPasien]=useState('')
  const [email,setEmail]=useState('')
  const [noHp, setNoHp]=useState('')
  const [date, setDate]=useState(new Date())
  const [open, setOpen]=useState(false)
  const [alamat, setAlamat]=useState('')
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="account-circle-outline"size={150} style={styles.image}/>
      <Text style={styles.image3}>Viriansyah Eka Yumardila</Text>
      <View style={styles.profile}>
        <FontAwesome name="id-card-o"size={30}/>
        <Text style={styles.image2}>1234132123</Text>
      </View>
      <View style={styles.profile}>
        <FontAwesome name="id-card-o"size={30}/>
        <Text style={styles.image2}>1234132123</Text>
      </View>
      <View style={styles.profile}>
        <MaterialCommunityIcons name="cellphone"size={30}/>
        <Text style={styles.image2}>1234132123</Text>
      </View>
      <View style={styles.profile}>
        <MaterialCommunityIcons name="email-outline"size={30}/>
        <Text style={styles.image2}>asdasd@gmail.com</Text>
      </View>
      <View style={styles.profile}>
        <MaterialCommunityIcons name="calendar-account-outline"size={30}/>
        <Text style={styles.image2}>17-09-2000</Text>
      </View>
      <View style={styles.profile}>
        <FontAwesome name="home"size={30}/>
        <Text style={styles.image2}>Metro Indah Mall Jl. Soekarno Hatta Blok F 20, Sekejati, Kec. Buahbatu, Kota Bandung, Jawa Barat 40286</Text>
      </View>
      
      
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
  }
  
})