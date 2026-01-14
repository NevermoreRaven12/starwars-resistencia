import { View, Text,StyleSheet } from "react-native";
import { Colors } from '../theme/Colors';
import { Typography } from "../theme/Typography";
import { Spacing } from "../theme/Spacing";
import { Fonts } from "../theme/Fonts";
import { SafeAreaView } from "react-native-safe-area-context";
import { Circle } from "lucide-react-native";
import { CharMock } from "../data/mocks/char.mock";
import { useEffect, useState } from "react";
import { calcularBarraPercent } from "../data/models/char/utils";



export default function CharSheet() {

  const [currentXp, setCurrentXp] = useState(0)
  const [currentHp, setCurrentHp] = useState(0)
  const [currentRes, setCurrentRes] = useState(0)
  const [resourceName, setResourceName] = useState("")

  const resourceType = CharMock.recursos.stamina ?? CharMock.recursos.forca

  useEffect(() => {
    if (!resourceType) return

    setResourceName(resourceType.name)
  }, [resourceType])
  
  useEffect(() => {
    if (CharMock.experiencia.atual > CharMock.experiencia.max) {
      setCurrentXp(CharMock.experiencia.max)
    } else {
        setCurrentXp(CharMock.experiencia.atual)
    }
    
  }, [CharMock.experiencia.atual])

  useEffect(() => {
    if (CharMock.recursos.hp.atual > CharMock.recursos.hp.max) {
      setCurrentHp(CharMock.recursos.hp.atual)
    } else {
      setCurrentHp(CharMock.recursos.hp.atual)
    }
    
  }, [CharMock.recursos.hp.atual])

  useEffect(() => {
    if (!resourceType) return

    let staminaAtual = resourceType.atual
    setCurrentRes(staminaAtual)
  }, [resourceType])

  const porcentagemXp = calcularBarraPercent(currentXp, CharMock.experiencia.max)
  const porcentagemHp = calcularBarraPercent(currentHp, CharMock.recursos.hp.max)
  const porcentagemRes = calcularBarraPercent(currentRes, resourceType?.max ?? 100)
  
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
              <Text style={styles.body}>HP: {currentHp}/{CharMock.recursos.hp.max}</Text>
              
            </View>
            <View style={styles.statsItem}>
              <Text style={styles.body}>{resourceName}: {currentRes}/{resourceType?.max}</Text>
            </View>
            <View style={{position: 'relative', width: '48%'}}>
            <View style={{backgroundColor: Colors.secondary, width: '100%', height: 8, borderRadius: 8}}>
            <View style={{position: 'absolute', backgroundColor: Colors.hpBar, width: `${porcentagemHp}%`, height: 8, borderRadius: 8}}></View>
            </View>
            </View>
             <View style={{position: 'relative', width: '48%'}}>
            <View style={{backgroundColor: Colors.secondary, width: '100%', height: 8, borderRadius: 8}}>
            <View style={{position: 'absolute', backgroundColor: `${resourceType?.name === "Stamina" ? Colors.staminaBar : Colors.forceBar}`, width: `${porcentagemRes}%`, height: 8, borderRadius: 8}}></View>
            </View>
            </View>
            <View style={{flexDirection: 'column', width: '96.7%', height: 'auto'}}>
              <Text style={styles.body}>XP: {currentXp}/{CharMock.experiencia.max}</Text>
              <View style={{position: 'relative'}}>
              <View style={{backgroundColor: Colors.secondary, width: '100%', height: 8, borderRadius: 8, zIndex: 0}}></View>
              <View style={{backgroundColor: Colors.xpBar, width: `${porcentagemXp}%`, height: 8, borderRadius: 8, zIndex: 99, position: 'absolute'}}></View>
              </View>
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
  statGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.md,
    height: 200,
    justifyContent: 'space-between',
    marginLeft: Spacing.lg,
    marginRight: Spacing.lg
    
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
    width: '48%',
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
