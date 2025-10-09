import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';

const data = [
    { label: 'Client', value: 'Client' },
    { label: 'Service Provider', value: 'Service Provider' },
];

const Register = () => {
    const [accountType, setAccountType] = useState(null);

    const renderLabel = () => {
        return (
            <Text style={[{ color: '#aaa' }]}>
                Select account type
            </Text>
        );
    };


    return (

        <SafeAreaView className="bg-white flex-1">
            <ScrollView className='flex-1' alwaysBounceVertical>

                <View className="flex-1 items-center p-5 bg-white">
                    <Text className="text-xl font-bold text-dark-300 mb-6">
                        Register an account
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
                            <Text className="text-white items-center">Register</Text></TouchableOpacity>
                    </View>
                    <Link className="mt-4" href={"./"}>Already a user ? Login</Link>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Register

const styles = StyleSheet.create({})