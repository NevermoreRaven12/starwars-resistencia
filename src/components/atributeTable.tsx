import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../theme/Colors";
import { Fonts } from "../theme/Fonts";
import { Spacing } from "../theme/Spacing";
import { Typography } from "../theme/Typography";



export default function AtributeTable({atributos}){

    
    return (
        <View style={styles.attrContainer}>
            <View style={styles.attrItem}>
                <View style={styles.internalGrid}>
                  <View style={styles.col}>
                    <Text style={styles.attrHeader}>atributo</Text>
                  </View>
                  <View style={styles.col}>
                    <Text style={styles.attrHeader}>valor</Text>
                  </View>
                  <View style={styles.col}>
                    <Text style={styles.attrHeader}>bonus</Text>
                  </View>
                </View>
            </View>
            {atributos.map((item) => (
              <View key={item.key} style={styles.attrItem}>
                <View style={styles.internalGrid}>
                  <View style={styles.col}>
                    <Text style={styles.attrHeaderWhite}>{item.label}</Text>
                  </View>
                  <View style={styles.col}>
                    <Text style={styles.attrHeaderWhite}>{item.valor}</Text>
                  </View>
                  <View style={styles.col}>
                    <Text style={styles.attrHeaderWhite}>{item.bonus}</Text>
                  </View>
                </View>
              </View>
            ))}

          
        
        
         
          
        </View>
    )
}

 const styles = StyleSheet.create({
    attrContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.md,
    justifyContent: 'space-between',
    margin: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.highlight
  },
  attrItem: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  internalGrid: {
    flexDirection: 'row',
    width: '100%'

  },
  col: {
    width: '33.33%',
    alignItems: 'center'
  },
  attrHeader: {
    fontFamily: Fonts.starJedi,
    fontSize: Typography.size.sm,
    letterSpacing: Typography.letterSpacing.body,
    lineHeight: Typography.lineHeight.md,
    color: Colors.highlight
  },
  attrHeaderWhite: {
    textAlign: 'center',
    fontFamily: Fonts.starJedi,
    fontSize: Typography.size.sm,
    letterSpacing: Typography.letterSpacing.body,
    lineHeight: Typography.lineHeight.md,
    color: Colors.secondary
  },
})