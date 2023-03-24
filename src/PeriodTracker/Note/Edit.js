import { View, Text, ScrollView, KeyboardAvoidingView, Keyboard, Platform, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Edit =({route, navigation, ...props}) => {
   
    const {i, n} = route.params;
    const [newEdit, setNewEdit] = useState(n);

    function editNote(){
        let edited = [...props.notes];
        edited[i] = newEdit;
        props.setNotes(edited);

        navigation.navigate('Notes');

        AsyncStorage.setItem('storedNotes', JSON.stringify(edited)).then(()=>{
            props.setNotes(edited)
          }).catch(error => console.log(error))
    }
  return (
    <ScrollView>
        <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{padding:20, justifyContent:'space-around'}}>
                    <TextInput style={[styles.input]} placeholder='Type Here ...'
                    value={newEdit.toString()} onChangeText = {(text) => setNewEdit((text))}/>
                    <TouchableOpacity style={styles.button} onPress = {() => editNote()}>
                        <Text style={styles.buttonText}>Edit</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    addNoteContainer:{
        paddingHorizontal:20,
        marginTop:20,
        alignItems:'center',
        justifyContent:'center'
    },
    input:{
        padding:20,
        paddingTop:20,
        width:'100%',
        fontSize:19,
        color:'Black',
        fontWeight:'600',
        opacity:0.8,
        shadowColor:'#BB8FCE',
        shadowOpacity:0.4,
        shadowOffset:{width:0,height:4},
        shadowRadius:8,
        elevation:5,
        backgroundColor:'white',
        borderColor:'#BB8FCE',
        borderWidth:2,
        borderRadius:5,
        height:300
    },
    button:{
        backgroundColor:'#BB8FCE',
        width:'40%',
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        alignSelf:'flex-end',
        height:40
    },
    buttonText:{
        color:'white',
        fontSize:20,
        fontWeight:'300'
      },
})

export default Edit