// AddPost.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../Components/CustomButton';


const AddPost = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (text) => {
    setTitle(text);
  };

  const handleContentChange = (text) => {
    setContent(text);
  };

  const handleAddPost = async () => {
    try {
      const storedPosts = await AsyncStorage.getItem('posts');
      let postsArray = [];

      if (storedPosts !== null) {
        postsArray = JSON.parse(storedPosts);
      }

      const id = postsArray.length > 0 ? postsArray[postsArray.length - 1].id + 1 : 1;
      const newPost = { id, title, content };
      postsArray.push(newPost);

      await AsyncStorage.setItem('posts', JSON.stringify(postsArray));
      console.log('Post added successfully', newPost);
      navigation.goBack();
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Failed to add post');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../Assests/Images/Addpost.png")} style={{width:450}}/>
      <View style={{ paddingLeft:20}}>
       <Text style={styles.heading}>Add your discussion here and post it !</Text>
      <TextInput style={styles.titleInput} placeholder="Title" value={title} onChangeText={handleTitleChange} />
      <TextInput
        style={styles.contentInput}
        placeholder="Content"
        value={content}
        onChangeText={handleContentChange}
        multiline
      />
      <TouchableOpacity>
      <CustomButton text="Add" onPress={handleAddPost}
      type="FIRST"
      TextColor="white"/>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingRight:20,
  },
  heading:{
    marginTop:50,
    fontSize:18,
    color:'#5B2C6F',
    fontWeight:'600',
    paddingBottom:10,
  },
  titleInput: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    backgroundColor:'#F4ECF7',
    width:'85%',
    borderColor:'#e8e8e8',
    borderWidth:1,
    borderRadius:5,
    paddingHorizontal:10,
    marginVertical:15,
  },
  contentInput: {
    fontSize: 16,
    height: 200,
    textAlignVertical: 'top',
    marginBottom: 20,
    backgroundColor:'#F4ECF7',
  },
  addButton: {
    backgroundColor: '#007aff',
    borderRadius: 4,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AddPost;
