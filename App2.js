import React, {Component} from 'react';
import {View, Text,StyleSheet,Image} from 'react-native';
import {StackNavigator, TabNavigator,DrawerNavigator} from 'react-navigation';
import ImageSlider from 'react-native-image-slider';

/*export default class Home3 extends Component{
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
			<View>
			<Text>
			hi how are you?
			</Text>
			</View>
		)
	}
}

*/



export default class Home3 extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            position: 1,
            interval: null
        };
    }
    static navigationOption={
    tabBarLabel: 'Home',
     tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./Order_Btn.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  }
 
    componentWillMount() {
        this.setState({interval: setInterval(() => {
            this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
        }, 2000)});
    }
 
    componentWillUnmount() {
        clearInterval(this.state.interval);
    }
 
    render() {
        return (
            <View style={styles.container}>
            <View style={{ flexDirection:'column',}}>
                <ImageSlider
                    images={[
                        `C:\Users\Abhimanyu\Desktop\Hermit crabs\car.jpg`,
                        `./bg.jpg`,
                        `https://placeimg.com/640/480/any`,
                    ]}
                    position={this.state.position}
                    onPositionChanged={position => this.setState({position})}/>
                    </View>
                    <View style={{flexDirection:'row'}}>
      
          <View style={{flexDirection:'column',flexWrap:'wrap',}}>
            <Image source={require('./bg.jpg')} style={{width:200,height:50,flexDirection:'column'}}/>
            <Text style={{flexDirection:'column',fontSize:15,fontWeight:'700',}}>Cafe 5H The Kitchen </Text>
            <Text style={{flexDirection:'column'}}>Lowrence Rood , Casual Dining </Text>
            <View style={{flexDirection:'row',}}><Text style={{color:'orange'}}>Open now </Text> 
                    <Text style={{color:'orange',justifyContent:'flex-end'}}>3.9 </Text>
            </View>
          </View>
          <View style={{flexDirection:'column',flexWrap:'wrap',}}>
            <Image source={require('./bg.jpg')} style={{width:200,height:50,flexDirection:'column'}}/>
            <Text style={{flexDirection:'column',fontSize:15,fontWeight:'700',}}>Truffles Ice & Spice </Text>
            <Text style={{flexDirection:'column'}}>American, Cafe </Text>
            <View style={{flexDirection:'row',}}><Text style={{color:'orange'}}>Open now </Text> 
                    <Text style={{color:'orange',justifyContent:'flex-end'}}>4.2 </Text>
            </View>
          </View>
      </View>
            </View>
        );
    }
}






const fourth = TabNavigator({
  
  Home2:{ screen:Home3}


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


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
       // backgroundColor: 'red',
     //  flexWrap:'Wrap',
      
    },
    buttons: {
        height: 15,
        marginTop: -15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    button: {
        margin: 3,
        width: 8,
        height: 8,
        borderRadius: 8 / 2,
        backgroundColor: '#ccc',
        opacity: 0.9
    },
    buttonSelected: {
        opacity: 1,
        backgroundColor: '#fff',
    }
});
