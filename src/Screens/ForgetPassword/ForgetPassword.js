import React, { useState } from 'react';
import {View, Text, TouchableOpacity,ScrollView,Alert} from 'react-native';
import CustomButton from '../../Components/CustomButton';
import CustomInput from '../../Components/CustomInput';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const ForgetPassword = () => {
    const {control, handleSubmit} = useForm();

    const navigation = useNavigation();

    const onSignInPress = () =>{
     navigation.navigate('SignIn')
  }
    const onSendPressed = async data => {
      navigation.navigate('ResetPassword');
    // try {
    //   await Auth.forgotPassword(data.username);
    //   navigation.navigate('ResetPassword');
    // } catch (e) {
    //   Alert.alert('Oops', e.message);
    // }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Text
          style={{
            padding:45,
            color: '#C39BD3',
            fontSize: 25,
            fontWeight: 'bold',
            marginLeft:30,
            marginTop:50,
            fontFamily:'fantasy'
          }}>
          Reset your password
        </Text>
        <View>
            <View style={{
                marginLeft:"14%",
            }}>
          <CustomInput
          name="username"
          control={control}
          placeholder="Username"
          rules={{
            required: 'Username is required',
          }}
        />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              marginLeft:15
            }}>
           
          </View>
          <CustomButton
            text = "Send"
            type="CONFIRMATION"
            onPress={handleSubmit(onSendPressed)}
      />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16}}>
             Back to{' '}
            </Text>
            <TouchableOpacity
              onPress={onSignInPress}>
              <Text
                style={{color:'#AF7AC5', fontWeight: 'bold', fontSize: 16}}>
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </ScrollView>
  );
};

export default ForgetPassword;
