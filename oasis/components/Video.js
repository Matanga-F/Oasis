import React, { useRef, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

const ExpoVideoComponent = ({ videoSource }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Load and play the video when the component mounts
    (async () => {
      if (videoRef.current) {
        await videoRef.current.loadAsync(videoSource, {}, true);
        await videoRef.current.playAsync();
      }
    })();

    return () => {
      // Unload the video when the component unmounts
      if (videoRef.current) {
        videoRef.current.unloadAsync();
      }
    };
  }, [videoSource]);

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        style={styles.video}
        resizeMode="cover"
        useNativeControls
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default ExpoVideoComponent;
