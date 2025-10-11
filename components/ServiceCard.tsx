import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ServiceCard = ({name = 'Service Name', description, cost = 100}:any) => {
  return (
    <View className='rounded-md mb-6 bg-slate-500 p-10 gap-2'>
      <Text className='text-white'>{name}</Text>
      <Text className='text-slate-400'>A way to describe the service</Text>
      <Text className='text-slate-400 font-bold'>GHC{cost}/hr</Text>
    </View>
  )
}

export default ServiceCard

const styles = StyleSheet.create({})