import React, {useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Confirmation from '../Screens/ConfirmationEmail/Confirmation'
import ForgetPassword from '../Screens/ForgetPassword/ForgetPassword';
import ResetPassword from '../Screens/ResetPassword/ResetPassword';

import SignUpScreen from '../Screens/SignUpScreen';
import SignInScreen from '../Screens/SignInScreen';
import Dashboard from '../Dashboard/Dashboard'
import PeriodTracker from '../PeriodTracker/PeriodTracker';
import PeriodDashboard from '../PeriodTracker/PeriodDashboard';
import PregnancyTracker from '../PregnancyTracker/PregnancyTracker';
import PregnancyDashboard from '../PregnancyTracker/PregnancyDashboard';
import PeriodCalendar from '../PeriodTracker/PeriodCalendar';
import PeriodNavigation from '../PeriodTracker/PeriodNavigation';
import HomeScreen from '../Screens/HomeScreen';

import Note from '../PeriodTracker/Note/Note'
import AddNote from '../PeriodTracker/Note/AddNote';
import DeleteNotes from '../PeriodTracker/Note/DeleteNotes';
import Edit from '../PeriodTracker/Note/Edit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PostList from '../PeriodTracker/Discussion/PostList';
import AddPost from '../PeriodTracker/Discussion/AddPost';

//import DrawerNavigation from '../DrawerNavigation/DrawerNavigation';

const Stack = createNativeStackNavigator();


const Navigation = () => {

  const [note, setNote] = useState();
  const [notes, setNotes] = useState([]);
  const [date, setDate] = useState(new Date().toUTCString());
 
  const [moveToBin, setMoveToBin] = useState([]);

  function handleNote(){
    let newNote = note;
    let newNotes = [newNote, ...notes];
    setNotes(newNotes);
    setNote('');
  
  AsyncStorage.setItem('storedNotes', JSON.stringify(newNotes)).then(()=>{
    setDate(newNotes)
  }).catch(error => console.log(error))
  
  AsyncStorage.setItem('date', JSON.stringify(date)).then(()=>{
    setDate(date);
  })
  } 
  useEffect(() => {
    loadNotes();
  }, []);
  
  const loadNotes = () => {
    AsyncStorage.getItem('storedNotes').then(()=>{
      if(data !== null){
        setNotes(JSON.parse(data));
      }
    }).catch(error => console.log(error))
  
    AsyncStorage.getItem('deletedNotes').then(data =>{
      if(data !== null){
        setMoveToBin(JSON.parse(data));
      }
    }).catch(error => console.log(error))
  
    AsyncStorage.getItem('date');
  }

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
           
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen name="SignIn" component={SignInScreen}/>
            <Stack.Screen name="SignUp" component={SignUpScreen}/>
            <Stack.Screen name="EmailConfirmation" component={Confirmation}/>
            <Stack.Screen name="ForgetPassword" component={ForgetPassword}/>
            <Stack.Screen name="ResetPassword" component={ResetPassword}/>
            <Stack.Screen name="Dashboard" component={Dashboard}/>
            <Stack.Screen name="PeriodTracker" component={PeriodTracker}/>
            <Stack.Screen name="PeriodDashboard" component={PeriodDashboard}/>
          
            <Stack.Screen name="PeriodCalendar" component={PeriodCalendar}/>
            <Stack.Screen name="PeriodNavigation" component={PeriodNavigation}/>
            {/* <Stack.Screen name="DrawerNavigation" component={DrawerNavigation}/> */}
            <Stack.Screen name="PregnancyTracker" component={PregnancyTracker}/>
            <Stack.Screen name="PregnancyDashboard" component={PregnancyDashboard}/>
            <Stack.Screen name='Notes'>
                {props => <Note {...props} notes={notes} moveToBin={moveToBin} setMoveToBin={setMoveToBin} setNotes={setNotes} 
                setNote={setNote} date={date} setDate={setDate}/>}
            </Stack.Screen>
            <Stack.Screen name='AddNote'>
                {props => <AddNote {...props} note={note} setNote={setNote} handleNote={handleNote}/>}
            </Stack.Screen>
            <Stack.Screen name='DeleteNotes'>
              {props => <DeleteNotes {...props} moveToBin={moveToBin} setMoveToBin={setMoveToBin} notes={notes} setNotes={setNotes} date={date}/>}
            </Stack.Screen>
            <Stack.Screen name='Edit'>
              {props => <Edit {...props} notes={notes} setNotes={setNotes}/>}
            </Stack.Screen>
            <Stack.Screen name="PostList" component={PostList} options={{ title: 'Community Forum' }} />
           <Stack.Screen name="AddPost" component={AddPost} options={{ title: 'Add Post' }} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation