import { useFonts } from "expo-font";

export function useAppFonts() {
    return useFonts({
    'StarJedi': require('../../assets/fonts/StarJedi.ttf'),
  })
}