import { useRouter } from "expo-router";
import React from "react";
import { Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {

  const router = useRouter();



  const handleLogin = () => {
    
  }
  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView alwaysBounceVertical>

        <View className="flex-1 items-center p-5 bg-white">
          <Text className="text-xl font-bold text-dark-300 mb-6">
            Welcome to Care4Life!
          </Text>
          <View className="w-full gap-4">
            <TextInput className="w-full border border-gray-300 rounded-md p-3" inputMode="email" placeholder="Email" />
            <TextInput className="w-full border border-gray-300 rounded-md p-3" secureTextEntry placeholder="Password" />
            <TouchableOpacity onPress={()=> router.navigate("/(tabs)")} className="w-full rounded-md bg-slate-700 text-white text-center p-3 items-center justify-center">
              <Text className="text-white items-center">Login</Text>
            </TouchableOpacity>
          </View>
          <Pressable className="mt-4" onPress={()=> router.navigate("/register")}><Text>New here? Register</Text></Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
