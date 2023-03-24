import React from 'react';
import {View} from 'react-native';
import Background from '../Components/Background';
import Button from '../Components/Button';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const onSignInpress = () =>{
    navigation.navigate('SignIn')
  }
  const onSignUppress = () =>{
    //validate user
    navigation.navigate('SignUp')
  }
  return (
    <Background>
      <View style={{ marginHorizontal: 2, marginVertical: 400 }}>
      <Button bgColor='#BB8FCE' textColor='white' btnLabel="Login" Press={onSignInpress} />
      <Button bgColor='#F1948A' textColor='white' btnLabel="Signup" Press={onSignUppress} />
      </View>
    </Background>
  );
}


export default HomeScreen;
