import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import live from './styles/live.style';

const Live = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);

  const handleCameraAccess = async () => {
    // Request camera permissions when the button is clicked
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasCameraPermission(status === 'granted');

    if (status !== 'granted') {
      Alert.alert(
        'Permission Denied',
        'Please grant camera access to use this feature.',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
      );
    } else {
      console.log('Camera access granted');
      // Continue with camera functionality
    }
  };

  return (
    <View style={live.container}>
      <Text style={live.heading}>Allow access to Camera</Text>
      <Text style={live.description}>To share live feed, photos, and videos, the app requests access to your camera.</Text>

      <TouchableOpacity onPress={handleCameraAccess}>
        <Text style={live.access}>Allow Camera Access</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Live;
