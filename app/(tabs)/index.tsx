import ServiceCard from '@/components/ServiceCard'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Index = () => {
  return (
    <ScrollView className='bg-white' showsVerticalScrollIndicator={false}>

      <View className='w-full flex-1 p-5'>
        <Text className="text-xl font-bold text-dark-300 mb-6">
          Available services
        </Text>

        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </View>
    </ScrollView>
  )
}

export default Index

const styles = StyleSheet.create({})