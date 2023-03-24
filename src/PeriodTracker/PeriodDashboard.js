import { View, ScrollView,Image,StyleSheet,Text } from 'react-native'
import React, {useState} from 'react'
import PeriodNavigation from './PeriodNavigation'


const PeriodDashboard = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{backgroundColor:'#F5EEF8'}}>
        <Image source={require("../Assests/Images/myperiod.png")}/>
        <View
          style={{
            borderRadius:250,
            height:250,
            width:250,
            marginLeft:'20%',
            backgroundColor:'#F1948A',
            marginTop:'10%',
            marginBottom:'20%',
        }}>
          <Text style={{fontSize:20,marginTop:35, marginLeft:'29%', color:'white'}}>Ovulation in</Text>
          <Text style={{fontSize:35,marginTop:13, marginLeft:'30%', color:'white'}}>1 Day</Text>
          <View  style={{
            height:2,
            width:250,
            marginTop:'4%',
            backgroundColor:'white',
        }}></View>
        <Text style={{
            fontSize:15,
            marginTop:'8%',
            marginLeft:'25%',
            width:150,
            color:'white'
        }}>Medium chance of getting pregnant</Text>
    </View>
    <PeriodNavigation/>
    </View>
</ScrollView>
  )
}

export default PeriodDashboard