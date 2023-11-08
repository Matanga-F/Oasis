import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');
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
        fontSize: 14,
        fontWeight: "400",
        opacity: 1,
    },
    tabText:{
        paddingTop: 10,
        color: 'lightgrey',
        fontSize: 14,
        padding: 10,
        fontWeight: "400",
        opacity: .68,
        zIndex:999,
    },
    headerText: {
        color: 'grey',
        fontSize: 30,
        fontWeight: '500',
        textAlign: 'center',
        paddingLeft: 20
    },

    innervideo:{flex : 1,
      width: width,
       height: height},
       video: {
        flex: 1,
        width: "100%",
        height: "100%",
      },
      
    
});
export default room;