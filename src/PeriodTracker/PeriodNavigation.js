import { View, Text, Image, TouchableOpacity, StyleSheet,} from 'react-native'
import { ApplicationProvider, Layout,IconRegistry, Icon,Button  } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const FacebookIcon = (props) => (
  <Icon name='file-add-outline' {...props} />
);

const PeriodNavigation = () => {
  const navigation = useNavigation();
  const onNotePress = () => {
    navigation.navigate('Notes')
    };
    const onCalendarPress = () => {
      navigation.navigate('PeriodCalendar')
      };
    const onReminderPress = () => {
      navigation.navigate('')
        };
    const onForumPress = () => {
         navigation.navigate('PostList')
          };
  return (
    <View style={{display:'flex', flexDirection:'row', justifyContent:'space-around' ,marginTop:'30%',paddingLeft:'2%', paddingTop:'5%',paddingBottom:'5%',}}>
       <TouchableOpacity onPress={onNotePress}>
       <Icon name = 'file-add-outline'  fill = '#E74C3C' style = {styles.button}/>
      </TouchableOpacity>
      

     <TouchableOpacity onPress={onCalendarPress}><Image source={require("../Assests/Images/calendar.png")} style={styles.button}/></TouchableOpacity>

     <TouchableOpacity>
    
              <Icon name = 'plus'  fill = '#E74C3C' style = {styles.plus}/>
            
      </TouchableOpacity>

     <TouchableOpacity onPress={onReminderPress}>
    
              <Icon name = 'bell'  fill = '#884EA0' style = {styles.button}/>
            
      </TouchableOpacity>
    
      <TouchableOpacity onPress={onForumPress}>
     
            
              <Icon name = 'message-square'  fill = '#808B96' style = {styles.button}/>
           
      </TouchableOpacity>
    </View>
  
  )
}
const styles = StyleSheet.create({
  button:{
    width:50, 
    height:50,
    borderRadius:5,
  },
  plus:{
    width:60, 
    height:60,
    borderRadius:250,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderWidth:2,
    backgroundColor:'#EBDEF0',
    borderColor:'#AF7AC5',
    marginBottom:10
  }
});



export default PeriodNavigation