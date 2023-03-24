import React, { useState } from 'react';
import {View, Text, TouchableOpacity,ScrollView, Alert} from 'react-native';
import Button from '../Components/Button';
import Field from '../Components/Field';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form'

import axios from 'axios';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
    const {control,handleSubmit, watch} = useForm();
    const pwd = watch('password');
    const navigation = useNavigation();

    const onSignInPress = () =>{
        navigation.navigate('SignIn') 
    }
    const registerUser = async data => {
      const {Username, Password, Email, fname, lname} = data;
      try {
        console.log('inside error')
        const response = await axios.post('https://localhost:44385/api/Authentication', {
          role:'User',
          Username,
          Email,
          Password
        });
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    }
  
    const onRegisterPressed = async data => {
      const response = await registerUser(Username, email, password, fname, lname);
      navigation.navigate('EmailConfirmation');
      // try {
      //   await Auth.signUp({
      //     username,
      //     password,
      //     attributes: {email, Fname, Lname, preferred_username: username},
      //   });
      //   navigation.navigate('EmailConfirmation', {username});
      // } catch (e) {
      //   Alert.alert('Oops', e.message);
      // }
      // try {
      //   const response = await axios.post('https://localhost:7103/api/User/UserRegistration', {
      //     Fname,
      //     Lname,
      //     username,
      //     email,
      //     password
      //   });
      //   console.log(response.data);
      //   return response.data;
      // } catch (error) {
      //   console.error(error);
      // }
    
    };
    const onTermsPressed =() =>{
        console.warn('onTermsPressed');
    }
    const privacyPressed =() =>{
        console.warn('privacyPressed');
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{backgroundColor:'#C39BD3'}}>
        <Text
          style={{
            color:'#5B2C6F',
            fontSize:30,
            marginLeft:60,
            marginTop: 40,
            fontFamily:'fantasy'
          }}>
          Welcome to SafeHer
        </Text>
        <Text
          style={{
            marginTop:15,
            marginBottom:18,
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginLeft:90,
            fontFamily:'fantasy'
          }}>
          Let's help you to track
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height:'100%',
            width:'100%',
          }}>
        
          <Field name="fname"
          control={control}
          placeholder="First Name"
          rules={{
            required: 'Name is required',
            minLength: {
              value: 3,
              message: 'Name should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Name should be max 24 characters long',
            },
          
          }} />

    <Field name="lname"
          control={control}
          placeholder="Last Name"
          rules={{
            required: 'Name is required',
            minLength: {
              value: 3,
              message: 'Name should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Name should be max 24 characters long',
            },
          }} />

          <Field name="Username"
          control={control}
          placeholder="Username"
          rules={{
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Username should be max 24 characters long',
            },
          }} />
          <Field 
          name="Email"
          control={control}
          placeholder="Email"
          rules={{
            required: 'Email is required',
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
          />
          <Field 
          name="Password"
          control={control}
          placeholder="Password"
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },

          }}/>
          <Field 
          name="password-repeat"
          control={control}
          placeholder="Repeat Password"
          secureTextEntry
          rules={{
            validate: value => value === pwd || 'Password do not match',
          }} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              marginLeft:15
            }}>
            <Text style={{color: 'grey', fontSize: 16, marginTop:10}}>
              By signing in, you agree to our{' '}
            </Text>
            <Text style={{color: '#EC7063', fontWeight: 'bold', fontSize: 16,marginTop:10}} onPress={onTermsPressed}>
              Terms & Conditions
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent :"center",
              width: '100%',
              paddingRight: 16,
              marginBottom: 10
            }}>
            <Text style={{color: 'grey', fontSize: 16}}>
              and {" "}
            </Text>
            <Text style={{color:'#EC7063', fontWeight: 'bold', fontSize: 16}} onPress={privacyPressed}>
              Privacy Policy
            </Text>
          </View>
          <Button
            textColor="white"
            bgColor='#C39BD3'
            btnLabel="Signup"
            Press={handleSubmit(onRegisterPressed)}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom:15
            }}>
            <Text style={{fontSize: 16, marginTop:10}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={onSignInPress}>
              <Text
                style={{color:'#AF7AC5', fontWeight: 'bold', fontSize: 16, marginTop:10}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </ScrollView>
  );
};

export default SignUpScreen;
