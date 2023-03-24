import { Text,StyleSheet, Pressable } from 'react-native'
import React from 'react'

const ButtonFordash = ({onPress, text, type, TextColor }) => {
  return (
    <Pressable onPress={onPress} 
    style={[
        styles.container, 
        styles[`container_${type}`],
        ]}>
        <Text style={[styles.text,
        TextColor ? {color:TextColor}:{}]}>{text}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
    container:{
        width:'80%',
        padding:15,
        height:65,
        marginVertical:20,
        alignItems:'center',
        borderRadius:20,
    },
    container_PERIOD:{
        backgroundColor:'#E74C3C'
    },
    container_PREGNANCY:{
        backgroundColor:'#9B59B6',
    },
    container_CHILD:{
        backgroundColor:'#5499C7'
},
text:{
    fontSize:22,
    fontWeight:'700'
}
})

export default ButtonFordash