import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Button, Alert, SafeAreaView, Seperator, FlatList } from 'react-native';
import { useState } from 'react';

//Will be a todo list but change name of app
const initialData = [
  
];

export default function App() {
  const [data, setData] = useState(initialData);
  const [inputValue, setInputValue] = useState('');

  const addToList = () => {
    if (inputValue.trim() === '') return;
    setData([...data, { id: (data.length + 1), title: inputValue }]);
    setInputValue('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to Your To Do List</Text>
      <TextInput
        style={styles.input}
        placeholder="Type here"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <StatusBar style="auto" />

      <Button
        title="Add to List"
        onPress={addToList}
      />

      <FlatList
        style={{ marginTop: 20, width: '100%', alignContent: 'flex-end', borderColor: 'black' }}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text>{item.title}</Text>
        )}
      />
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