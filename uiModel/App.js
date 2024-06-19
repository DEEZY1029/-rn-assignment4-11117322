import { useState } from 'react';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Pressable, FlatList } from 'react-native';



export default function LoginScreen() {
  const [query, setQuery] = useState('');
  const [txt, setTxt] = useState('');
 
  const handleSearch = text => {
    setQuery(text);
  };
  const searchHandle = text => {
    setTxt(text);
  };
  return (
    
    
      <ScrollView style={styles.ScrollView}>
        <View style={styles.container}>
      <View style={styles.jobizzContainer}>
          <Image source={require('./assets/Jobizz.jpg')} />
        </View>
        <View style={styles.group46Container}>
          <Image source={require('./assets/Group 46.jpg')} />
        </View>
        <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        value={query}
        onChangeText={handleSearch}
        placeholder=" Name"
      />
      </View>
      <View style={styles.searchContainer}>
      <TextInput
        style={styles.secondsearchInput}
        value={txt}
        onChangeText={searchHandle}
        placeholder="  Email"
      />
      </View>
      <Pressable style={styles.button}>
       
        <Text style={styles.text}>
          Log in</Text>
      </Pressable>
      <Text style={styles.orContinue}>
            Or continue with
            </Text>
      <View style={styles.group57Container}>
          <Image source={require('./assets/Group 57.jpg')} />
        </View>
        <View>
          <Text style={styles.Textalign}>
            Don't have an account? <Text style={{color:'blue', textDecorationLine:'underline'}}>
              Register
            </Text>
            </Text>
        </View>
        <StatusBar style="auto" />
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
    top:-70,
   
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
  searchContainer: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: 350,
    height: 60,
    top:250,
    borderWidth: 1,
    borderColor: 'ash',
    borderRadius:20,
    left:10,
    flex: 1,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    left: 10,
  },
  secondsearchInput: {
    flex: 1,
    fontSize: 14,
    left:10,
  },
  searchContainer: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: 350,
    height: 60,
    top:250,
    borderWidth: 1,
    borderColor: 'ash',
    borderRadius:20,
    left:10,
    flex: 1,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    left: 10,
  },
  secondsearchInput: {
    flex: 1,
    fontSize: 14,
    left:10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: '#356899',
    top: 250,
    width:350,
    left: 20,
    marginVertical: 20
  },
  group57Container: {
    top: 300,
    alignItems: 'center',
  },
  Textalign: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    top:310
  },
  orContinue: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    top: 295
  }
});
