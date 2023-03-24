import { Text,StyleSheet, Pressable } from 'react-native'
import React from 'react'

const Custombutton = ({onPress, text, type, TextColor,font }) => {
  return (
    <Pressable onPress={onPress} 
    style={[
        styles.container, 
        styles[`container_${type}`],
        ]}>
        <Text style={[styles.text,
        TextColor ? {color:TextColor}:{}, font?{fontWeight:font}:{}]}>{text}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
    container:{
        width:'80%',
        padding:15,
        marginVertical:15,
        alignItems:'center',
        borderRadius:5,
    },
    container_FIRST:{
        backgroundColor:'#AF7AC5'
    },
    container_ANOTHER:{
        backgroundColor:'#EBEDEF',
    },
    container_GOOGLE:{
        backgroundColor:'#FADBD8'
    },
    container_DATE:{
        backgroundColor:'#D7BDE2'
    },
    text:{
        fontWeight:'bold',
        color:'white',
        fontSize:18
    },
    container_CONFIRMATION:{
        backgroundColor:'#AF7AC5',
        marginLeft:69,
        width:'70%',
    },
})

export default Custombutton