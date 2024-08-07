import * as React from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import { useState } from 'react';

export default function HomePage({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
        <View>
            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
            <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} />
        </View>
        <View>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>
                    Sign In
                </Text>
            </Pressable>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>
                    Create Account
                </Text>
            </Pressable>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
    input: {
        width: 200,
        height: 40,
        marginVertical: 10,
        marginHorizontal: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 7,
        backgroundColor: "#D3D3D3",
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  text: {
    fontSize: 20,
  },
  buttonContainer: {
    width: 320,
    height: 68,
    marginVertical: 10, // Adjusts spacing between buttons
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    borderColor: "#000",
    borderWidth: 4,
    borderRadius: 12,
  },
  button: {
    width: 200,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: "#30abf1",

  },
});
