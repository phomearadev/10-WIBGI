


import React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';


const Flex = () => {
  return (
   <View>
    <View
      style={[styles.container2,{flexDirection: 'row'},]}>
      <Text style={{ flex: 1, fontSize: 20, textAlignVertical: "center", textAlign: "center", backgroundColor: 'darkorange'}}>  28/05/23</Text>
      <Text style={{ flex: 2, fontSize: 20, textAlign: "center", backgroundColor: 'orange'}}>   Wouldn't it be great if?</Text>
    </View>
    <View
    style={[styles.container3,{flexDirection: 'column'},]}>
    <Text style={{ flex: 1, fontSize: 20, textAlignVertical: "center", textAlign: "center", backgroundColor: 'darkorange'}}>  </Text>
    </View>
    <View
    style={[styles.container4,{flexDirection: 'column'},]}> 
    <Text style={{ flex: 1, fontSize: 20, textAlignVertical: "center", textAlign: "center", backgroundColor: 'orange'}}>  28/05/23</Text>
  </View>
  </View>
  


  );
};

const styles = StyleSheet.create({
  container1: {
    marginTop:100,
    marginBottom: 0,
    marginLeft: 12,
    marginright: 2,
    height: 70,
    width: 315,
    fontSize: 20,
    padding: 0,
    borderBottomWidth: 3,
    //borderColor: "darkslategrey",

    
  },
  container2: {
    marginTop:100,
    marginBottom: 0,
    marginLeft: 12,
    marginright: 2,
    height: 70,
    width: 315,
    fontSize: 20,
    padding: 0,
    borderBottomWidth: 3,
    //borderColor: "darkslategrey",

    
  },
  container3: {
    marginTop:0,
    marginBottom: 0,
    marginLeft: 12,
    marginright: 2,
    height: 70,
    width: 355,
    fontSize: 20,
    padding: 0,
   
    //borderColor: "darkslategrey",
    
  },
  container4: {
    marginTop:0,
    marginBottom: 50,
    marginLeft: 12,
    marginright: 2,
    height: 170,
    width: 355,
    fontSize: 20,
    padding: 0,
  
    //borderColor: "darkslategrey",
    
    
  },
  container4: {
    flex: 1,
    padding: 0,
  },
});

export default Flex;