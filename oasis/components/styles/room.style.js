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
        paddingTop: 60,
        // justifyContent: 'center',
        AlignItems: 'center',
      },

      activeTabText:{
        color: 'lightgrey',
        fontSize: 20,
    },
    tabText:{
        paddingTop: 10,
        color: 'grey',
        fontSize: 20,
        padding: 10,
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