import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ServiceCard = ({name = 'Service Name', description, cost = 100}:any) => {
  
  const showAlertInfo = () => {
     Alert.alert(
    "Success", // Title of the alert
    "This service has been requested.", // Message of the alert
    [
      {
        text: "OK",
        onPress: () => console.log("OK Pressed")
      }
    ],
    { cancelable: false } // Prevents dismissal by tapping outside the alert
  );
  }

  const showConfirmDialog = () => {
  Alert.alert(
    "Confirmation", // Title of the alert
    "Are you sure you want to request for this service?", // Message of the alert
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      {
        text: "OK",
        onPress: () => showAlertInfo()
      }
    ],
    { cancelable: false } // Prevents dismissal by tapping outside the alert
  );
};

  return (
    <TouchableOpacity onPress={showConfirmDialog} className='rounded-md mb-6 bg-slate-500 p-10 gap-2'>
      <Text className='text-white'>{name}</Text>
      <Text className='text-slate-400'>A way to describe the service</Text>
      <Text className='text-slate-400 font-bold'>GHC{cost}/hr</Text>
    </TouchableOpacity>
  )
}

export default ServiceCard

const styles = StyleSheet.create({})