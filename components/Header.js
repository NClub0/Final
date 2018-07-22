import React from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight, Alert } from "react-native";
import { styles } from "../constants";
import { Menu } from "./Menu";

class Header extends React.Component{

    constructor(){
        super()
        this.state = {
            menuAnimationRunning: false
        }
    }

    onMenuPress = () => {
        this.setState({
            menuAnimationRunning: !this.state.menuAnimationRunning
        })
    }

    render(){
        return (
            <View style = {styles.container}>
                <View style={styles.navbarWrap}>
                    <View style={{width: 40, height: 40}}/>
                    <Image source={require('../img/LOGOREVERSE.jpg')} style={styles.logo} />
                    <MenuButton style={styles.mock} onMenuPress={this.onMenuPress.bind(this)}/>
                    <Menu style={styles.menu} open={this.state.menuAnimationRunning}>
                    </Menu>
                </View>
            </View>
        )
    }
}

export default Header;

const MenuButton = (props) => {

    const handlePress = () => props.onMenuPress()

    return (
        <TouchableHighlight style={{height: 30}} onPress={handlePress}>
            <View style={styles.menuIconWrap}>
                <Image source={require("../img/menu_icon.png")} style={styles.menuIcon}/>
            </View>
        </TouchableHighlight>
    )
}

