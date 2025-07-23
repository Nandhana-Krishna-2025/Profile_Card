import React, { useState } from 'react';
import { View, StyleSheet,Text, Switch ,StatusBar} from 'react-native';
import ProfileCard from './src/components/Profile_Card';

export default function App() {
   const [isDark, setIsDark] = useState(false);
   const toggleSwitch = () => setIsDark(prev => !prev);
  return (
          
        <View style={[styles.container, isDark ? styles.darkBg : styles.lightBg]}>
          <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={isDark ? '#121212' : '#ffffff'}
      />
            <View style={styles.toggleRow}>
        <Text style={[styles.label, isDark ? styles.darkText : styles.lightText]}>
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </Text>
        <Switch
          value={isDark}
          onValueChange={toggleSwitch}
          thumbColor={isDark ? '#fff' : '#444'}
          trackColor={{ false: '#ccc', true: '#555' }}
        />
      </View>
          
        <ProfileCard isDark={isDark} />

        </View>
  );
}

const styles =StyleSheet.create({
  container:{
    backgroundColor:"#161816",
    flex:1, 
    justifyContent:'center',
    alignItems:'center'
  },
     toggleRow: {
    flexDirection: 'row',
    alignItems: 'center'},
    label: {
    fontSize: 18,
    marginRight: 10
  },
  darkBg: {
    backgroundColor: '#121212'
  },
  lightBg: {
    backgroundColor: '#ffffff'
  },
  darkText: {
    color: '#fff'
  },
  lightText: {
    color: '#000'
  }
   
})
