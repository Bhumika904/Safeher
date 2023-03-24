import { View, ScrollView,Image,StyleSheet,Text } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import DropdownScreen from '../Components/DropdownScreen';
import DropdownAverage from '../Components/DropdownAverage';
import CustomButton from '../Components/CustomButton';
import DatePicker from 'react-native-date-picker';
const PeriodTracker = () => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const navigation = useNavigation();

  const onNextPress = () => {
    navigation.navigate('PeriodDashboard')
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{alignItems: 'center', width: 400,
        backgroundColor:'white',
            height:'100%',
            alignItems: 'center',
      }}>
        <Image source={require("../Assests/Images/period.png")}/>
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
          fontSize:19}}>On average, How long is your period?</Text>
          <DropdownScreen/>
          <Text style={{marginTop:25,
          fontSize:19}}>On average, How long is your cycle?</Text>
          <DropdownAverage/>
          <Text style={{marginTop:20,
          fontSize:22}}>When did your Last Period start?</Text>
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
      <CustomButton text="Next" 
      type="FIRST"
      TextColor="white"
      onPress={() => {
        onNextPress()
      }}/>
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

export default PeriodTracker