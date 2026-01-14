import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../theme/Colors";
import { Fonts } from "../theme/Fonts";
import { Spacing } from "../theme/Spacing";
import { Typography } from "../theme/Typography";



export default function AtributeTable({fisico, observacao, raciocinio, carisma, espirito, fBonus, oBonus, rBonus, cBonus, eBonus}){

    const atributos = [
  { key: 'fis', label: 'Físico', valor: fisico, bonus: fBonus },
  { key: 'obs', label: 'Observação', valor: observacao, bonus: oBonus },
  { key: 'rac', label: 'Raciocínio', valor: raciocinio, bonus: rBonus },
  { key: 'car', label: 'Carisma', valor: carisma, bonus: cBonus },
  {key: 'esp', label: 'Espírito', valor: espirito, bonus: eBonus}
]
    return (
        <View style={styles.attrContainer}>
            <View style={styles.attrItem}>
                <View style={styles.internalGrid}>
                    <Text style={styles.attrHeader}>atributo</Text>
                    <Text style={styles.attrHeader}>valor</Text>
                    <Text style={styles.attrHeader}>bonus</Text>
                </View>
            </View>

            

          
        
        
         
          
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
    flex: 1,
    justifyContent: 'space-evenly',
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