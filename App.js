


import React, {useState}  from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

// <View style={{flex: 3, backgroundColor: 'green'}} />



  
  

const MyFlex = () => {

  const [text, setText] = useState('');

  return (
 <>
   
   <View style={[styles.container0, {flexDirection: 'column',},]}>

    </View>
    <View style={[styles.container1, {flexDirection: 'row',},]}>
      
      <View style={{flex: 1, backgroundColor: 'darkorange', paddingVertical:55 }}>
      <TextInput style={{ fontSize:18, fontWeight: 'bold', textAlign:"center" }}
        placeholder="Enter Date!       "
        onChangeText={newText => setText(newText)}
        defaultValue={''}
      />
      
    </View>
      <View style={{flex: 2, borderLeftWidth:5, backgroundColor: 'darkorange'}}>

      <Text style={styles.baseText}>
      <Text style={styles.titleText}>
      Wouldn't It Be Great If?
      </Text>
      </Text>
      </View>
     
      </View>
      <View style={[styles.container2, {flexDirection: 'column',},]}>
      <View style={{backgroundColor: 'darkorange'}} />
      <TextInput style={{flex: 5, backgroundColor: 'darkorange', padding: 5, fontSize:30, fontStyle:"italic", textAlign:"center", }}
        placeholder="Enter WIBGI Initiative!"
        onChangeText={newText => setText(newText)}
        defaultValue={''}
      />
      <View style={{flex: 2, backgroundColor: 'darkorange'}} />
      
  
      </View>
      <View style={[styles.container0, {flexDirection: 'column',},]}>

      </View>
    
      
    </>




  
  );
};

const styles = StyleSheet.create({
  container0:{
    flex: 1.5,
    backgroundColor: 'slategrey'    
  },
  container1: {
    //marginTop: 70,
    flex: 1,
    padding: 0,
    //paddingBottom: 50,
  borderTopWidth:3,
  borderTopColor:"darkgrey",
  borderBottomWidth: 5,
  borderLeftWidth:3,
  borderLeftColor:"darkgrey",
  borderRightWidth:3,
  borderRightColor:"darkgrey",
  },
  container2: {
    paddingTop: 0,
    flex: 2,
    padding: 0,
    paddingBottom: 0,
    borderBottomWidth: 3,
    borderBottomColor:"darkgrey",
    borderLeftWidth:3,
    borderLeftColor:"darkgrey",
    borderRightWidth:3,
    borderRightColor:"darkgrey",
  
  },

  baseText: {
    fontFamily: 'Cochin',
    textAlign:"center",
    marginTop:32,
    paddingBottom: 0,
    padding: 0,

  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    
  },
});

export default MyFlex;
