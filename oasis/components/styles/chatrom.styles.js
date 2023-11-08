import { StyleSheet } from "react-native";

const chatroom = StyleSheet.create({
    container:{
      width: "100%",
      justifyContent: 'center',
    },

    verticalBorder: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        width: 70, // Adjust the width as needed
        marginHorizontal: 5, // Adjust the margin as needed
      },


      // closeCross:{
      //   color: 'grey',
      // fontSize: 25,
      // fontWeight: '100',
      // left: 10,
      // paddingBottom: 0,
      // paddingTop: 5,},
      chats:{
        color: 'grey',
        fontSize: 20
      },

      rowContainer:{
        width: "98%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10, // Adjust as needed
},
text:{
  color: 'lightgrey',
  fontSize: 15,
  zIndex: 999,
  fontWeight: "bold",
  padding: 5
},
header: {color: 'lightgrey',
fontSize: 15,
zIndex: 999,
fontWeight: "bold",
paddingLeft: 35
},

grid:{
  color: 'royalblue',
  fontSize: 18,
  fontWeight: '500',
  paddingRight: 15,
},

tab:{
  marginLeft: 4,
  marginRight: 1.5,
  marginTop: 5,
  borderRadius: 5,
  height: 220,
  width: 150,
  // backgroundColor: 'transparent',
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(155, 0, 0, 0.2))',
  color: 'white',
  position: 'relative', // Position relative for containing elements
  overflow: 'hidden', // 
  borderColor: 'grey',
  borderWidth: .4,
  alignItems: 'center',
  zIndex: 999
},
cross:{
  position: "absolute",
  color: 'grey',
  fontSize: 25,
  fontWeight: '100',
  paddingBottom: 0,
  paddingTop: 2,
  paddingLeft: 110,
},
useProfile:{
  width: 120,
  height: 120,
  borderRadius: 20,
  borderColor: 'grey',
  borderWidth: .3,
  marginTop: 20,
  zIndex: 999

},
status:{
  width: 20,
  height: 20,
  zIndex: 999,
  padding: 5,
},
check:{
  width: 10,
  height: 10,
  zIndex: -999,
  padding: 7,
  paddingLeft: 10
},
// recommended:{
//   color: 'grey',
//   fontSize:14,
//   fontWeight: '200',
//   paddingLeft: 10,

// } ,
connect: {
  width: 100,
  margin: 'auto',
  backgroundColor: 'royalblue',
  height: 30,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10,
  letterSpacing: 0.4,
  marginTop: 20,
  color:'white'
},

chat:{
  height: "100%",
  color: 'grey',
  fontSize: 20,
  paddingTop: 40,
  paddingLeft: 10,
},
chatOptions:{
  color: 'grey',
  fontSize: 15,
  fontWeight: "600",
  textAlign: 'center'
}


})

export default chatroom