import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';
import NoNetwork from './screen/NoNetwork';

export default function RootLayout() {
  const [loaded, error] = useFonts({
    UrbanistBold: require('@/assets/fonts/SpaceMono-Regular.ttf'),
  });
  const [isConnected, setIsConnected] = useState<boolean | null>(true);

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // Listen for network changes
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      // If state.isConnected is null, we assume no connection
      setIsConnected(state.isConnected ?? false);
    });
    return () => unsubscribe();
  }, []);

  if (!loaded) {
    return null;
  }

  // Show NoNetwork screen if there is no internet connection
  if (isConnected === false) {
    return <NoNetwork />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
