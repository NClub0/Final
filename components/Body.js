import React from "react";
import { View, Text, StyleSheet, Image, Alert, TouchableHighlight } from "react-native";

// this will be the template for the rest of the app
class Body extends React.Component{
    render(){
        return (
            <View style={styles.body}>
            </View>
        )
    }
}

export default Body;

const styles = StyleSheet.create({

    body: {
        width: "100%",
        height: "auto",
        alignItems: "center",
        marginTop: 80
    }
});