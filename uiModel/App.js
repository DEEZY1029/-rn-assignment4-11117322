import { useState } from 'react';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Pressable, FlatList } from 'react-native';


export default function LoginScreen() {

  return (
    
    
      <ScrollView style={styles.ScrollView}>
        <View style={styles.container}>
      <View style={styles.jobizzContainer}>
          <Image source={require('./assets/Jobizz.jpg')} />
        </View>
        <View style={styles.group46Container}>
          <Image source={require('./assets/Group 46.jpg')} />
        </View>
        </View>
        </ScrollView>
        );
}
const styles = StyleSheet.create({
  ScrollView:{
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    top:-100,
   
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
  },
  jobizzContainer: {
    top: 220,
    alignItems: 'flex-start',
   left: 25,
  },
  group46Container: {
    top: 230,
    alignItems: 'flex-start',
   left: 25,
  },
})
