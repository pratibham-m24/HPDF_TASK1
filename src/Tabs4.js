import React from 'react';

import { StyleSheet, Text, View } from 'react-native';


export default class Tabs4 extends React.Component {
 
 render() {
   
 return (
    

  <View style={styles.container}>
    
    <Text style={{
                fontSize: 30,color:'#A9A9A9'}}>No Messages</Text>
  
    </View>
   
 );
  
}
}


const styles = StyleSheet.create({
 
 container: {
  
  flex: 1,
    
backgroundColor: '#fff',
 
   alignItems: 'center',
  
  justifyContent: 'center',
  },
});

