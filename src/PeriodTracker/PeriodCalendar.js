import { View, ScrollView, Text, Image, TouchableOpacity} from 'react-native'
import { ApplicationProvider, Layout,IconRegistry, Icon } from '@ui-kitten/components';
import React from 'react'
import {Calendar} from 'react-native-calendars';
import PeriodNavigation from './PeriodNavigation';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons'

import { useNavigation } from '@react-navigation/native';
const PeriodCalendar = () => {
  // const navigation = useNavigation();
  // const onDrawerPress = () => {
  //   navigation.navigate('DrawerNavigation')
  //   };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{backgroundColor:"#FDEDEC"}}>

    <TouchableOpacity>
     <IconRegistry icons={EvaIconsPack}/>
            <ApplicationProvider {...eva} theme={eva.light}>
              <Icon name = 'file-add-outline'  fill = '#E74C3C' style = {{width:'50', height:'50'}}/>
            </ApplicationProvider>
      </TouchableOpacity>
    
    <Image source={require("../Assests/Images/myperiod.png")}/>
      <Calendar style={{ marginTop:'13%'}}
  markingType={'custom'}
  markedDates={{
    '2023-02-06': {
      customStyles: {
        container: {
          backgroundColor:'#F1948A'
        },
        text:{
          color:'white'
        }
      }
    },
    '2023-02-07': {
      customStyles: {
        container: {
          backgroundColor:'#F1948A'
        },
        text:{
          color:'white'
        }
      }
    },
    '2023-02-08': {
      customStyles: {
        container: {
          backgroundColor:'#F1948A'
        },
        text:{
          color:'white'
        }
      }
    },
    '2023-02-09': {
      customStyles: {
        container: {
          backgroundColor:'#F1948A'
        },
        text:{
          color:'white'
        }
      }
    },
    '2023-02-10': {
      customStyles: {
        container: {
          backgroundColor:'#F1948A'
        },
        text:{
          color:'white'
        }
      }
    },
    '2023-02-13': {
      customStyles: {
        container: {
          backgroundColor:'#A3E4D7'
        },
        text:{
          color:'black'
        }
      }
    },
    '2023-02-14': {
      customStyles: {
        container: {
          backgroundColor:'#A3E4D7'
        },
        text:{
          color:'black'
        }
      }
    },
    '2023-02-15': {
      customStyles: {
        container: {
          backgroundColor:'#A3E4D7'
        },
        text:{
          color:'black'
        }
      }
    },
    '2023-02-16': {
      customStyles: {
        container: {
          backgroundColor:'#A3E4D7'
        },
        text:{
          color:'black'
        }
      }
    },
    '2023-02-17': {
      customStyles: {
        container: {
          backgroundColor:'#A3E4D7'
        },
        text:{
          color:'black'
        }
      }
    },
    '2023-02-18': {
      customStyles: {
        container: {
          backgroundColor:'#A3E4D7'
        },
        text:{
          color:'black'
        }
      }
    },
    '2023-02-19': {
      customStyles: {
        container: {
          backgroundColor:'#A3E4D7'
        },
        text:{
          color:'black'
        }
      }
    },
    '2023-02-20': {
      customStyles: {
        container: {
          backgroundColor:'#A3E4D7'
        },
        text:{
          color:'black'
        }
      }
    },
    '2023-02-21': {
      customStyles: {
        container: {
          backgroundColor:'#A3E4D7'
        },
        text:{
          color:'black'
        }
      }
    },
    '2023-02-22': {
      customStyles: {
        container: {
          backgroundColor:'#A3E4D7'
        },
        text:{
          color:'black'
        }
      }
    },
  }}
/>
<PeriodNavigation/>
    </View>
    </ScrollView>
  )
}

export default PeriodCalendar