import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const reel = StyleSheet.create({
    innerContainer:{
        flex: 1,
        width: "100%", // 98% of the screen width
        height:"100%",
    }, 
    text: {
        color: 'white',
        fontSize: 20
    },
    videoContainer: {
        flex: 1,
        width: width, // Use the width variable from Dimensions
        height: height, // Use the height variable from Dimensions
      },
      video: {
        flex: 1,
        width: "100%",
        height: "100%",
      },
});

export default reel;
