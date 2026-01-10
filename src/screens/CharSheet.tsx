import { View, Text,StyleSheet } from "react-native";
import { Colors } from "../theme/Colors";
import { Typography } from "../theme/Typography";
import { Spacing } from "../theme/Spacing";
import { Fonts } from "../theme/Fonts";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CharSheet() {
    return (
<SafeAreaView style={styles.container}>
        <Text style={styles.title}>
            resistencia
        </Text>
        
    </SafeAreaView>
    )
    
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.primary,
    gap: Spacing.md,
    padding: Spacing.sm
  },
  title: {
    textAlign: 'center',
    fontFamily: Fonts.starJedi,
    fontSize: Typography.size.xl,
    letterSpacing: Typography.letterSpacing.title,
    lineHeight: Typography.lineHeight.md,
    color: Colors.highlight
  }
})
