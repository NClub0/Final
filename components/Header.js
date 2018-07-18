import React from "react";
import { View, Text, StyleSheet, Image, Alert, TouchableHighlight } from "react-native";

// maybe have the props receive the kind of page to render so that we can hide/show the menu button accordingly
class Header extends React.Component{

    onMenuPress = () => {
        // Event handler for the navbar button
    }

    render(){
        return (
            <View style = {styles.container}>
                <View style={styles.navbarWrap}>
                    <View style={styles.mock}/>
                    <Image source={require('../img/LOGOREVERSE.jpg')} style={styles.logo} />
                    <TouchableHighlight style={{height: 30}} onPress={this.onMenuPress}>
                        <View style={styles.menuIconWrap}>
                            <Image source={require("../img/menu_icon.png")} style={styles.menuIcon}/>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        )

    }
}

export default Header;


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        backgroundColor: "green",
        width: "100%",
        height: 80,
        alignItems: "center",
        justifyContent: "flex-end",
        padding: 5
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
    }
});