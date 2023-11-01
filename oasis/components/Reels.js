import { View, Text } from 'react-native';
// import Video from 'react-native-video';
import reel from './styles/reeld.style';
import React, { useRef, useState } from 'react';

const Reels = () => {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  const vid = require("../asserts/videos/reel.mp4"); // Corrected path

  return (
    <View style={reel.container}>
      <Text style={reel.text}>Reels</Text>
      {/* <Video
        ref={video}
        style={reel.video}
        source={vid} // Corrected source usage
        resizeMode="cover"
        shouldPlay
        isLooping
      /> */}
    </View>
  );
}

export default Reels;
