/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableHighlight,
  Image,
} from 'react-native';
import {StackNavigator, TabNavigator,DrawerNavigator} from 'react-navigation';


export default class Home4 extends React.Component {
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      
      <View style={styles.viewAll}>
      <Image resizeMode='cover' source={require('./src/landing-page.png')} style={{flex:1,flexGrow:1,flexDirection:'column'}} >
        <View style={{flexDirection:'column', justifyContent:'space-around',paddingTop:100,paddingLeft:30,}}>
             <Text style={styles.textAll}> Food</Text>
             <Text style={styles.text1}> Panda </Text>
             <Text style={styles.text2}> WHAT A TWIST. </Text>
             <Text style={styles.text3}> The Panda, the iconic long, slim slick of bread, has </Text>
             <Text style={styles.text3}> traditionally one of the most potebnt symbols of french </Text>
             <Text style={styles.text3}> culture. </Text>



        </View>
        </Image>
      </View>
      
    );
  }
}


const styles=StyleSheet.create({
  
  viewAll:{
    
    
    flex:1,

  },
  textAll:{
    color:'white',
    fontFamily:'times',
    fontWeight:'500',
    fontSize:30,
    paddingBottom:0,
    marginBottom:-15,
  },
  text1:{
    color:'white',
    fontFamily:'times',
    fontWeight:'300',
    fontSize:50,
    paddingTop:0,
    marginTop:0,
    marginLeft:-5,

  },
  text2:{
    color:'white',  
    fontWeight:'500',
    fontSize:13,   
  },
  text3:{
    color:'white', 
    fontSize:9,
    fontWeight:'300', 
       
  }
});



