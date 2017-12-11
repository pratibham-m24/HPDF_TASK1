import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import { Container, Header, Item, Input,Icon, Button, Text } from 'native-base';
export default class Tabs2 extends Component { 
render() {
return (
      <Container style={{backgroundColor:'#DCDCDC'}}>
        <Header searchBar rounded style={{backgroundColor: '#fff'}}>

          
          <Item>

            <Button transparent>
              <Icon name="arrow-back" style={{color:'black'}} />
            </Button>
            <Input placeholder="Search Twitter" />
           </Item>
          </Header>
      </Container>
    );   
}

}


  



