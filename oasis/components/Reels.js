import { View, Text, Image} from 'react-native';
import reel from './styles/reeld.style';
import React, { useRef, useState } from 'react';
import { Video } from 'expo-av';

const Reels = () => {
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
  
  return (
    <View style={reel.container}>
      <View style={reel.innerContainer}>
          <Text style={reel.text}>Reels</Text>
          <Image style= {reel.imageBack}  source={image} />
      </View>
      
    </View>
  );
}

export default Reels;
