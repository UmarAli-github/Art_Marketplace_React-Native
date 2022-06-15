import React from 'react';

import {View,Text,StyleSheet} from 'react-native';

const Login = () => {

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:"#363636",
        justifyContent:"center"
    },
    text:{
        fontSize:20,
        fontWeight:"bold",
        color:"white"
    }
})

export default Login;