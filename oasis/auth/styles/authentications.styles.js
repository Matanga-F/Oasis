import { StyleSheet, Dimensions} from "react-native";
const { width, height } = Dimensions.get('window');

const authentication = StyleSheet.create({
  container: {
    width: "100%",
  },

  innerContainer: {
    width: '100%',
    height: height,
    backgroundColor: 'transparent',
    backgroundColor: 'rgba(0, 0, 0, .6)',
    // alignContent:"center"
  },
  content: {
    alignItems:'center',
    width: "100%"
  },
  inputContainer:{
    width: "100%",
    alignItems:'center',
    margin: 'auto',
  },

  
  header:{
    padding: 10,
    color:  'white',
    fontSize: 95,
    // paddingTop: 60,
    paddingLeft: 20,
    fontWeight: "bold"
  },


    agree:  {
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

    text:{
      color: 'lightgrey',
      fontSize: 25,
      zIndex: 999,
      fontWeight: "semibold",
      textAlign: 'center',
      paddingTop: 20

    },
    google:{
      width: '80%',
      margin: 'auto',
      flexDirection: 'row',
      marginLeft: 34,
      justifyContent: 'space-around',
      textAlign: 'center'},

    logo:{
      marginTop: 20,
      width: 25,
      height: 25,
      padding: 25,
      borderRadius: 50

    },
  fingerPrint: {
        color: 'white',
        padding: 2,
        textAlign: 'center'
      },
//     // text:{
//     //   marginTop: 10,
//     //   color: 'white',
//     //   fontSize: 25,
//     //   textAlign: 'center',
//     //   fontWeight: 'regular',
//     // },
// //     formConatiner:{
// //     alignSelf: 'center', 
// //   },
      

      forgetContainer :{
      left: 30

      },
        user: {color: 'lightgrey', position: 'absolute', left: 60, top: 10},
        eye: {color: 'lightgrey', position: 'absolute', right: -140, top: -40},

//         //  position: 'absolute', right: -28, top: 3},


          input: { 
            width: '80%',
            margin: 'auto',
            height: 50,
            paddingLeft: 45,
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0,  0.5)',
            padding: 5,
            borderRadius: 10,
            borderWidth: .3,
            borderColor: 'grey',
            fontWeight: 'semibold',

        },
        incorrect: {
          width: '80%',
          margin: 'auto',
          height: 50,
          paddingLeft: 40,
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0,  0.5)',
          padding: 5,
          borderRadius: 10,
          borderWidth: .3,
          borderColor: 'red',
          opacity: .8
        },
        forgetContainer:{
          top: 310,
          
        },
        bottomContainer:{
          alignItems: 'center',
          marginTop: 10,
        },
        forgot:{
          paddingLeft: 200,
          top: -300,
          color: 'white',
          fontWeight: "300",
          fontSize: 16,
        },
        buttonContainer: {
          width: '90%',
          alignSelf: 'center', 
        },
         buttonText:{
          backgroundColor: 'rgba(0, 0, 100, .7)',
          padding: 10,
          paddingLeft: 90, 
        paddingRight: 90, 
    height: 40,
    borderRadius: 10,
    letterSpacing: 0.4,
    marginTop: 10,
    alignSelf: 'center', // Center the button horizontally
    justifyContent: 'center', // Center the button vertically
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white'

        },
//         loadingContainer: {
//           width: '100%',
//           height: Dimensions.get('window').height,
//           backgroundColor: 'transparent',
//           backgroundColor: 'rgba(0, 0, 0, 1)',
//           justifyContent: 'center',
//           AlignItems: 'center',
//           zIndex: 999,
//             },
//         loading:{
//           fontSize: 20,
//           fontWeight: "300",
//           marginBottom: 10,
//           color: 'white',
//           textAlign: 'center',
//         },


        loginButton: {
          backgroundColor: 'lightblue',
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          letterSpacing: 0.4,
          marginTop: 20,
        },
        bottomContainer:{
          alignItems: 'center',
          marginTop: 10,
        },
        account: {
          marginTop: 50,
          color: 'white',
        },
        accountR: {
          marginTop: 0,
          color: 'white',
        },
        accountText: {
          color: 'lightblue',
          textAlign: 'center',
          fontWeight: "bold",
          paddingBottom: 10,
        },

        horizontalBorder: {
          borderBottomWidth: 1,
          borderBottomColor: 'grey',
          width: 70, // Adjust the width as needed
          marginHorizontal: 5, // Adjust the margin as needed
        },
        
        red: {
          color: 'red',
          fontWeight: '400',
          textDecorationLine: 'underline',
          textAlign: 'center',
          marginTop: 20,
          zIndex: 999
        },
        or:{
          marginTop: 20,
          marginBottom: 10,
          padding: 5,
          textAlign: 'center',
          color: 'white',
          margin: 5,
        },
        button:{
          textTransform: 'lowercase'
        }
      });

export default authentication;