import { StyleSheet } from "react-native";

const room = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:   "rgba(0,0,0,.1)",
        paddingTop: 30,
      },
      innerContainer: {
        borderRadius: 8,
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        backgroundColor: 'rgba(0, 0, 0, 1))',
        // justifyContent: 'center',
        AlignItems: 'center',
      },
        tab:{
          marginTop: 20,
        },
      activeTabText:{
  
        padding: 5,
        borderRadius: 10,
        backgroundColor: 'rgba(34, 34, 33, .34)',
        color: 'lightgrey',
        fontSize: 13,
        fontWeight: "400"
    },
    tabText:{
        paddingTop: 10,
        color: 'grey',
        fontSize: 13,
        padding: 10,
        fontWeight: "400"
    },
    headerText: {
        color: 'grey',
        fontSize: 30,
        fontWeight: '500',
        textAlign: 'center',
        paddingLeft: 20
    },
      
});
export default room;