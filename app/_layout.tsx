import { Stack } from "expo-router";
import "./global.css"

export default function RootLayout() {
  return <Stack screenOptions={{headerShadowVisible: false}} initialRouteName="login">
    <Stack.Screen
      name="(tabs)"
      options={{ headerShown: false }} />
    <Stack.Screen
      name="index"
      options={{ headerShown: false }} />
    <Stack.Screen
      name="register"
      options={{ headerShown: false }} />
    <Stack.Screen
      name="login"
      options={{ headerShown: false }} />
  </Stack>;
}
