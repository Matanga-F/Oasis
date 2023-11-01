import { StyleSheet } from "react-native";
const live = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading:{
        color: 'lightgrey',
        fontSize: 25,
        paddingTop: 40,
        fontWeight: "800",
    },
    description:{
        width: "90%",
        margin: 'auto',
        paddingTop: 10,
        color: 'darkgrey',
        fontSize: 13,
        fontWeight: "500",
        textAlign: "center"
    },

    access:{
        marginTop: 55,
        color: "royalblue",
        fontWeight: "400",
        fontSize: 17,
        zIndex:999,
        padding: 10,
        borderRadius: 50,
        backgroundColor: 'rgba(34, 34, 33, .84)',

    },

     
});
export default live;