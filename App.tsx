import * as Linking from 'expo-linking'
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './src/navigation/BottomTab';




export default function App() {
  const [fontsLoaded] = useFonts({
     StarJedi: require('./assets/fonts/star_jedi/StarJedi.ttf'),

    // Open Sans
    OpenSans_300: require('./assets/fonts/Open_Sans/static/OpenSans-Light.ttf'),
    OpenSans_300_Italic: require('./assets/fonts/Open_Sans/static/OpenSans-LightItalic.ttf'),

    OpenSans_400: require('./assets/fonts/Open_Sans/static/OpenSans-Regular.ttf'),
    OpenSans_400_Italic: require('./assets/fonts/Open_Sans/static/OpenSans-Italic.ttf'),

    OpenSans_500: require('./assets/fonts/Open_Sans/static/OpenSans-Medium.ttf'),
    OpenSans_500_Italic: require('./assets/fonts/Open_Sans/static/OpenSans-MediumItalic.ttf'),

    OpenSans_600: require('./assets/fonts/Open_Sans/static/OpenSans-SemiBold.ttf'),
    OpenSans_600_Italic: require('./assets/fonts/Open_Sans/static/OpenSans-SemiBoldItalic.ttf'),

    OpenSans_700: require('./assets/fonts/Open_Sans/static/OpenSans-Bold.ttf'),
    OpenSans_700_Italic: require('./assets/fonts/Open_Sans/static/OpenSans-BoldItalic.ttf'),

    OpenSans_800: require('./assets/fonts/Open_Sans/static/OpenSans-ExtraBold.ttf'),
    OpenSans_800_Italic: require('./assets/fonts/Open_Sans/static/OpenSans-ExtraBoldItalic.ttf'),
  })

  const linking = {
    prefixes: [Linking.createURL('/')],
    config: {
      screens: {
        Character: 'character',
        Inventory: 'inventory',
        Roll: 'roll',
        Talents: 'talents',
        Journal: 'journal'
      }
    }
  }

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, [])

  useEffect(() => {
    
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer linking={linking}>
      <BottomTabs />
    </NavigationContainer>
  );
}

