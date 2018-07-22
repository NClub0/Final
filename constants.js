import {StyleSheet} from "react-native";

const Dimensions = require('Dimensions');

export const vw = Dimensions.get('window').width;
export const vh = Dimensions.get('window').height;

export const myNclubColor = "rgb(33, 73, 15)";


export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        backgroundColor: myNclubColor,
        width: "100%",
        height: 0.12*vh,
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom:0.01*vh
    },
    logo: {
        width: 40,
        height:40,
    },
    mock: {
        width: 40,
        height: 40
    },
    navbarWrap: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: 10,
        paddingLeft: 10
    },
    menuIcon:{
        width: 30,
        height: 30,
        justifyContent: "flex-end"
    },
    menuIconWrap: {
        justifyContent: "flex-end"
    },
    menu: {
        position: "absolute",
        backgroundColor: myNclubColor,
        height: 0.88*vh,
        width: 0.5*vw,
        zIndex: -1,
        bottom: -0.89*vh,
        right: -0.5*vw,
    }

});
