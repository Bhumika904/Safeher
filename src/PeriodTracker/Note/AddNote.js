import { View, Text, StyleSheet,ScrollView, KeyboardAvoidingView, Platform, TouchableNativeFeedback,
   Keyboard, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { text } from '@fortawesome/fontawesome-svg-core'

const Stack = createNativeStackNavigator();

const AddNote = ({navigation, ...props}) => {
  const AddNotes = () => {
    { if(props.note === ''){
      Alert.alert('Empty Note', 'Please type something', [
        {
          text: 'OK',
          style: 'cancel',
        },
        
      ]); 
    }
    else{
      props.handleNote();
      navigation.navigate('Notes')
    }
    }
    };
    
  return (
    <ScrollView>
      <KeyboardAvoidingView
      behavior={Platform.OS ==='android' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress = {Keyboard.dismiss}/>
        <View style={{padding:20, justifyContent:'space-around'}}>
          <TextInput style={styles.input} placeholder='Type Here...' multiLine={true}
          value={props.note} onChangeText={(text) => props.setNote(text)}/>

          <TouchableOpacity style={styles.button} onPress = {AddNotes}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
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
export default AddNote