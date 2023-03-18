import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import React, { useState } from 'react'

import { SelectList } from 'react-native-dropdown-select-list'

import DatePicker from 'react-native-date-picker'

export default function Reservasi() {
    const [noKartuPasien, setNoKartuPasien]= useState('');
    const [namaPasien, setNamaPasien]= useState('');
    const [pilihTanggal, setPilihTanggal]= useState('');

    const [selected, setSelected]= useState("")

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    
    const data = [
        {key:'1', value:'dr. Asep'},
        {key:'2', value:'dr. Agus'},
        {key:'3', value:'dr. Angga'},
        {key:'4', value:'dr. Ahnap'},
        {key:'5', value:'dr. Aza'},
        {key:'6', value:'dr. Alam'},
        {key:'7', value:'dr. Atut'},
    ]

  return (
    <>
    <DatePicker
        modal
        mode='date'
        open={open}
        date={date}
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
                    maxLength={20}>
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
                    setSelected={(val) => setSelected(val)}
                    data={data}
                    save="value"
                    defaultOption={{ key:'1', value:'dr. Asep' }}
                    style={styles.dropdown} />
            </View>

            <View style={styles.inputContainer}>
                <Button
                    title='Confirm' 
                    onPress={()=>{setNoKartuPasien("");setNamaPasien("");setSelected("")
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