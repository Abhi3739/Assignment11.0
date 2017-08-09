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
  ScrollView,
} from 'react-native';
import {StackNavigator, TabNavigator,DrawerNavigator} from 'react-navigation';


export default class Home5 extends React.Component {
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      
      <ScrollView style={styles.viewAll}>
        <View>
             <View style={{flexDirection:'row',justifyContent:'space-between',}}><Text style={{fontSize:10,}}>MOETS CURRY LEAF </Text><Text style={{fontSize:11, fontWeight:'500'}}>$2.99 </Text></View>
              <View style={{margin:10,backgroundColor:'white',padding:3,flexDirection:'row'}}>
                <Image source={require('./src/imgmenu1.png')} style={{width:50,height:50,flexDirection:'row',}}/>

                  <View style={{flexDirection:'column'}}>
                      <Text style={{fontSize:11,fontWeight:'500'}}> Noodle Soup</Text>
                      <View style={{flexDirection:'row'}}>
                      <Text style={{fontSize:9,flexDirection:'row'}}> Boiled noodle served in a pot with broth </Text>

                        <View style={{flexDirection:'row',justifyContent:'center',paddingLeft:25,}}>
                          <Text style={{fontSize:11,flexDirection:'row',fontWeight:'500',paddingRight:15,}}> $2.9 </Text><Image source={require('./src/minus.png')} style={{width:15,height:15,marginRight:5,}}/><Text style={{fontSize:11,flexDirection:'row',fontWeight:'500',marginRight:5,}}> 1 </Text>
                          <Image source={require('./src/plus.png')} style={{width:15,height:15,}}/>  
                        </View>
                        </View>

                  </View>
              </View>
        </View>

        <View>
             <View  style={{flexDirection:'row',justifyContent:'space-between'}}><Text style={{fontSize:10,}}>CAFE 5TH BY THE KITCHEN </Text>  
                      <Text style={{fontSize:11,fontWeight:'500'}}> $199 </Text>
             </View>
              <View style={{margin:10,marginBottom:1,backgroundColor:'white',padding:3,flexDirection:'row'}}>
                <Image source={require('./src/imgmenu11.png')} style={{width:50,height:50,flexDirection:'row',}}/>

                  <View style={{flexDirection:'column'}}>
                      <Text style={{fontSize:11,fontWeight:'500'}}> Veg Mixed Fried Rice </Text>
                      <View style={{flexDirection:'row'}}>
                      <Text style={{fontSize:9,flexDirection:'row',}}> Boiled noodle served in a pot with broth </Text>
                      <View style={{flexDirection:'row',justifyContent:'center',paddingLeft:25,}}>
                          <Text style={{fontSize:11,flexDirection:'row',fontWeight:'500',paddingRight:15,}}> $2.9 </Text><Image source={require('./src/minus.png')} style={{width:15,height:15,marginRight:5,}}/><Text style={{fontSize:11,flexDirection:'row',fontWeight:'500',marginRight:5,}}> 1 </Text>
                          <Image source={require('./src/plus.png')} style={{width:15,height:15,}}/>  
                        </View>
                  </View>
                  </View>
              </View>
              <View style={{margin:10,marginTop:0,backgroundColor:'white',padding:3,flexDirection:'row'}}>
                <Image source={require('./src/imgmenu12.png')} style={{width:50,height:50,flexDirection:'row',}}/>

                  <View style={{flexDirection:'column'}}>
                      <Text style={{fontSize:11,fontWeight:'500'}}> Paneer Tikka</Text>
                      <View style={{flexDirection:'row'}}>
                      <Text style={{fontSize:9,flexDirection:'row',}}> Boiled noodle served in a pot with broth</Text>
                       <View style={{flexDirection:'row',justifyContent:'center',paddingLeft:25,}}>
                          <Text style={{fontSize:11,flexDirection:'row',fontWeight:'500',paddingRight:15,}}> $2.9 </Text><Image source={require('./src/minus.png')} style={{width:15,height:15,marginRight:5,}}/><Text style={{fontSize:11,flexDirection:'row',fontWeight:'500',marginRight:5,}}> 1 </Text>
                          <Image source={require('./src/plus.png')} style={{width:15,height:15,}}/>  
                        </View>
                        </View>
                  </View>
              </View>

              <View style={{flexDirection:'row',justifyContent:'flex-end',paddingRight:85}}>
              <Text style={{fontSize:11,}}> SUB TOTAL</Text><Text style={{fontSize:11,fontWeight:'500',paddingLeft:30,}}> $17.99</Text>
              </View>

              <View style={{flexDirection:'row',marginTop:10,paddingBottom:10,borderBottomWidth:.5,justifyContent:'flex-end',paddingRight:85}}>
              <Text style={{fontSize:11,}}> SERVICE TAX(15%)</Text><Text style={{fontSize:11,fontWeight:'500',paddingLeft:30,}}> $1.00</Text>
              </View>

              <View  style={{flexDirection:'row',marginTop:10,justifyContent:'flex-end',paddingRight:85}}>
              <Text style={{fontSize:11,}}> TOTAL</Text><Text style={{fontSize:11,fontWeight:'500',paddingLeft:30,}}> $18.99</Text>
              </View>


              <View style={{alignItems:'flex-end',flexDirection:'column',marginTop:10,marginBottom:15,}}>

              <TouchableHighlight style={{backgroundColor:'orange',width:130,height:28,paddingLeft:15,
              paddingRight:15,paddingTop:3,paddingBottom:3,justifyContent:'flex-end'}}>
                    <Text style={{color:'white',fontSize:11,fontWeight:'500',paddingBottom:5}}> COMPLETE ORDER </Text>
              </TouchableHighlight>
              </View>



        </View>




        <View style={{backgroundColor:'white',}}>
            <Text style={{flexDirection:'column',fontSize:10,fontWeight:'500',paddingTop:10,paddingBottom:10,}}>YOU MAY ALSO LIKE</Text>
              <View style={{flexDirection:'row', backgroundColor:'white'}}>
      
          <View style={{flexDirection:'column',borderRightWidth:2,borderBottomWidth:2,borderColor:'lightgray',flex:1,}}>
            <Image source={require('./src/imgmenu1.png')} resizeMode='stretch' style={{height:50,flexDirection:'column',flex:1}}/>
            <View style={{padding:5}}>
                <Text style={{flexDirection:'column',fontSize:10,fontWeight:'500',}}>Cafe 5H The Kitchen </Text>
                <Text style={{flexDirection:'column',fontSize:8,}}>Lowrence Rood , Casual Dining </Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}><Text style={{color:'orange',fontSize:8,}}>Open now </Text> 
                        <Text style={{color:'orange',fontSize:8,}}>3.9 <Image source={require('./unselect_star.png')} style={{width:20,height:20,}}/></Text>
                </View>
              </View>
          </View>

          <View style={{flexDirection:'column',borderRightWidth:2,borderBottomWidth:2,borderColor:'lightgray',flex:1,}}>
            <Image source={require('./src/imgmenu2.png')} resizeMode='stretch' style={{height:50,flexDirection:'column'}}/>
            <View style={{padding:5}}>
                <Text style={{flexDirection:'column',fontSize:10,fontWeight:'500',}}>Cafe 5H The Kitchen </Text>
                <Text style={{flexDirection:'column',fontSize:8,}}>Lowrence Rood , Casual Dining </Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}><Text style={{color:'orange',fontSize:8,}}>Open now </Text> 
                        <Text style={{color:'orange',justifyContent:'flex-end',fontSize:8,}}>3.9 <Image source={require('./unselect_star.png')} style={{width:20,height:20,}}/></Text>
                </View>
            </View>
          </View>


          <View style={{flexDirection:'column',borderRightWidth:2,borderBottomWidth:2,borderColor:'lightgray',flex:1,}}>
            <Image source={require('./src/imgmenu3.png')} resizeMode='stretch' style={{height:50,flexDirection:'column',}}/>
            <View style={{padding:5}}>
                <Text style={{flexDirection:'column',fontSize:10,fontWeight:'500',}}>Truffles Ice & Spice </Text>
                <Text style={{flexDirection:'column',fontSize:8,}}>American, Cafe </Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}><Text style={{color:'orange',fontSize:8,}}>Open now </Text> 
                        <Text style={{color:'orange',justifyContent:'flex-end',fontSize:8,}}>4.2 <Image source={require('./unselect_star.png')} style={{width:20,height:20,}}/></Text>
                </View>
            </View>
          </View>



      </View>
        </View>
      
      
      </ScrollView>
      
    );
  }
}


const styles=StyleSheet.create({
  Btn:{
    
    
    marginTop:20
  },
  viewAll:{
    
    backgroundColor:'lightgray',
    flex:1,
   padding:10,



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



