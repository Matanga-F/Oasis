import { View, Text, Image, StyleSheet} from 'react-native';
import reel from './styles/reeld.style';
import React, { useRef, useState, useEffect} from 'react';
import { Video, ResizeMode } from 'expo-av';

const Reels = ({ videoSource }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const image = require("../asserts/images/reels.png")

  const handlePlayPause = async () => {
    if (isPlaying) {
      await videoRef.current.pauseAsync();
    } else {
      await videoRef.current.playAsync();
    }
    setIsPlaying(!isPlaying);
  };
  
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

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
    <View style={reel.container}>
      <View style={reel.innerContainer}>
          <Text style={reel.text}>Reels</Text>
          <View style={reel.innervideo}>
              <Video 
              ref={video}
              style={reel.video}
              source={{
                uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
              }}
              useNativeControls
              resizeMode={ResizeMode.COVER}
              isLooping
              onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            </View>
          
      </View>
      
    </View>
  );
}


const styles = StyleSheet.create({
  video: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default Reels;
