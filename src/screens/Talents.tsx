import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../theme/Colors";

import { SafeAreaView } from "react-native-safe-area-context";
import { Fonts } from "../theme/Fonts";
import { Typography } from "../theme/Typography";
import { Spacing } from "../theme/Spacing";
export default function Talents() {
    return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
            habilidades
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
