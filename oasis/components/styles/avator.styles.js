import { StyleSheet } from "react-native";

const userAvator = StyleSheet.create({
    container:{
        width: '80%',
        height: 120
      },
      innercontainer:{
        Width: "68%",
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 20,
          padding: 10,
      },
      userAvator:{
        width: 60,
        height: 60,
        borderRadius: 30,
        // borderColor: 'green',
        borderWidth: .3,
        marginTop: 1,
        marginLeft: 10,
        paddingRight: 10,
        zIndex: 999
    
      },
      userName:{
        paddingTop: 5,
        color: "white",
        fontSize: 18,
        fontWeight: "300"
      },
      message:{
        color: 'grey',
        opacity: .7,
        fontSize: 16,
        fontWeight: "300"
      },
      status:{
        color: 'grey',
        opacity: .7,
        fontSize: 18,
        fontWeight: "300",
        marginRight: 10

      },

});
export default userAvator;