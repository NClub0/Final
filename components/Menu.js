import React from "react";
import { Animated, View, Text, Easing } from "react-native";
import { vw } from "../constants";

export class Menu extends React.Component{

    state = {
        xPos: new Animated.Value(0)  // perhaps the initial value of the component ? not sure
    }

    animateSideMenu(open){
         open
            ?   Animated.timing(        // por alguma razao que me transcende a esta hora
                    this.state.xPos,    // este é o código que fecha o menu
                    {
                        toValue: 0.5*vw,
                        duration: 500,
                        useNativeDriver: true,
                        easing: Easing.bounce,
                        delay: 150
                    }
                    ).start()

            :   Animated.timing(
                    this.state.xPos,
                    {
                        toValue: -0.5*vw,
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

    render(){
        let { xPos } = this.animateSideMenu
        return (
            <Animated.View style={[this.props.style, { transform: [{translateX: this.state.xPos}]}]}>
                <Text>
                    {console.log(this.props.open)}
                </Text>
            </Animated.View>
        );
    }
}