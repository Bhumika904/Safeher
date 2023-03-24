import React, { useState } from 'react';
import {View, Text, TouchableOpacity,ScrollView} from 'react-native';
import CustomButton from '../../Components/CustomButton';
import CustomInput from '../../Components/CustomInput';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const ResetPassword = () => {
  const {control, handleSubmit} = useForm();

  const navigation = useNavigation();

  const onSubmitPressed = async data => {
      navigation.navigate('SignIn');
      alert("password reset sucessfully")
    }


  const onSignInPress = () => {
    navigation.navigate('SignIn');
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
          placeholder="Username"
          name="username"
          control={control}
          rules={{required: 'Username is required'}}
        />

        <CustomInput
          placeholder="Code"
          name="code"
          control={control}
          rules={{required: 'Code is required'}}
        />

        <CustomInput
          placeholder="Enter your new password"
          name="password"
          control={control}
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
        />
           
          </View>
          <CustomButton
            text = "Submit"
            type="CONFIRMATION"
            onPress={handleSubmit(onSubmitPressed)}
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

export default ResetPassword;
