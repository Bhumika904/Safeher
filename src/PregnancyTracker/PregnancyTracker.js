import { View, ScrollView,Image,StyleSheet,Text } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import DropdownScreen from '../Components/DropdownScreen';
import DropdownAverage from '../Components/DropdownAverage';
import CustomButton from '../Components/CustomButton';
import DatePicker from 'react-native-date-picker';
const PregnancyTracker = () => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const navigation = useNavigation();
  const onNextPress = async data => {
    navigation.navigate('PregnancyDashboard')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{alignItems: 'center', width: 400,
        backgroundColor:'white',
            height:'100%',
            alignItems: 'center',
      }}>
        <Image source={require("../Assests/Images/pregnancy.jpg")}
        style={{width:300, height:190}}/>
        <View
          style={{
            width:'100%',
            height:'100%',
            borderTopRightRadius: 100,
            borderTopLeftRadius: 100,
            backgroundColor:'#E8DAEF',
            paddingTop:30,
            alignItems:'center',
            marginVertical:27
        }}>
          <Text style={{marginTop:25,
          fontSize:19}}>When is your pregnancy date?</Text>
          <CustomButton
            text = "Enter Date"
            type="DATE"
            TextColor='black'
            font='400'
            onPress={() => setOpen(true)}/>
        <DatePicker
        modal
        open={open}
        date={date}
        mode = 'date'
        onConfirm={(date) => {
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
          <Text style={{marginTop:25,
          fontSize:19}}>How long is your period cycle?</Text>
          <DropdownAverage/>
      <CustomButton text="Calculate" 
      type="ANOTHER"
      TextColor="black"
      onPress={ onNextPress }/>

   <CustomButton text="Next" 
      type="FIRST"
      TextColor="white"
      onPress={ onNextPress }/>
         </View>
      </View>
      </ScrollView>
  )
}
const styles = StyleSheet.create({
  date: {
    color: "#D2B4DE",
    fontSize: 20,
    fontWeight: "700",
    marginTop:10,
  },
  time: {
    fontSize:70,
    fontWeight: "bold",
    color:"#BB8FCE",
  },
});

export default PregnancyTracker