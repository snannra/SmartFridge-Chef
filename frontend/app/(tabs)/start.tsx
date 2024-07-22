import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SmartFridge</Text>
      <TouchableOpacity
        style={styles.customButton}
        onPress={() => alert("Button Pressed!")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5", // Match the background color
  },
  title: {
    fontSize: 32, // Larger font size for the title
    fontWeight: "bold",
    color: "#F32432", // Match the color of the title
    marginBottom: 20, // Space between title and button
    fontFamily: "Itim-Regular", // Ensure this font is available or use a similar one
  },
  customButton: {
    borderWidth: 2,
    borderColor: "#F32432", // Match the border color to the title
    backgroundColor: "#F32432", // Match the button color to the title
    paddingVertical: 15,
    paddingHorizontal: 75,
    borderRadius: 10, // More rounded corners
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Podkova", // Ensure this font is available or use a similar one
  },
});
