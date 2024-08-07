import * as React from 'react';
import { useState } from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import  {Image} from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import FontAwesome from "@expo/vector-icons/FontAwesome";


export default function HomePage() {


    const [selectedImage, setSelectedImage] = useState(null);
    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        } else {
            alert('You did not select any image.');
        }
    };


  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}> 
            <Image  
            style={styles.image} 
            placeholder="https://picsum.photos/seed/696/3000/2000"
            source={selectedImage}
            contentFit="cover"
            transition={2000}/>
        </View>
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={pickImageAsync}>
                <FontAwesome
                    name="picture-o"
                    size={18}
                    color="#25292e"
                    style={styles.buttonIcon}
                />
                <Text style={styles.buttonText}>
                    Choose Photo
                </Text>
            </Pressable>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  text: {
    fontSize: 20,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 12,
  },
  imageContainer: {
    flex: 1,
    paddingTop: 30,
  },
  buttonContainer: {
    width: 320,
    height: 68,
    bottom: 80,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    borderColor: "#000",
    borderWidth: 4,
    borderRadius: 12,
  },
  button: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
  },
  buttonIcon: {
    paddingRight: 8,
  },
});
