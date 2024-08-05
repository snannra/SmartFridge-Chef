import * as React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function StartPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        SmartFridge
      </Text>
      <View>
        <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate("Main")}>
          <Text style={styles.buttonLabel}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#F52332',
    fontFamily: 'Podkova',
    fontSize: 40,
    marginBottom: 40,
  },
  buttonContainer: {
    width: 320,
    height: 68,
    backgroundColor: '#F52332',
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    borderRadius: 10,
  },
  buttonLabel: {
    fontSize: 25,
    color: "#fff",
    fontFamily: "Itim",
  },
});
