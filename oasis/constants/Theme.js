import { StyleSheet, Dimensions } from "react-native";


const system= StyleSheet.create({

     container: {
        flex: 1,
        height: Dimensions.get('window').height,
      },
      innerContainer: {
        flex: 1,
        height: Dimensions.get('window').height,
        backgroundColor: 'transparent',
        backgroundColor: 'rgba(0,0,0,1)',
        // backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9))',
        // justifyContent: 'center',
        AlignItems: 'center',
      },
      innerMostContainer:{
        // width: '100%',
        // height: Dimensions.get('window').height,
        backgroundColor: 'transparent',
        backgroundColor: 'rgba(0, 0, 0, 1)',
        // justifyContent: 'center',
        AlignItems: 'center',
      },
      backgroundImage: {
          ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
      },

      text:{alignItems:  'center', color: 'black,', fontSize: 24},
})

export default system;