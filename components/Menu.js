import React from "react";
import { Animated, View, Text, Easing } from "react-native";
import { vw, styles, MenuWidth } from "../constants";

export class Menu extends React.Component{

    state = {
        xPos: new Animated.Value(-MenuWidth)  // perhaps the initial value of the component ? not sure
    }

    animateSideMenu(open){
         open
            ?   Animated.timing(        // por alguma razao que me transcende a esta hora
                    this.state.xPos,    // este é o código que fecha o menu
                    {
                        toValue: MenuWidth,
                        duration: 500,
                        useNativeDriver: true,
                        easing: Easing.bounce,
                        delay: 150
                    }
                    ).start()

            :   Animated.timing(
                    this.state.xPos,
                    {
                        toValue: -MenuWidth,
                        duration: 500,
                        useNativeDriver: true,
                        easing: Easing.easeIn,
                        delay: 150
                    }
                    ).start()
    }

    componentWillReceiveProps(){
        this.animateSideMenu(this.props.open)
    }
                // the actual menu item will have a component of its own and will be in a redux store
                // this is just for testing purposes (explore the idea of handling onPress from the store)
    render(){
        let { xPos } = this.animateSideMenu
        return (
            <Animated.View style={[this.props.style, { transform: [{translateX: this.state.xPos}]}]}>
                <View style={styles.menuContainer}>
                    <Text style = {styles.menuItem}>
                        Clubs
                    </Text>
                    <Text>
                        Promotions
                    </Text>
                    <Text>
                        Payments
                    </Text>
                    <Text>
                        Gifts
                    </Text>
                    <Text>
                        Profile
                    </Text>
                </View>
            </Animated.View>
        );
    }
}