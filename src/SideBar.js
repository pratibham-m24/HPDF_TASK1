import React, { Component } from 'react';

import { Font } from 'expo';
import {View,StyleSheet,TouchableOpacity,
 } from 'react-native';

import FIcon from 'react-native-vector-icons/Feather';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Header, Content,Card,CardItem,Thumbnail,
          List, ListItem, Text,Icon, Left, Body,
          Right, Switch } from 'native-base';
export default class SideBar extends Component {

constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

async componentWillMount() {
  await Expo.Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),

  });
this.setState({ fontLoaded: true });
}

  render() {

    return (


<Container style={styles.container}>
 
{ this.state.fontLoaded ? (

     <View style={{paddingTop:Expo.Constants.statusBarHeight}}>

<Thumbnail style={{paddingLeft:60}} source={require("./images/dp.jpg")} />


<View style={{paddingLeft:10,flexDirection: 'row',justifyContent: 'space-between'}}>
    <Text style={{fontWeight: "bold"}}>Pratibha Mohandas</Text>
    <FIcon name="chevron-down" style={{color:"blue"}} size={20}/>
</View>

<Text note style={{paddingLeft:10}}>@pratibham{"\n"}{"\n"}</Text>
<View style={{paddingLeft:10,flexDirection: 'row', borderBottomColor: '#D3D3D3',
    borderBottomWidth: 0.5,}}>
<Text style={{fontWeight: "bold"}}>690 </Text>
<Text note>Following</Text>

<Text style={{fontWeight: "bold"}}>   653 </Text>
<Text note>Followers{"\n"}{"\n"}</Text>
</View>

</View>
) : null
}
 

   <List style={{paddingLeft:10}}>
            <ListItem style={{borderBottomWidth: 0}} >
              <Left>
<FIcon name="user" size={20} />
            <Body>
                <Text style={{fontWeight: "normal"}}>Profile</Text>
              </Body>
</Left>
              </ListItem>
            <ListItem style={{borderBottomWidth: 0}} >
              <Left>
 <Icon name="md-list-box" style={{color:'grey'}} />
              <Body>
                <Text style={{fontWeight: "normal"}}>Lists</Text>
              </Body>
              </Left>
            </ListItem>
            <ListItem style={{borderBottomWidth: 0}}  >
              <Left>
<MIcon name="flash-outline" size={20} />

              <Body>
                <Text style={{fontWeight: "normal"}}>Moments</Text>
              </Body>
              
              </Left>
            </ListItem>
 <ListItem style={{borderBottomWidth: 0}} >
              <Left>
 <Icon name="md-albums" style={{color:'grey'}} />


              
              <Body>
                <Text style={{fontWeight: "normal"}}>HighLights</Text>
              </Body>
              </Left>
            </ListItem>
          </List>    
    
<Card>
<CardItem>
 <Text> Settings and privacy </Text>
</CardItem>
<CardItem>
  <Text> Help Centre </Text>
</CardItem>
</Card>
<View style={{flexDirection: 'row',justifyContent: 'space-between',paddingTop:5}}>

<FIcon name="moon" style={{color:'#3BB9FF'}} size={25}/>

<FIcon name="grid" style={{color:'#3BB9FF'}} size={25}/>
</View>

</Container>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: 'white',
  },
})     