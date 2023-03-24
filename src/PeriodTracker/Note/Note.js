import React,{useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Alert, } from 'react-native'
import { ApplicationProvider, Layout,IconRegistry, Icon } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Note = ({...props}) => {
  
  const [searchNote, setSearchNote] = useState();

  function deleteNote(index){
    let newArray = [...props.notes];
    let movedNote = newArray.splice(index, 1);
    props.setNotes(newArray);
    props.setMoveToBin(movedNote);
    let bin = [movedNote, ...props.moveToBin];
    props.setMoveToBin(bin);

    AsyncStorage.setItem('storedNotes', JSON.stringify(newArray)).then(()=>{
      props.setNotes(newArray)
    }).catch(error => console.log(error))

    AsyncStorage.setItem('deletedNotes', JSON.stringify(bin)).then(()=>{
      props.setNotes(bin)
    }).catch(error => console.log(error))
  }

  function search(){
    if(searchNote === ''){
      Alert.alert('Type something in search box');
    } 
    else if(searchNote !== ''){
      props.notes.forEach((item, index) =>{
        if(item.includes(searchNote)){
          let searchItem = [...props.notes];
          let firstElOfArray = searchItem[0];
          let index = [...props.notes].indexOf(item);
          searchItem[0] = item;
          searchItem[index] = firstElOfArray;
          props.setNotes(searchItem);
        }
      })
    }
    }

    function clearAllNotes(){
      let emptyArray = [...props.notes];
      let deleteComArray = [...props.moveToBin];
      emptyArray.forEach((item, index) =>{
        deleteComArray.push(item);
      }) 
      emptyArray=[];
      props.setNotes(emptyArray);
      props.setMoveToBin(deleteComArray);

      AsyncStorage.setItem('storedNotes', JSON.stringify(emptyArray)).then(()=>{
        props.setNotes(emptyArray)
      }).catch(error => console.log(error))
  
      AsyncStorage.setItem('deletedNotes', JSON.stringify(bin)).then(()=>{
        props.setMoveToBin(deleteComArray)
      }).catch(error => console.log(error))
    }
  
  const navigation = useNavigation();

  const AddNotePressed = () => {
    navigation.navigate('AddNote')
    };
  const DeleteNotePressed = () => {
      navigation.navigate('DeleteNotes')
      };
  return (
    <View style={[styles.container]}>
      <View style={[styles.headingContainer]}>
        <Text style={[styles.heading]}>Your Notes...</Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity onPress={DeleteNotePressed}
          style={[styles.button, {marginLeft:40}]}>
            <IconRegistry icons={EvaIconsPack}/>
            <ApplicationProvider {...eva} theme={eva.light}>
              <Icon name = 'trash-2-outline'  fill = '#6C3483' style = {{width:35, height:50}}/>
            </ApplicationProvider>
          </TouchableOpacity>

          <TouchableOpacity onPress={AddNotePressed}
          style={[styles.button]}>
            <IconRegistry icons={EvaIconsPack}/>
            <ApplicationProvider {...eva} theme={eva.light}>
              <Icon name = 'plus-outline'  fill = '#6C3483' style = {{width:35, height:50}}/>
            </ApplicationProvider>
          </TouchableOpacity>

        </View>
      </View>
       
       <View style={{flexDirection:'row', alignItems:'center'}}>
       </View>
       <View style={[styles.divider]}></View>
       <View style={[styles.searchContainer]}>
        <TextInput placeholder='search...' placeholderTextColor={'#EBDEF0'} style={[styles.input]}
        value={searchNote} onChangeText={(text) => setSearchNote(text)}/>
        <TouchableOpacity style={[styles.searchButton, {width:50}]} onPress={() => search()}>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider {...eva} theme={eva.light}>
            <Icon name='search' fill = '#6C3483' style={{width:22, height:40}}/>
          </ApplicationProvider>
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchButton} onPress={() => clearAllNotes()}>
          <Text style={styles.searchButtonText}>Clear</Text>
        </TouchableOpacity>
       </View>

       <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>

        {props.notes.length === 0
        ? 
        
      <View style = {styles.emptyNoteContainer}>
        <Text style = {styles.emptyNoteText}>There is no yet! click on the + plus
        button to add new note</Text>
      </View>
      :
      props.notes.map((item, index) => 

        <View style = {styles.item} key ={index}>
          <View style= {{flexDirection:'row', justifyContent:'space-between'}}>
          <View style = {styles.note}>
            <Text style = {styles.index}>{index + 1}</Text>
            <Text style = {styles.text}>{item}</Text>
          </View>

          <TouchableOpacity onPress={() => deleteNote(index)}>
            <Text style={styles.delete}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dateContainer}>
          <Text>Date: {props.date}</Text>

          <TouchableOpacity onPress={() => navigation.navigate('Edit', {
            i:index,
            n:item
          })}>
            <Text style={styles.delete}>Edit</Text>
          </TouchableOpacity>

        </View>
        </View>
      )}
       </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingTOP:10,
    paddingHorizontal:20,
    marginBottom:70,
    opacity:0.9,
  },
  heading:{
    fontSize:30,
    fontWeight:'200',
    color:'black',
  
  },
  divider:{
    width:'100%',
    height:2,
    backgroundColor:'#A569BD',
    marginTop:5,
  },
  delete:{
    color:'#C39BD3',
    fontWeight:'700',
    fontSize:15
  },
  input:{
    height:40,
    paddingHorizontal:20,
    width:'65%',
    fontSize:19,
    color:'black',
    fontWeight:'600',
    opacity:0.8,
    shadowColor:'#EBDEF0',
    shadowOpacity:0.4,
    shadowOffset:{width:0, height:4},
    shadowRadius:8,
    elevation:5,
    backgroundColor:'white',
    borderColor:'#BB8FCE',
    borderWidth:2,
    borderRadius:5,
  },
  item:{
    marginBottom:20,
    padding:15,
    color:'black',
    opacity:0.8,
    marginTop:10,
    shadowColor:'#A569BD',
    shadowOpacity:0.5,
    shadowOffset:{width:0, height:4},
    shadowRadius:8,
    elevation:5,
    backgroundColor:'white',
    borderColor:'#A569BD',
    borderWidth:2,
    borderRadius:5,
    borderLeftWidth:15,
  },
  text:{
    fontWeight:'700',
    fontSize:17,
    alignSelf:'center'
  },
  index:{
    fontSize:20,
    fontWeight:'800'
  },
  headingContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  button:{
    backgroundColor:'#EBDEF0',
    width:50,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:10,
    height:50
  },
  buttonText:{
    color:'white',
    fontSize:32,
    fontWeight:'800'
  },
  scrollView:{
    marginBottom:70
  },
  note:{
    flexDirection:'row',
    width:'75%'
  },
  searchContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginVertical:8
  }
  ,
  searchButton:{
    backgroundColor:'#D2B4DE',
    alignItems:'center', 
    justifyContent:'space-around',
    width:60,
    borderRadius:5,
    height:40
  },
  searchButtonText:{
    color:'#6C3483',
    fontWeight:'700',
    fontSize:15
  },
  emptyNoteContainer:{
    alignItems:'center',
    marginTop:240
  },
  emptyNoteText:{
    color:'black',
    fontWeight:'680',
    fontSize:15
  },
  dateContainer:{
    marginTop:18,
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:20
  }
})

export default Note 

