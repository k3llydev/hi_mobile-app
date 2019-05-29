import React,{Component} from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'

const styles = StyleSheet.create({
    NavBarBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "rgba(124, 125, 114, 1)",
        color: "white",
        padding: 15,
        height: 60
    },
    NavBarOutterText: {
        color: "white"
    },
    headerLogo: {
        flex: 1,
        height: undefined,
        width: undefined
    }
})

let images = {
    habitareLogo: {
        uri:"http://habitareinmobiliaria.com.mx/images/habitarehux.png"
    }
};

class NavBar extends Component{
    render(){
        return(
            <View style={styles.NavBarBox}>
                <Image source={images.habitareLogo} style={styles.headerLogo} resizeMode="contain" />
                <Text style={styles.NavBarOutterText}>
                    
                </Text>
            </View>
        );
    }
}

export default NavBar