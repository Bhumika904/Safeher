import { View, ScrollView,Image,StyleSheet,Text } from 'react-native'
import React, {useState} from 'react'
import {Calendar} from 'react-native-calendars';

const PregnancyDashboard = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View >
        <Image source={require("../Assests/Images/Pregnancydays.png")}
        style={{height:170,
        width:390}}/>
        <View
          style={{
            borderRadius:250,
            height:200,
            width:200,
            marginLeft:'20%',
            backgroundColor:'#E8DAEF',
        }}>
    </View>
    <Calendar/>
    </View>
    </ScrollView>
  )
}

export default PregnancyDashboard