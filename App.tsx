import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useAppFonts } from './utils/fonts/useAppFonts';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync();


export default function App() {
  const [fontsLoaded] = useAppFonts()

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.namingFont}>Bem vindo a Resistência.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  namingFont: {
    fontFamily: 'StarJedi',
    fontSize: 16,
    color: 'rgba(255, 251, 0, 1)'
  }
});
