import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const reel = StyleSheet.create({
    innerContainer:{
        width: "100%", // 98% of the screen width
        height:"100%",
    }, 
    text: {
        color: 'white',
        fontSize: 20
    },
    imageBack: {
        width: "100%", // 98% of the screen width
        height:"500%",  // 98% of the screen height
    },
   
});

export default reel;
