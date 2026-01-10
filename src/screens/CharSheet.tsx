import { View, Text,StyleSheet } from "react-native";
import { Colors } from "../theme/Colors";
import { Typography } from "../theme/Typography";
import { Spacing } from "../theme/Spacing";
import { Fonts } from "../theme/Fonts";
import { SafeAreaView } from "react-native-safe-area-context";
import { Circle } from "lucide-react-native";
import { CharMock } from "../data/mocks/char.mock";

export default function CharSheet() {
    return (
<SafeAreaView style={styles.container}>
        <Text style={styles.title}>
            resistencia
        </Text>
        <View style={styles.statGrid}>
          <View style={styles.imageContainer}>
              <Circle color={'white'} size={'100%'} strokeWidth={0.5}/>
          </View>
          <View style={styles.statsContainer}>
            <View style={styles.statsItem}>
              <Text style={styles.body}>{CharMock.nome}</Text>
            </View>
            <View style={styles.statsItem}>
              <Text style={styles.body}>{CharMock.raca}/{CharMock.classe} {CharMock.nivel}</Text>
            </View>
            <View style={styles.statsItem}>
              <Text style={styles.body}>HP: {CharMock.recursos.hp}</Text>
              
            </View>
            <View style={styles.statsItem}>
              <Text style={styles.body}>Forca: {CharMock.recursos.stamina}</Text>
            </View>
            <View style={styles.statsItem}>
            </View>
            <View style={styles.statsItem}>

            </View>
          </View>
        </View>
    </SafeAreaView>
    )
    
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.primary,
    gap: Spacing.md,
    padding: Spacing.sm,
  },
  title: {
    textAlign: 'center',
    fontFamily: Fonts.starJedi,
    fontSize: Typography.size.xl,
    letterSpacing: Typography.letterSpacing.title,
    lineHeight: Typography.lineHeight.md,
    color: Colors.highlight
  },
  statGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.md,
    height: 200,
    justifyContent: 'space-between',
    marginLeft: Spacing.lg
    
  },
  imageContainer: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  statsContainer: {
    width: '65%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.md,
    backgroundColor: '#919191ff',
    padding: Spacing.md
  },
  statsItem: {
    flexWrap: 'wrap',
    width: '45%',
    height: 'auto',
    backgroundColor: Colors.highlight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    fontFamily: Fonts.openSans.medium,
    fontSize: Typography.size.sm,
    letterSpacing: Typography.letterSpacing.body,
    lineHeight: Typography.lineHeight.sm,
    textAlign: 'justify'
  }
})
