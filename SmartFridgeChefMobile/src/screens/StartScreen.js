import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const StartScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>SmartFridge</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#e74c3c',
        marginBottom: 50,
    },
    button: {
        backgroundColor: '#e74c3c',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 10,
        color: '#fff',
        fontWeight: '600'
    },
});