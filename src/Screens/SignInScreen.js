import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image,ScrollView,TextInput,Alert} from 'react-native';
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form'

const SignInScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSignInPress = async data => {
    navigation.navigate('Dashboard')
    // if (loading) {
    //   return;
    // }

    // setLoading(true);
    // try {
    //   const response = await Auth.signIn(data.username, data.password);
    //   console.log(response);
    // } catch (e) {
    //   Alert.alert('Oops', e.message);
    // }
    // setLoading(false);
  };

const onForgetPasswordPressed = () => {
navigation.navigate('ForgetPassword')
};
const onSignInGoogle = () => {
console.warn('Google');
};
const onSignUppress = () =>{
  console.warn('onSignUpPress')
  //validate user
  navigation.navigate('SignUp')
}

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{alignItems: 'center', width: 400,
        backgroundColor:'#D7BDE2',
            height:'100%',
            paddingTop:50,
            alignItems: 'center',
      }}>
        <View>
          <Image source={require("../Assests/Images/safeherLogo.png")}
          style={{
            height:200,
            width:200,
            marginBottom:18
          }}/>
          </View>
      <View
          style={{
            width:'100%',
            height:'100%',
            borderTopRightRadius: 100,
            borderTopLeftRadius: 100,
            backgroundColor:'white',
            paddingTop:45,
            alignItems:'center'
        }}>
          
          <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{required: 'Username is required'}}
        />

        <CustomInput
          name="password"
          placeholder="Password"
          secureTextEntry
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password should be minimum 3 characters long',
            },
          }}
        />
      
      <CustomButton text="Sign In" onPress={handleSubmit(onSignInPress)}
      type="FIRST"
      TextColor="white"/>
      <CustomButton
      text = "Forget password?"
      type="ANOTHER"
      TextColor='black'
      onPress={onForgetPasswordPressed}
      />
      <CustomButton text="Sign In with Google" onPress={onSignInGoogle}
      TextColor="#EC7063"
      type="GOOGLE"
      />
          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center",marginBottom:30 }}>
            <Text style={{ fontSize: 16, marginTop:15}}>Don't have an account ? </Text>
            <TouchableOpacity onPress={onSignUppress}>
            <Text style={{ color: '#F1948A', fontWeight: 'bold', fontSize: 16, marginTop:15 }}>Sign Up</Text>
            </TouchableOpacity>
          </View>  
      </View>
      </View>
      </ScrollView>
  );
};

export default SignInScreen;
