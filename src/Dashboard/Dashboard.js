import { View,ScrollView,Image,StyleSheet, Text} from 'react-native'
import React, {useState,useEffect} from 'react'
import dayjs from "dayjs";
import ButtonFordash from '../Components/ButtonsFordash';
import { useNavigation } from '@react-navigation/native';

const Dashboard = () => {
  const [date, setDate] = useState(dayjs());
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(dayjs());
    }, 1000 * 60);

    return () => clearInterval(interval);
  }, []);
  const navigation = useNavigation();

  const PeriodTrackerPress = () =>{
    navigation.navigate('PeriodTracker') 
}
const PregnancyTrackerPress = () =>{
  navigation.navigate('PregnancyTracker') 
}
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{alignItems: 'center', width: 400,
        backgroundColor:'white',
            height:'100%',
            paddingTop:25,
            alignItems: 'center',
      }}>
        <Image source={require("../Assests/Images/dashboardImg.png")}
          style={{
            height:200,
            width:300,
            marginBottom:15
          }}/>
          <Text style={styles.date}>{date.format("dddd, DD MMMM")}</Text>
         <Text style={styles.time}>{date.format("hh:mm")}</Text>
         <View  style={{alignItems: 'center', width: 400,
           height:500,
          backgroundColor:'#E8DAEF',
          marginVertical:10
        }}>
          <ButtonFordash text="Use period tracker" 
            type="PERIOD"
            TextColor="white"
            onPress={PeriodTrackerPress }/>
            <ButtonFordash
            text = "Use Pregnancy tracker"
            type="PREGNANCY"
            TextColor='white'
            onPress={PregnancyTrackerPress}
      />
      <ButtonFordash text="Use child's growth tracker" 
      TextColor="white"
      type="CHILD"
      />
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

export default Dashboard