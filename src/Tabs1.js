import React, { Component } from 'react';
import { Image } from 'react-native';
import VIcon from 'react-native-vector-icons/EvilIcons';
import  FIcon from 'react-native-vector-icons/Feather';
import  EIcon from 'react-native-vector-icons/Entypo';
import { StyleSheet, View,ScrollView,AppRegistry  } from 'react-native';
import { Container, Content, Card,Spinner,Fab,Icon,
         CardItem, Thumbnail, Text, Button,
         Left, Body, Right } from 'native-base';
export default class Tabs1 extends Component {
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
 
     
<Container>
{ this.state.fontLoaded ? (
<Content>
    
         

          <Card>

            <CardItem >
              <Left>
                <Thumbnail source={require("./images/brainy.png")} />
                <Body>
 <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
<Text>
                  <Text>Brainy Quote</Text>
                  <Text note>@brainyquote .40m</Text>
</Text>
<VIcon name="chevron-down" style={{color:"grey"}} size={20}/>
</View>
<Text>Good,better,best.Never let it rest.
'Til your good is better and your better
 is best</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem style={{paddingLeft:80,paddingRight:40}}>
<Body>
              <Image source={require("./images/scenery.jpg")} style={{height:150, width:250}}/>
</Body>
            </CardItem>
            <CardItem style={{paddingLeft:80,paddingRight:20}}>
              <Left>
                <Button transparent>
                  <VIcon name="comment" size={20}  />
                  <Text>12</Text>
                </Button>
              
                <Button transparent>
                  <VIcon  name="retweet" size={20} />
                  <Text>4 </Text>
                </Button>
              
                 <Button transparent>
                  <VIcon  name="heart" size={20} />
                  <Text>19</Text>
                </Button>
                
<Button transparent>
                  <FIcon  name="mail" size={15} style={{color:'grey'}} />
                  
                </Button>
             </Left>
            </CardItem>


          </Card>
 <Card>

            <CardItem>
              <Left>
                <Thumbnail source={require("./images/food1.png")} />
                <Body>
         <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
<Text>
  <Text>Food Time</Text>
 <Text note>@foodtime .20m</Text>
</Text>
<VIcon name="chevron-down" style={{color:"grey"}} size={20}/>
</View>
                 <Text>A bacon-cheddar quiche sounds just about right</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem style={{paddingLeft:80,paddingRight:40}}>

<Body>

              <Image source={require("./images/pizza.jpg")} style={{height:150, width:250}}/>

</Body>
            </CardItem>
            <CardItem style={{paddingLeft:80,paddingRight:20}}>
              <Left>
                <Button transparent>
                  <VIcon  name="comment" size={20} />
                  <Text>12</Text>
                </Button>
              
                <Button transparent>
                  <VIcon  name="retweet" size={20}  />
                  <Text>2</Text>
                </Button>
              
                <Button transparent>
                  <VIcon  name="heart" size={20} />
                  <Text>19</Text>
                </Button>
                
<Button transparent>
                  <FIcon  name="mail" size={15} style={{color:'grey'}} />
                  
                </Button>
                </Left>
            
            </CardItem>


          </Card>
</Content>
       ) : null
}

    
</Container>
    );
  }
}

             