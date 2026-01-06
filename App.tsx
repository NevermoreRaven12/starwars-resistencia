import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen'
import { Fonts } from './src/theme/Fonts';

SplashScreen.preventAutoHideAsync();


export default function App() {
  const [fontsLoaded] = useFonts({
     StarJedi: require('./assets/fonts/StarJedi.ttf'),

    // Open Sans
    OpenSans_300: require('./assets/fonts/OpenSans/OpenSans-Light.ttf'),
    OpenSans_300_Italic: require('./assets/fonts/OpenSans/OpenSans-LightItalic.ttf'),

    OpenSans_400: require('./assets/fonts/OpenSans/OpenSans-Regular.ttf'),
    OpenSans_400_Italic: require('./assets/fonts/OpenSans/OpenSans-Italic.ttf'),

    OpenSans_500: require('./assets/fonts/OpenSans/OpenSans-Medium.ttf'),
    OpenSans_500_Italic: require('./assets/fonts/OpenSans/OpenSans-MediumItalic.ttf'),

    OpenSans_600: require('./assets/fonts/OpenSans/OpenSans-SemiBold.ttf'),
    OpenSans_600_Italic: require('./assets/fonts/OpenSans/OpenSans-SemiBoldItalic.ttf'),

    OpenSans_700: require('./assets/fonts/OpenSans/OpenSans-Bold.ttf'),
    OpenSans_700_Italic: require('./assets/fonts/OpenSans/OpenSans-BoldItalic.ttf'),

    OpenSans_800: require('./assets/fonts/OpenSans/OpenSans-ExtraBold.ttf'),
    OpenSans_800_Italic: require('./assets/fonts/OpenSans/OpenSans-ExtraBoldItalic.ttf'),
  })

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
    fontFamily: Fonts.starJedi,
    fontSize: 16,
    color: 'rgba(255, 251, 0, 1)'
  }
});
