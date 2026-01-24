import { View } from "react-native";
import { StyleSheet, TextInput, Text } from "react-native";
import { styles } from "../screens/CharSheet";
import { Typography } from "../theme/Typography";
import { Fonts } from "../theme/Fonts";
import { Colors } from "../theme/Colors";
import { useState } from "react";

export default function LoreField(){
    const [lore, setLore] = useState('')
    return (
        <View style={styles2.container}>
            <Text style={{fontFamily: Fonts.starJedi, fontSize: Typography.size.md, color: Colors.highlight}}>
                história
            </Text>
            <TextInput style={styles2.input} 
            onChangeText={setLore} 
            value={lore} 
            placeholder={"Escreva sua história..."} 
            keyboardType="default" 
            placeholderTextColor={Colors.secondary}
            multiline
            numberOfLines={6}
            textAlignVertical="top"
            />
                
            
        </View>
    )
}

const styles2 = StyleSheet.create({
    container: {
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto',
        width: '100%'
    },
    input: {
        height: 'auto',
        width: '100%',
        borderWidth: 1,
        borderColor: Colors.highlight,
        color: Colors.secondary
    }
})