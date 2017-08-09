/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 import { TabNavigator, StackNavigator ,DrawerNavigator} from "react-navigation";
import Rating from 'react-native-ratings';
import React, { Component } from 'react';
//import StarRating from 'react-native-rating-star';
//import {StarRating } from 'react-native-rating-star';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ListView,
  Button,
} from 'react-native';
import Home2 from './App1';
import Home3 from './App2';
import Home4 from './App3';
import Home5 from './App4';


export default class Home extends Component {
  constructor(props){
    super(props);
  }
  static navigationOptions = {
    title: 'Home',
    headerRight: <Button title="Info" />,
   // drawerLabel: 'Home',
    tabBarLabel: 'Sign In',
  
    
     
  }
  
  ratingCompleted(rating) {
  console.log("Rating is: " + rating)
}
valueChanged(rating) {
    console.log(rating)
  }

  render() {
    
    return (
      <ScrollView>
      <View style={styles.container}>
      
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Image source={require('./bg.jpg')} style={{width: 150, height: 150, borderRadius:100, }}>
        <Text style={{color:'yellow'}}> Hi</Text>
        </Image>
        

        <Rating
          showRating
          onFinishRating={this.ratingCompleted}
          style={{ paddingVertical: 5 ,backgroundColor:'red'}}
        />


      
      
      </View>
      </ScrollView>
    );
  }
}


 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  icon: {
    width: 70,
    height: 24,
  },
});

const fourthProject = TabNavigator({
   
  Home1: { screen: Home,

            navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: (
            <Image style={{ width: 24, height: 24 }} source={require('./src/Logo.jpg')}/>
      )
    }   


   },
   Home4:{screen:Home4,

          navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: (
            <Image style={{ width: 24, height: 24 }} source={require('./src/Home_Btn_nrm.png')}/>
      )
    }   

   },

  Home2:{ screen:Home2,
          navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: (
            <Image style={{ width: 24, height: 24, }} source={require('./src/Menu_Btn_nrm.png')}/>
      )
    }

          },
    
    Home5:{screen:Home5,

      navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: (
            <Image style={{ width: 24, height: 24, }} source={require('./src/Order_Btn_nrm.png')}/>
      )
    }

    },

    Home3:{ screen:Home3,
      navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: (
            <Image style={{ width: 24, height: 24 }} source={require('./src/Notifi_Btn_nrm.png')}/>
      )
    }
    },



},
{
  animationEnabled:true,
  backBehavior:'none',
  initialRouteName:'Home4',
  swipeEnabled:false,
  //tabBarComponent:Home2.TabBarBottom,
  tabBarPosition:'bottom',
  tabBarVisible:false,
  lazy:true,

  tabBarOptions: {
    activeTintColor: 'orange',
    
    inactiveTintColor:'red',
    
    
    showIcon:true,
    showLabel:false,
    upperCaseLabel:false,
    pressColor:'black',
    pressOpacity:0.8,

    
  indicatorStyle: {
      backgroundColor:'blue',
      borderBottomColor: 'orange',
      borderBottomWidth: 3,
      
      // borderTopwidth:2,
      // borderTopColor:'blue',
    },
    iconStyle:{


    },
    labelStyle:{
      fontSize:20,
      

    },

        
    style:{
      backgroundColor:'white',
      
    }
  },
});
AppRegistry.registerComponent('fourthProject', () => fourthProject);
