import React,{ Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View,TouchableOpacity} from 'react-native';
import {Drawer} from 'native-base';
import Tab1 from './Tabs1.js';
import Tab2 from './Tabs2.js';
import Tab3 from './Tabs3.js';
import Tab4 from './Tabs4.js';

import  EIcon from 'react-native-vector-icons/Entypo';
import  FIcon from 'react-native-vector-icons/Feather';
import VIcon from 'react-native-vector-icons/EvilIcons';
import { Container,Header,Content,Tab,Tabs,Right,Icon,Fab,Title,
        Footer,FooterTab,Thumbnail,Text,
         TabHeading,Body,Left,Button } from 'native-base';
import { Font } from 'expo';

export default class Main extends Component {
constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }
static contextTypes = {
    drawer: PropTypes.object.isRequired,
  };


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
    <View style={{paddingTop:Expo.Constants.statusBarHeight}}>
{ this.state.fontLoaded ? (
    <Header hasTabs style={styles.header}>
<Left>
<TouchableOpacity  onPress={this.context.drawer.open}>
          <Thumbnail source={require("./images/dp.jpg")} style={{height:50,width:50}} /> 

        </TouchableOpacity>
  
       </Left>      
           
          <Body color='#fff'>
            <Title style={{color:'black'}}>Home</Title>
          </Body>
<Right>
</Right>
</Header>
) : null
}
</View>

   <Tabs tabBarUnderlineStyle={{backgroundColor:'#3BB9FF'}}>
      <Tab  heading={<TabHeading style={{backgroundColor:'white'}}><Icon name="home" style={{color:'#3BB9FF'}} size={25} /></TabHeading>}>
       <Tab1 />
</Tab>
<Tab heading={<TabHeading style={{backgroundColor:'white'}}><FIcon  name="search" style={{color:'#3BB9FF'}} size={25} /></TabHeading>}>

  
   <Tab2/>
</Tab>
<Tab heading={<TabHeading style={{backgroundColor:'white'}}><FIcon name="bell" style={{color:'#3BB9FF'}} size={25} /></TabHeading>}>
    <Tab3 />   
</Tab>
<Tab heading={<TabHeading style={{backgroundColor:'white'}}><FIcon  name="mail" style={{color:'#3BB9FF'}} size={25} /></TabHeading>}>
    <Tab4 /> 
</Tab>
</Tabs>
 <Fab
   containerStyle={{ }}
            style={{ backgroundColor: '#3BB9FF',marginBottom:50}}
            position="bottomRight">
            
            <EIcon name="feather" />
</Fab>
{ this.state.fontLoaded ? (
        <Footer >
          <FooterTab style={styles.header}>
            
         <Button >
              <Text style={{paddingRight:80,color:'#3BB9FF'}}>All</Text>
            </Button>
            <Button>
              <Text style={{paddingRight:40,color:'#A9A9A9'}}>Mentions</Text>
            </Button>
            
            <Button>
              <VIcon  name="gear" style={{color:'#3BB9FF'}} size={25} />
            </Button>
          </FooterTab>
        </Footer>
) : null
}


</Container>
    
); 
}
}    
const styles = StyleSheet.create({
 
header: {

backgroundColor: 'white', },
});

