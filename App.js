import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Button, Alert, SafeAreaView } from 'react-native';
import { useState } from 'react';

//Will be a todo list but change name of app


export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.title}>Welcome to Your To Do List</Text>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    flexDirection: 'row',
    
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    width: '80%',
    marginBottom: 20,
    borderRadius: 5,
  },
});
