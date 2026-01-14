import { StyleSheet } from "react-native";
import { Colors } from "./Colors";
import { Spacing } from "./Spacing";
import { Fonts } from "./Fonts";
import { Typography } from "./Typography";

export const global = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.primary,
    gap: Spacing.md
  },
  title: {
    textAlign: 'center',
    fontFamily: Fonts.starJedi,
    fontSize: Typography.size.xl,
    letterSpacing: Typography.letterSpacing.title,
    lineHeight: Typography.lineHeight.md,
    color: Colors.highlight
  },
  body: {
    fontFamily: Fonts.openSans.medium,
    fontSize: Typography.size.sm,
    letterSpacing: Typography.letterSpacing.body,
    lineHeight: Typography.lineHeight.sm,
    textAlign: 'justify'
  }
})