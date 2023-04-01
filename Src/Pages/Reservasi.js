import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { SelectList } from 'react-native-dropdown-select-list'

import DatePicker from 'react-native-date-picker'

export default function Reservasi() {
    const [noKartuPasien, setNoKartuPasien]= useState('');
    const [namaPasien, setNamaPasien]= useState('');
    const [pilihTanggal, setPilihTanggal]= useState('');
    const [namaDokter, setNamaDokter]=useState("")

    const [selected, setSelected]= useState("")

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const apirsv='http://localhost:8000/rsvp'
    const apidiagnosa='http://localhost:8000/diagnosa'

    const formreservasi={
        "no_kartu":noKartuPasien,
        "nama":namaPasien,
        "tgl_periksa":date,
        "dokter":namaDokter
    }

    const getToken = async () => {
        try {
          const token = await AsyncStorage.getItem('token');
          return token;
        } catch (error) {
          console.error(error);
        }
      };

    const handleReservasi=async ()=>{
        const token=await getToken()
        const config={
            headers: {
                'Authorization': `Bearer ${token}`
              }
        }

        try {
            const response = await axios.post(apirsv, formreservasi, config);
            axios.post(apidiagnosa, formreservasi, config);
            console.log(response.data);
          } catch (error) {
            console.error(error);
          }
      }

    const [dataDokter, setDataDokter]= useState([])
    const apidokter='http://localhost:8000/dokter'
    
    const handleDokter=async()=>{
        try{
            const token=await AsyncStorage.getItem('token')
            if(!token){
                throw new Error('Token tidak ditemukan di Async Storage reservasi.');
            }
        const response = await axios.get(apidokter,{
            headers: {
              Authorization: `Bearer ${token}`
          }})
          if (response.status===200){
            let newArray = response.data.map((item) => {
                return {key: item.id_dokter, value: item.nama}
            })
                setDataDokter(newArray)
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


  return (
    <>
    <DatePicker
        modal
        mode='date'
        open={open}
        date={date}
        locale='id'
        onConfirm={(date) => {
            setOpen(false);
            setDate(date);
            console.log(date);
        }}
        onCancel={() => {
            setOpen(false);
        }}
    />
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Masukkan No Kartu Pasien</Text>
                <TextInput
                    style={styles.input}
                    placeholder='No Kartu'
                    value={noKartuPasien}
                    onChangeText={val => setNoKartuPasien(val)}
                    keyboardType='number-pad'
                    maxLength={20}>
                </TextInput>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Masukkan Nama Pasien</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Nama Pasien'
                    value={namaPasien}
                    onChangeText={val => setNamaPasien(val)}
                    keyboardType='default'
                    maxLength={40}>
                </TextInput>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Silahkan pilih tanggal</Text>
                    <Text
                    style={styles.input}
                    placeholder='Pilih Tanggal'
                    value={pilihTanggal}
                    onPress={() => setOpen(true)}
                    onChangeText={date => setDate(date)}
                    showSoftInputOnFocus={false}>
                    {date.toISOString().substr(0, 10)}</Text>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Silahkan Pilih Dokter</Text>
                <SelectList
                    setSelected={(value) => setNamaDokter(value)}
                    data={dataDokter}
                    save="value"
                    style={styles.dropdown} />
            </View>

            <View style={styles.inputContainer}>
                <Button
                    title='Confirm' 
                    onPress={()=>{setNoKartuPasien("");setNamaPasien("");setSelected(""),handleReservasi()
                    }}/>
            </View>
        </View></>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:30
    },
    input:{
        marginTop:10,
        backgroundColor:'#ababab',
        padding:10,
        borderRadius:100,
        minHeight:40,
        borderStartColor:'#0f0f0f'
      },
    inputContainer:{
        marginTop:8,
        marginBottom:16,
    },
    inputLabel:{
        fontWeight:'500',
        color:'#212121',
        fontSize:16,
    },
    dropdown:{
        marginTop:20,
    }
})