import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.mainContainer}>
            <View>
                <Text style={styles.heading}>Say hello to your new app</Text>
            </View>

            <View>
                <TouchableOpacity>
                    <Text style={styles.loginBtn} onPress={()=>navigation.navigate('LoginPage')}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.signupBtn} onPress={()=>navigation.navigate('SignupPage')}>Sign up</Text>
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
        fontSize:30,
        textAlign:'center',
        fontWeight:'800',
        marginVertical:100,
        color:'red'
    },

    loginBtn: {
        fontSize: 25,
        backgroundColor: 'rgb(255 89 102)',
        color: 'white',
        fontWeight: '500',
        textAlign: 'center',
        paddingVertical: 7, 
        marginHorizontal:50,
        borderRadius: 25,
    },

    signupBtn: {
        fontSize: 25,
        backgroundColor:'transparent',
        borderWidth:1,
        borderColor:'rgb(255 89 102)',
        color: 'rgb(255 89 102)',
        fontWeight: '500',
        textAlign: 'center',
        paddingVertical: 7, 
        marginHorizontal:50,
        marginVertical:30,
        borderRadius: 25,
    },
})

export default HomePage;
