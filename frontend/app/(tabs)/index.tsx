import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.customButton} onPress={() => alert('Button Pressed!')}>
        <Text style={styles.buttonText}>Welcome</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButton: {
    borderWidth: 2, // Border thickness
    borderColor: 'red', // Border color
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5, // Optional: To make the border rounded
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', // Text color
    fontFamily: 'Podkova', // Change font family if needed
  },
});
