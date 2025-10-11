import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { Tabs } from 'expo-router'

const _Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          title: "Home",
          tabBarIcon: ({focused}) => <Ionicons name="home-outline" size={20} color={focused ? "#000" : "#bbb"}/>,
          tabBarActiveTintColor: "#000",
          tabBarInactiveTintColor: "#bbb"
        }}
        />
      <Tabs.Screen
        name='profile'
        options={{
          title: "Profile",
          tabBarIcon: ({focused}) => <Ionicons name="person-outline" size={20} color={focused ? "#000" : "#bbb"}/>,
          tabBarActiveTintColor: "#000",
          tabBarInactiveTintColor: "#bbb"
        }}
        />
    </Tabs>
  )
}

export default _Layout

const styles = StyleSheet.create({})