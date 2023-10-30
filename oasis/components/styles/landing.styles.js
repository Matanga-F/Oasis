import { Platform, StyleSheet, Dimensions } from "react-native";

const landing = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:   "rgba(0,0,0,.5)",
        paddingTop: 30,
      },
      innerContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        backgroundColor: 'rgba(0, 0, 0, 1))',
        paddingTop: 60,
        // justifyContent: 'center',
        AlignItems: 'center',
      },
      content: {

        backgroundColor:   "rgba(0,0,0,.86)",
        width: '0',
        height: '100%',
      },

      backgroundImage: {
          ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
      },

      header:{
        padding: 10,
        color:  'white',
        fontSize: 25,
        paddingLeft: 10,
        fontWeight: "bold"

        
      },
      policy:{
        fontSize: 15,
        color:  'white',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,

        lineHeight: 20
      },

      link : {
        fontSize: 15,
        color: 'royalblue',
        fontWeight: "500",
        padding: 0,
        lineHeight: 16
      },
      agree : {
        width: '90%',
        margin: 'auto',
        marginLeft: 20,
        backgroundColor: 'royalblue',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        letterSpacing: 0.4,
        marginTop: 80,
        color:'white'
      },
      title:{
        height: 350,
        width: '75%',
        color: 'white',
        textAligh:'center',
      } ,
      text:{
        color: 'lightgrey',
        fontSize: 15,
        zIndex: 999,
        fontWeight: "bold"
      },

      account:{
        width: '100%',
        position: 'absolute',
        bottom: -120,
        alignContent: 'center'
      },
      accountText:{
        color: 'lightblue',
        textAlign: 'center',
        fontWeight: "bold"
      }
      ,
      skip:{
      color: 'lightgrey',
      fontSize: 20,
      alignSelf: 'center',
      textDecorationLine: 'underline',
      marginTop: 18,
      marginTop: 10,
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,},
    
      buttonContainer: {
        width: '80%',
        margin: 'auto',
        alignSelf: 'center', 
      },
       button:{
        backgroundColor: 'rgba(0, 0, 100, .7)',
        width: '80%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        letterSpacing: .4,
        marginTop: 40,
       }

})

export default landing;