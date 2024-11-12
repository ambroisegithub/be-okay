import { Stack } from "expo-router";

export default function HomeStackLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="DoctorChatsupport" />
      <Stack.Screen name="DoctorEditProfile" />
      <Stack.Screen name="joinMyCommunity" />
      <Stack.Screen name="MyCommunity" />

    </Stack>
  );
}
