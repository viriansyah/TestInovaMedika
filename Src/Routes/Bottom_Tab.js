import * as React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Jadwal_Dokter from '../Pages/Jadwal_Dokter'
import Profile from '../Pages/Profile';
import Reservasi from '../Pages/Reservasi';
import Riwayat_Pemeriksaan from '../Pages/Riwayat_Pemeriksaan';
import Riwayat_Reservasi from '../Pages/Riwayat_Reservasi';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Dokter_Stack() {
  return (
      <Stack.Navigator
        initialRouteName="Jadwal_Dokter"
        screenOptions={{
            headerStyle: { backgroundColor: '#009999' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        >
        <Stack.Screen
          name="Jadwal_Dokter"
          component={Jadwal_Dokter} 
          options={{ title: 'Jadwal Dokter' }}/>
      </Stack.Navigator>
  );
}

function Reservasi_Stack() {
    return (
        <Stack.Navigator
          initialRouteName="Reservasi"
          screenOptions={{
              headerStyle: { backgroundColor: '#009999' },
              headerTintColor: '#fff',
              headerTitleStyle: { fontWeight: 'bold' },
            }}
          >
          <Stack.Screen
            name="Reservasi"
            component={Reservasi} 
            options={{ title: 'Reservasi Online' }}/>
        </Stack.Navigator>
    );
  }

  function Profile_Stack() {
    return (
        <Stack.Navigator
          initialRouteName="Profile"
          screenOptions={{
              headerStyle: { backgroundColor: '#009999' },
              headerTintColor: '#fff',
              headerTitleStyle: { fontWeight: 'bold' },
            }}
          >
          <Stack.Screen
            name="Profile"
            component={Profile} 
            options={{ title: 'Profile User' }}/>
        </Stack.Navigator>
    );
  }
  
  function History_Pemeriksaan_Stack() {
    return (
        <Stack.Navigator
          initialRouteName="Riwayat_Pemeriksaan"
          screenOptions={{
              headerStyle: { backgroundColor: '#009999' },
              headerTintColor: '#fff',
              headerTitleStyle: { fontWeight: 'bold' },
            }}
          >
          <Stack.Screen
            name="Riwayat_Pemeriksaan"
            component={Riwayat_Pemeriksaan} 
            options={{ title: 'Riwayat Pemeriksaan' }}/>
        </Stack.Navigator>
    );
  }

  function History_Reservasi_Stack() {
    return (
        <Stack.Navigator
          initialRouteName="Riwayat_Reservasi"
          screenOptions={{
              headerStyle: { backgroundColor: '#009999' },
              headerTintColor: '#fff',
              headerTitleStyle: { fontWeight: 'bold' },
            }}
          >
          <Stack.Screen
            name="Riwayat_Reservasi"
            component={Riwayat_Reservasi} 
            options={{ title: 'Riwayat Reservasi' }}/>
        </Stack.Navigator>
    );
  }

function Bottom_Tab() {
  return (

      <Tab.Navigator
        initialRouteName="Dokter_Stack"
        >
        <Tab.Screen
          name="Dokter_Stack"
          component={Dokter_Stack}
          options={{
            headerShown:false,
            tabBarLabel: 'Jadwal Dokter',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="doctor" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="History_Pemeriksaan_Stack"
          component={History_Pemeriksaan_Stack}
          options={{headerShown:false,
            tabBarLabel: 'Riwayat Periksa',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="history"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Reservasi_Stack"
          component={Reservasi_Stack}
          options={{headerShown:false,
            tabBarLabel: 'Reservasi Online',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="note-plus-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="History_Reservasi_Stack"
          component={History_Reservasi_Stack}
          options={{headerShown:false,
            tabBarLabel: 'Riwayat Reservasi',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="history"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile_Stack"
          component={Profile_Stack}
          options={{headerShown:false,
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>

  );
}
export default Bottom_Tab;