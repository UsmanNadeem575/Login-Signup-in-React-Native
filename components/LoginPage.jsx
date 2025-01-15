import React from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const LoginPage = () => {
    
    return(
        <View style={styles.mainContainer}>
            <View>
                <Text style={styles.heading}>Sign In</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput style={styles.inputField} placeholder='Your Email'  keyboardType='email-address' />
                <TextInput style={styles.inputField} placeholder='Your Password' secureTextEntry={true} />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.LoginBtn}>
                    <Text style={styles.LoginText}>Log In</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.orText}>OR</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.facebookBtn}>
                    <Text style={styles.facebookText}>Log with Facebook</Text>
                </TouchableOpacity>
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:'#eef8ff',
        height:760
    },

    heading:{
        fontSize:35,
        marginLeft:25,
        fontWeight:'bold',
        marginTop:40,
        color:'rgb(255 89 102)'
    },

    inputContainer:{
        marginTop:50
    },

    inputField:{
        borderWidth:1,
        borderColor:'#e0e5e9',
        marginHorizontal:20,
        marginVertical:15,
        borderRadius:5,
        fontSize:20,
        backgroundColor:'white',
        paddingLeft:12,
        borderRadius:50
    },

    buttonContainer:{
        marginHorizontal:20,
        marginTop:30
    },

    LoginBtn:{
        backgroundColor:'rgb(255 89 102)',
        marginHorizontal:20,
        padding:7,
        borderRadius:50
    },

    LoginText:{
        color:'white',
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold'
    },

    orText:{
      textAlign:'center',
      marginTop:40,
      fontWeight:'500'
    },
    
    facebookBtn:{
        backgroundColor:'rgb(66 102 178)',
        marginHorizontal:20,
        padding:7,
        borderRadius:50
    },

    facebookText:{
        color:'white',
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold'
    },

  
})

export default LoginPage;