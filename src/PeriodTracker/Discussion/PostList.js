// PostList.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PostList = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const storedPosts = await AsyncStorage.getItem('posts');
        if (storedPosts !== null) {
          const parsedPosts = JSON.parse(storedPosts);
          setPosts(parsedPosts);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);

  const handleDeletePost = async (id) => {
    try {
      const storedPosts = await AsyncStorage.getItem('posts');
      let postsArray = [];

      if (storedPosts !== null) {
        postsArray = JSON.parse(storedPosts);
      }

      const updatedPosts = postsArray.filter((post) => post.id !== id);

      await AsyncStorage.setItem('posts', JSON.stringify(updatedPosts));
      console.log('Post deleted successfully');
      setPosts(updatedPosts);
    } catch (error) {
      console.log(error);
    }
  };

  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postContent}>{item.content}</Text>
      <Text style={styles.deleteButton} onPress={() => handleDeletePost(item.id)}>
        Delete
      </Text>
    </View>
  );

  return (
      <View style={styles.container}>
        <View style={{backgroundColor:'#EBDEF0',width:'100%'}}>
        <Image source={require("../../Assests/Images/discussion.jpeg")} 
        style={{width:400, height:100}}/>
          <Text style={styles.heading}>Beautiful Ladies, add your post here !</Text>
        </View>
      {posts.length > 0 ? (
         <FlatList data={posts} renderItem={renderPost} keyExtractor={(item) => item.id.toString()} />
      ) : (
        <Text style={styles.noPosts}>No posts to display</Text>
      )}
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddPost')}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D2B4DE',
    height:'100%', 
    
  },
  heading:{
    marginTop:20,
    fontSize:18,
    color:'#5B2C6F',
    fontWeight:'600',
    paddingLeft:30,
    paddingBottom:10,
  },
  postContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 20,
    marginBottom: 20,
    marginTop: 20,
    paddingLeft:20,
    paddingRight:20,
    paddingTop:10,
    backgroundColor:'#EAECEE'
  },
  postTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
   
  },
  postContent: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  deleteButton: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  addButton: {     
   position: 'absolute',
   bottom: 20,     
   right: 20,     
   backgroundColor: '#007aff',
   borderRadius: 30,
   width: 60,     
   height: 60,     
   alignItems: 'center',     
   justifyContent: 'center',     
   shadowColor: '#000',     
   shadowOffset: {       
    width: 0,       
    height: 3,     },     
    shadowOpacity: 0.27,     
    shadowRadius: 4.65,      
    elevation: 6,   },
    
  addButtonText: {     
    fontSize: 36,     
    color: '#fff',     
    lineHeight: 36,   },   
    
    noPosts: {     
      fontSize: 16,     
      textAlign:'center',
     justifyContent: 'center',
     marginTop:'50%'
  },

});
  export default PostList;