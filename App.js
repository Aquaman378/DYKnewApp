import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Button, SafeAreaView, FlatList, View, Pressable } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addToList = () => {
    if (inputValue.trim() === '') return;
    setData([...data, { id: data.length + 1, title: inputValue }]);
    setInputValue('');
  };

  const removeItem = (id) => {
    const updatedList = data.filter((item) => item.id !== id);
    setData(updatedList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBackground}>
        <Text style={styles.title}>Your To-Do List</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={inputValue}
        onChangeText={setInputValue}
      />

      <Button title="Add to List" onPress={addToList} />

      <View style={styles.list}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={( itemData ) => (
            <View style={styles.taskContainer}>
              <Text style={styles.taskText}>
                {itemData.item.title}
              </Text>
              <Pressable onPress={() => removeItem(itemData.item.id)}>
                <Text style={{ color: 'red' }}>Delete</Text>
              </Pressable>
            </View>
          )}
        />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: 'center',
    shadowColor: "blue",
    shadowOpacity: 1.8,
    shadowOffset: { width: 2, height: 2 },
    marginBottom: 20,
    padding: 20,
  },
  topBackground: {
    backgroundColor: '#ADD8E6',
    width: '100%',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '100%',
    marginBottom: 10,
    borderRadius: 8,
  },
  list: {
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#333',
    width: '100%',
  },
  taskText: {
    fontSize: 18,
    flexShrink: 0.5,
  },
  taskDelete: {
    //color: 'red',
  }
});
