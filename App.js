


import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const Flex = () => {
  return (
    <View
      style={[
        styles.container1,
        {
          // Try setting `flexDirection` to `"row"`.

          flexDirection: 'row',
        },
      ]}>
      <View style={{flex: 1, backgroundColor: 'orange'}} />
      <Text style={{ backgroundColor: 'orange'}}>  29/05/23  </Text>
      <View>
      <View style={{flex: 1, backgroundColor: 'darkorange'}}/>
      <Text style={{ backgroundColor: 'darkorange'}}>  Wouldn't it be great if?  </Text>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container1: {
    marginTop:50,
    flex: 1,
    padding: 10,
  },
  container2: {
    flex: 1,
    padding: 0,
  },
});

export default Flex;