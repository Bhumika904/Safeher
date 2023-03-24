import React, { useState } from 'react';
import {View, Text, Touchable, TouchableOpacity,ScrollView,Alert} from 'react-native';
import Button from '../../Components/Button';
import CustomButton from '../../Components/CustomButton';
import CustomInput from '../../Components/CustomInput';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {useRoute} from '@react-navigation/native';

const Confirmation = () => {
  const route = useRoute();
  const {control, handleSubmit, watch} = useForm({
    defaultValues: {username: route?.params?.username},
  });

  const username = watch('username');
    const[code, setPasswordRepeat] = useState('');
    const navigation = useNavigation();

    const onConfirmPressed = async data => {
      navigation.navigate('SignIn');
      // try {
      //   await Auth.confirmSignUp(data.username, data.code);
      //   navigation.navigate('SignIn');
      // } catch (e) {
      //   Alert.alert('Oops', e.message);
      // }
    };
  
    const onSignInPress = () => {
      navigation.navigate('SignIn');
    };
  
    const onResendPress = async () => {
      try {
        await Auth.resendSignUp(username);
        Alert.alert('Success', 'Code was resent to your email');
      } catch (e) {
        Alert.alert('Oops', e.message);
      }
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
          Confirm your Email
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
            required: 'Username code is required',
          }}
        />

        <CustomInput
          name="code"
          control={control}
          placeholder="Enter your confirmation code"
          rules={{
            required: 'Confirmation code is required',
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
            text = "Confirm"
            type="CONFIRMATION"
            onPress={handleSubmit(onConfirmPressed)}
      />
          <Button
            textColor="#F1948A"
            bgColor='white'
            btnLabel="Resend Code"
            onPress={onResendPress}
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

export default Confirmation;
