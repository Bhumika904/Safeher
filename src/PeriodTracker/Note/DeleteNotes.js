import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert} from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const DeleteNotes = ({...props}) => {

  function emptyBin(){
  Alert.alert(
    'Delete All',
    'Are you sure you want to permanently delete all notes?',
    [{
      text:'No',
      onPress:() => console.log('No pressed'),
      style:'cancel'
    },
   {
    text:'Yes',
    onPress: () => {
      let emptyArray = [...props.moveToBin];
      emptyArray = [];
      props.setMoveToBin(emptyArray);

      AsyncStorage.setItem('deletedNotes', JSON.stringify(emptyArray)).then(()=>{
        props.setMoveToBin(emptyArray)
      }).catch(error => console.log(error))

    }
   }
  ]
  )
}
function undoAllNotes(){
  let deletedNotes = [...props.moveToBin];
  let notes = [...props.notes];
  deletedNotes.forEach((item, index) => {
    notes.push(item)
  })
  props.setMoveToBin([]);
  props.setMoveToBin(deletedNotes);

  AsyncStorage.setItem('storedNotes', JSON.stringify(notes)).then(()=>{
    props.setMoveToBin([]);
  }).catch(error => console.log(error))

  AsyncStorage.setItem('deletedNotes', JSON.stringify(newArray)).then(()=>{
    props.setNotes(bin)
  }).catch(error => console.log(error))

}
function undoNote(index){
  let getBack = props.moveToBin[index];
  let array = [getBack, ...props.notes];
  props.setNotes(array);

  let newArray = [...props.moveToBin];
  newArray.splice(index, 1);
  props.setMoveToBin(newArray);

  AsyncStorage.setItem('storedNotes', JSON.stringify(array)).then(()=>{
    props.setNotes(array)
  }).catch(error => console.log(error))

  AsyncStorage.setItem('deletedNotes', () => {
    return;
  }) 
}
function permanentlyDelete(index){
  Alert.alert(
    'Delete All',
    'Are you sure you want to permanently delete this Note?',
    [{
      text:'No',
      onPress:() => console.log('No pressed'),
      style:'cancel'
    },
   {
    text:'Yes',
    onPress: () => {
      let newArray = [...props.moveToBin];
      newArray.splice(index, 1);
      props.setMoveToBin(newArray);
  
      AsyncStorage.setItem('deletedNotes', JSON.stringify(newArray)).then(()=>{
        props.setMoveToBin(newArray)
      }).catch(error => console.log(error))
    }
   }
  ]
  )
}
function undoAllNotes(){
  let deletedNotes = [...props.moveToBin];
  let notes = [...props.notes];
  deletedNotes.forEach((item, index)=>{
    notes.push(item)
  })
  props.setMoveToBin([]);
  props.setNotes(deletedNotes);
}
  return (
   <ScrollView>
    <View style={[style.notesContainer]}>
    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
      <TouchableOpacity style={style.emptyButton} onPress={()=> undoAllNotes()}>
      <Text style={style.emptyButtonText}>Undo All</Text>
      </TouchableOpacity>
      <Text style={{fontWeight:'700', fontSize:18, color:'#C39BD3'}}>
        Total: {props.moveToBin.length}
      </Text>
      <TouchableOpacity style={style.emptyButton} onPress={()=> emptyBin()}>
        <Text style={style.emptyButtonText}>Empty</Text>
      </TouchableOpacity>
    </View>
    <View style={style.divider}></View>
 
    {props.moveToBin.length ===0

    ?
  <View style={style.emptyNoteContainer}>
    <Text style={style.emptyNoteText}>Nothing to show yet...</Text>
  </View>
  :
  
  props.moveToBin.map((item, index) => 
    <View style={style.item} key={index}>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <View style={style.note}>
        <Text style={style.index}>{index + 1}</Text>
        <Text style={style.text}>{item}</Text>
      </View>

      <TouchableOpacity onPress={()=> undoNote(index)}>
        <Text style={style.delete}>Undo</Text>
      </TouchableOpacity>
    </View>
    <View style={style.dateContainer}>
      <Text>{props.date} </Text>
      <TouchableOpacity onPress={() => permanentlyDelete(index)}>
        <Text style={style.delete}>Delete</Text>
      </TouchableOpacity>
    </View>
    </View>
    )}
    </View>
   </ScrollView>
  )
}

const style = StyleSheet.create({
  emptyButton:{
    backgroundColor:'#C39BD3',
    width:'25%',
    borderRadius:100,
    justifyContent:'center',
    alignContent:'center',
    height:35,
    marginBottom:5
  },
  emptyButtonText:{
    color:'white',
    fontSize:16,
    fontWeight:'700'
  },
  divider:{
    width:'100%',
    height:2,
    backgroundColor:'#A569BD',
    marginTop:5,
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
  notesContainer:{
    paddingTOP:10,
    paddingHorizontal:20,
    marginBottom:70,
    opacity:0.9,
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
  delete:{
    color:'#C39BD3',
    fontWeight:'700',
    fontSize:15
  },
  note:{
    flexDirection:'row',
    width:'75%'
  },
  index:{
    fontSize:20,
    fontWeight:'800'
  },
  dateContainer:{
    marginTop:18,
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:20
  },

})

export default DeleteNotes