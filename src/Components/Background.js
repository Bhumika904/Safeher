import React from 'react';
import {View, ImageBackground} from 'react-native';

const Background = ({ children }) => {
  return (
    <View style={{backgroundColor:'#EBDEF0', height:'100%'}}>
      <ImageBackground source={require("../Assests/Images/SafeherFullLogo.png")} style={{ height:'78%' }} />
      <View style={{ position: "absolute" }}>
        {children}
      </View>
    </View>
  );
}

export default Background;
