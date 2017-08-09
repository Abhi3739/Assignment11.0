import React, {Component} from 'react';
import {View, Text,Image,ScrollView,} from 'react-native';
import {StackNavigator, TabNavigator,DrawerNavigator} from 'react-navigation';

export default class Home2 extends Component{
	static navigationOption={
		tabBarLabel: 'Home',
		 tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./Order_Btn.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
	}
	render(){
		return(
      <ScrollView style={{paddingLeft:3, paddingRight:3,backgroundColor:'lightgray'}}>

        <View style={{flexDirection:'column',marginBottom:10,}}>
        <Image source={require('./src/Head_Image.png')} style={{flex:1}}/>

        </View>



			<View style={{flexDirection:'row', backgroundColor:'white'}}>
			
          <View style={{flexDirection:'column',borderRightWidth:2,borderBottomWidth:2,borderColor:'lightgray',flex:1,}}>
            <Image source={require('./src/imgmenu1.png')} resizeMode='stretch' style={{height:50,flexDirection:'column'}}/>
            <View style={{padding:5}}>
                <Text style={{flexDirection:'column',fontSize:13,fontWeight:'700',}}>Cafe 5H The Kitchen </Text>
                <Text style={{flexDirection:'column',fontSize:8,}}>Lowrence Rood , Casual Dining </Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}><Text style={{color:'orange',fontSize:8,}}>Open now </Text> 
                        <Text style={{color:'orange',fontSize:8,}}>3.9 <Image source={require('./unselect_star.png')} style={{width:20,height:20,}}/></Text>
                </View>
              </View>
          </View>

          <View style={{flexDirection:'column',borderRightWidth:2,borderBottomWidth:2,borderColor:'lightgray',flex:1,}}>
            <Image source={require('./src/imgmenu2.png')} resizeMode='stretch' style={{height:50,flexDirection:'column'}}/>
            <View style={{padding:5}}>
                <Text style={{flexDirection:'column',fontSize:13,fontWeight:'700',}}>Cafe 5H The Kitchen </Text>
                <Text style={{flexDirection:'column',fontSize:8,}}>Lowrence Rood , Casual Dining </Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}><Text style={{color:'orange',fontSize:8,}}>Open now </Text> 
                        <Text style={{color:'orange',justifyContent:'flex-end',fontSize:8,}}>3.9 <Image source={require('./unselect_star.png')} style={{width:20,height:20,}}/></Text>
                </View>
            </View>
          </View>


          <View style={{flexDirection:'column',borderRightWidth:2,borderBottomWidth:2,borderColor:'lightgray',flex:1,}}>
            <Image source={require('./src/imgmenu3.png')} resizeMode='stretch' style={{height:50,flexDirection:'column'}}/>
            <View style={{padding:5}}>
                <Text style={{flexDirection:'column',fontSize:13,fontWeight:'700',}}>Truffles Ice & Spice </Text>
                <Text style={{flexDirection:'column',fontSize:8,}}>American, Cafe </Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}><Text style={{color:'orange',fontSize:8,}}>Open now </Text> 
                        <Text style={{color:'orange',justifyContent:'flex-end',fontSize:8,}}>4.2 <Image source={require('./unselect_star.png')} style={{width:20,height:20,}}/></Text>
                </View>
            </View>
          </View>



			</View>





      <View style={{flexDirection:'row',backgroundColor:'white'}}>
      
          <View style={{flexDirection:'column',borderRightWidth:2,borderRightColor:'lightgray',flex:1,}}>
            <Image source={require('./src/imgmenu4.png')} resizeMode='stretch'  style={{height:50,flexDirection:'column'}}/>
            <View style={{padding:5}}>
                <Text style={{flexDirection:'column',fontSize:13,fontWeight:'700',}}>Londoners </Text>
                <Text style={{flexDirection:'column',fontSize:8}}>Lowrence Rood , Casual Dining </Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}><Text style={{color:'orange',fontSize:8}}>Open now </Text> 
                        <Text style={{color:'orange',justifyContent:'flex-end',fontSize:8}}>4.5 <Image source={require('./unselect_star.png')} style={{width:20,height:20,}}/></Text>
                </View>
            </View>
          </View>
          <View style={{flexDirection:'column',borderRightWidth:2,borderRightColor:'lightgray',flex:1,}}>
            <Image source={require('./src/imgmenu5.png')} resizeMode='stretch' style={{height:50,flexDirection:'column'}}/>
            <View style={{padding:5}}>
                <Text style={{flexDirection:'column',fontSize:13,fontWeight:'700',}}>Big Wong </Text>
                <Text style={{flexDirection:'column',fontSize:8}}>Chinese, Thai </Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}><Text style={{color:'orange',fontSize:8}}>Open now </Text> 
                        <Text style={{color:'orange',justifyContent:'flex-end',fontSize:8}}>3.7 <Image source={require('./unselect_star.png')} style={{width:20,height:20,}}/></Text>
                </View>
              </View>
          </View>


          <View style={{flexDirection:'column',borderRightWidth:2,borderRightColor:'lightgray',flex:1,}}>
            <Image source={require('./src/imgmenu6.png')} resizeMode='stretch' style={{height:50,flexDirection:'column'}}/>
            <View style={{padding:5}}>
                <Text style={{flexDirection:'column',fontSize:13,fontWeight:'700',}}>Big Wong </Text>
                <Text style={{flexDirection:'column',fontSize:8}}>Chinese, Thai </Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}><Text style={{color:'orange',fontSize:8}}>Open now </Text> 
                        <Text style={{color:'orange',justifyContent:'flex-end',fontSize:8}}>3.7 <Image source={require('./unselect_star.png')} style={{width:20,height:20,}}/></Text>
                </View>
            </View>
          </View>

      </View>



      <View style={{flexDirection:'row',backgroundColor:'white'}}>
      
          <View style={{flexDirection:'column',borderRightWidth:2,borderRightColor:'lightgray',flex:1,}}>
            <Image source={require('./src/imgmenu7.png')} resizeMode='stretch' style={{height:50,flexDirection:'column'}}/>
            <View style={{padding:5}}>
                <Text style={{flexDirection:'column',fontSize:13,fontWeight:'700',}}>NYC Pie </Text>
                <Text style={{flexDirection:'column',fontSize:8,}}>Italian </Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}><Text style={{color:'orange',fontSize:8,}}>Open now </Text> 
                        <Text style={{color:'orange',justifyContent:'flex-end',fontSize:8,}}>4.1 <Image source={require('./unselect_star.png')} style={{width:20,height:20,}}/></Text>
                </View>
            </View>
          </View>
          <View style={{flexDirection:'column',borderRightWidth:2,borderRightColor:'lightgray',flex:1,}}>
            <Image source={require('./src/imgmenu8.png')} resizeMode='stretch' style={{height:50,flexDirection:'column'}}/>
            <View style={{padding:5}}>
                  <Text style={{flexDirection:'column',fontSize:13,fontWeight:'700',}}>Moets Curry Leaf </Text>
                  <Text style={{flexDirection:'column',fontSize:8,}}>North Indian Seafood, Mutton, Chicken.... </Text>
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}><Text style={{color:'orange',fontSize:8,}}>Open now </Text> 
                          <Text style={{color:'orange',textAlign:'right',fontSize:8,}}>3.3  <Image source={require('./unselect_star.png')} style={{width:20,height:20,}}/></Text>
                  </View>
            </View>
          </View>

          <View style={{flexDirection:'column',borderRightWidth:2,borderRightColor:'lightgray',flex:1,}}>
            <Image source={require('./src/imgmenu9.png')} resizeMode='stretch' style={{height:50,flexDirection:'column'}}/>
            <View style={{padding:5}}>
                <Text style={{flexDirection:'column',fontSize:13,fontWeight:'700',}}>Moets Curry Leaf </Text>
                <Text style={{flexDirection:'column',fontSize:8,}}>North Indian Seafood, Mutton, Chicken.... </Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}><Text style={{color:'orange',fontSize:8,}}>Open now </Text> 
                        <Text style={{color:'orange',justifyContent:'flex-end',fontSize:8,}}>3.3  <Image source={require('./unselect_star.png')} style={{width:20,height:20,}}/></Text>
                </View>
            </View>    
          </View>
      </View>



      <View style={{flexDirection:'row',backgroundColor:'white'}}>
      
          <View style={{flexDirection:'column',borderRightWidth:2,borderRightColor:'lightgray',flex:1,}}>
            <Image source={require('./src/imgmenu10.png')} resizeMode='stretch' style={{height:50,flexDirection:'column'}}/>
            <View style={{padding:5}}>
                <Text style={{flexDirection:'column',fontSize:13,fontWeight:'700',}}>Cafe 5H The Kitchen </Text>
                <Text style={{flexDirection:'column',fontSize:8,}}>Lowrence Rood , Casual Dining </Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}><Text style={{color:'orange',fontSize:8,}}>Open now </Text> 
                        <Text style={{color:'orange',justifyContent:'flex-end',fontSize:8,}}>3.9 <Image source={require('./unselect_star.png')} style={{width:20,height:20,}}/></Text>
                </View>
              </View>
          </View>
          <View style={{flexDirection:'column',borderRightWidth:2,borderRightColor:'lightgray',flex:1,}}>
            <Image source={require('./src/imgmenu11.png')} resizeMode='stretch' style={{height:50,flexDirection:'column'}}/>
            <View style={{padding:5}}>
                  <Text style={{flexDirection:'column',fontSize:13,fontWeight:'700',}}>Cafe 5H The Kitchen </Text>
                  <Text style={{flexDirection:'column',fontSize:8,}}>Lowrence Rood , Casual Dining </Text>
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}><Text style={{color:'orange',fontSize:8,}}>Open now </Text> 
                          <Text style={{color:'orange',justifyContent:'flex-end',fontSize:8,}}>3.9 <Image source={require('./unselect_star.png')} style={{width:20,height:20,}}/></Text>
                  </View>
            </View>
          </View>

          <View style={{flexDirection:'column',borderRightWidth:2,borderRightColor:'lightgray',flex:1,}}>
            <Image source={require('./src/imgmenu12.png')} style={{height:50,flexDirection:'column'}}/>
            <View style={{padding:5}}>
                  <Text style={{flexDirection:'column',fontSize:13,fontWeight:'700',}}>Cafe 5H The Kitchen </Text>
                  <Text style={{flexDirection:'column',fontSize:8,}}>Lowrence Rood , Casual Dining </Text>
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}><Text style={{color:'orange',fontSize:8,}}>Open now </Text> 
                          <Text style={{color:'orange',justifyContent:'flex-end',fontSize:8,}}>3.9 <Image source={require('./unselect_star.png')} style={{width:20,height:20,}}/></Text>
                  </View>
            </View>
          </View>
      </View>


      <View style={{flexDirection:'row',backgroundColor:'white',}}>
      
          <View style={{flexDirection:'column',borderRightWidth:2,borderRightColor:'lightgray',flex:1,}}>
            <Image source={require('./src/imgmenu1.png')} style={{height:50,flexDirection:'column'}}/>
            <View style={{padding:5}}>
                <Text style={{flexDirection:'column',fontSize:13,fontWeight:'700',}}>Berco's </Text>
                <Text style={{flexDirection:'column',fontSize:8,}}>Lowrence Rood , Casual Dining </Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}><Text style={{color:'orange',fontSize:8,}}>Open now </Text> 
                        <Text style={{color:'orange',justifyContent:'flex-end',fontSize:8,}}>3.9 <Image source={require('./unselect_star.png')} style={{width:20,height:20,}}/></Text>
                </View>
            </View>
          </View>
          <View style={{flexDirection:'column',borderRightWidth:2,borderRightColor:'lightgray',flex:1,}}>
            <Image source={require('./src/imgmenu2.png')} style={{height:50,flexDirection:'column'}}/>
            <View style={{padding:5}} >
                <Text style={{flexDirection:'column',fontSize:13,fontWeight:'700',}}>Truffles Ice & Spice </Text>
                <Text style={{flexDirection:'column',fontSize:8,}}>Lowrence Rood , Casual Dining </Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}><Text style={{color:'orange',fontSize:8,}}>Open now </Text> 
                        <Text style={{color:'orange',justifyContent:'flex-end',fontSize:8,}}>3.9 <Image source={require('./unselect_star.png')} style={{width:20,height:20,}}/></Text>
                </View>
            </View>
          </View>

          <View style={{flexDirection:'column',borderRightWidth:2,borderRightColor:'lightgray',flex:1,}}>
            <Image source={require('./src/imgmenu3.png')} style={{height:50,flexDirection:'column'}}/>
            <View style={{padding:5}}>
                <Text style={{flexDirection:'column',fontSize:13,fontWeight:'700',}}>Truffles Ice & Spice </Text>
                <Text style={{flexDirection:'column',fontSize:8,}}>Lowrence Rood , Casual Dining </Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}><Text style={{color:'orange',fontSize:8,}}>Open now </Text> 
                        <Text style={{color:'orange',textAlign:'right',fontSize:8,}}>3.9<Image source={require('./unselect_star.png')} style={{width:20,height:20,}}/> </Text>
                </View>
            </View>
          </View>
      </View>

      </ScrollView>
		)
	}
}
const fourth = TabNavigator({
  
  Home2:{ screen:Home2}


},
{
  tabBarPosition:'bottom',
  tabBarOptions: {
    activeTintColor: '#000000',
    showIcon:true,
    showLabel:false,
    
    style:{
      backgroundColor:'gray',
      
    }
  },
});