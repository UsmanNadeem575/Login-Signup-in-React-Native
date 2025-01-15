import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const SignupPage = () => {
    
    return(
        <View style={styles.mainContainer}>
            <View>
                <Text style={styles.heading}>Create New Account</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput style={styles.inputField} placeholder='Full Name'/>
                <TextInput style={styles.inputField} placeholder='Phone Number'/>
                <TextInput style={styles.inputField} placeholder='Your Email'  keyboardType='email-address' />
                <TextInput style={styles.inputField} placeholder='Your Password' secureTextEntry={true} />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.signupBtn}>
                    <Text style={styles.signupText}>Sign up</Text>
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
        marginTop:30
    },

    inputField:{
        marginTop:20,
        borderWidth:1,
        borderColor:'#e0e5e9',
        marginHorizontal:20,
        marginVertical:10,
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

    signupBtn:{
        backgroundColor:'rgb(255 89 102)',
        marginHorizontal:20,
        padding:7,
        borderRadius:50
    },

    signupText:{
        color:'white',
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold'
    },

})

export default SignupPage;