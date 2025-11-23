import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ActivityIndicator, Alert, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from 'axios';

export default function Index() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async () => {
    if(!email){
      return Alert.alert("Info", "Enter your email address");
    }
    if(!password){
      return Alert.alert("Info", "Enter your password");
    }

  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const stripeKey = process.env.EXPO_PUBLIC_STRIPE_KEY;

  console.log('API URL:', apiUrl);
  console.log('Stripe Key:', stripeKey);
    
  setLoading(true);

  const payload = {
      email,
      password
    };

    try {
      const response = await axios.post(apiUrl + '/api/auth/login', payload); // Replace with your API endpoint
      console.log(response);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }


  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView alwaysBounceVertical>

        <View className="flex-1 items-center p-5 bg-white">
          <Text className="text-xl font-bold text-dark-300 mb-6">
            Welcome to Care4Life!
          </Text>
          <View className="w-full gap-4">
            <TextInput value={email}
            onChangeText={(e) => setEmail(e)}
             className="w-full border border-gray-300 rounded-md p-3" inputMode="email" placeholder="Email" />
            <TextInput
            value={password}
            onChangeText={(e) => setPassword(e)} 
            className="w-full border border-gray-300 rounded-md p-3"
             secureTextEntry placeholder="Password" />
            <TouchableOpacity onPress={handleLogin} className="w-full rounded-md bg-slate-700 text-white text-center p-3 items-center justify-center">
              {!loading ? <Text className="text-white items-center">Login</Text>
              :
              <ActivityIndicator color={"#fff"} />
              }
            </TouchableOpacity>
          </View>
          <Pressable className="mt-4" onPress={()=> router.navigate("/register")}><Text>New here? Register</Text></Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
