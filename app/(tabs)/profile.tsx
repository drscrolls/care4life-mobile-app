import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Link, useRouter } from 'expo-router';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Client', value: 'Client' },
  { label: 'Service Provider', value: 'Service Provider' },
];
const Profile = () => {

  const [accountType, setAccountType] = useState(null);
  const router = useRouter();

  const renderLabel = () => {
    return (
      <Text style={[{ color: '#aaa' }]}>
        Select account type
      </Text>
    );
  };


  return (
    
    <ScrollView className='bg-white' showsVerticalScrollIndicator={false}>
    <View className="flex-1 p-5 bg-white">
      <Text className="text-xl font-bold text-dark-300 mb-6">
        Update your profile
      </Text>
      <View className="w-full gap-4">
        <TextInput className="w-full border border-gray-300 rounded-md p-3" inputMode="text" placeholder="Firstname" />
        <TextInput className="w-full border border-gray-300 rounded-md p-3" inputMode="text" placeholder="Lastname" />
        <TextInput className="w-full border border-gray-300 rounded-md p-3" inputMode="email" placeholder="Email" />
        <TextInput className="w-full border border-gray-300 rounded-md p-3" secureTextEntry placeholder="Password" />
        <TextInput className="w-full border border-gray-300 rounded-md p-3" inputMode="text" placeholder="Ghana card (eg. GHA-83202072-9)" />
        <TextInput className="w-full border border-gray-300 rounded-md p-3" inputMode="tel" placeholder="Phone number" />

        {renderLabel()}
        <Dropdown
          data={data}
          maxHeight={300}
          value={accountType}
          placeholder={'Select your account type'}
          placeholderStyle={{ color: "#999" }}
          style={{ borderColor: "#ddd", borderWidth: 1, padding: 8, borderRadius: 5 }}
          onChange={item => {
            setAccountType(item.value);
          }}
          labelField="label"
          valueField="value" />

        <TouchableOpacity className="w-full mt-4 rounded-md bg-slate-700 text-white text-center p-3 items-center justify-center">
          <Text className="text-white items-center">Update</Text>
          </TouchableOpacity>

        <TouchableOpacity onPress={()=> router.navigate("/login")}  className="w-full mt-4 rounded-md bg-red-700 text-white text-center p-3 items-center justify-center">
          <Text className="text-white items-center">Logout</Text>
          </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({})