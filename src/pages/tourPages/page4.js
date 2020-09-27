import React from 'react';
import { View, Image, Text, StyleSheet, ImageBackground, TextInput, TouchableHighlight } from 'react-native';
// import defaultUser from '../../../assests/splash/defaultUser.png'

const Page4 = () => {
    const [value, onChangeText] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <ImageBackground source={require('../../../assests/splash/img1.png')} style={styles.image}>
                    <View style={styles.topLogoView}>
                        <Image style={styles.topLogo} source={require('../../../assests/splash/splashIcon.png')} />
                    </View>

                </ImageBackground>
            </View>
            <View style={styles.main1}>
                <Text style={styles.heading1}>Wochtwoord vergenten?</Text>
                <Text style={styles.para1}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>

                <View style={{
                    display: 'flex', flexDirection: 'column', width: '85%', paddingTop: 20,
                    justifyContent: 'center', alignContent: 'center', alignItems: 'flex-start'
                    // alignItems: 'center',
                }}>
                    <View style={{ width: '75%' }}><Text>Email Address</Text></View>

                    <View style={{ width: '100%', display: 'flex', flexDirection: 'row', borderBottomWidth: 2, borderColor: "grey", paddingTop: 10 }}>
                        <Image style={{ height: 35, width: 35 }}
                            source={require('../../../assests/splash/defaultUser.png')} />
                        <TextInput style={styles.input}
                            value={value}
                            placeholder="Email Address"
                            placeholderTextColor="grey"
                            onChangeText={text => onChangeText(text)}
                        />
                    </View>
                    <View style={{ paddingTop: 10 }}><Text>Password</Text></View>
                    <View style={{ width: '100%', display: 'flex', flexDirection: 'row', borderBottomWidth: 2, borderColor: "grey", paddingTop: 10 }}>
                        <Image
                            style={{ height: 40, width: 40}}
                            source={require('../../../assests/splash/lock.png')} />
                        <TextInput style={styles.input}
                            value={password}
                            placeholder="Password"
                            secureTextEntry={true}
                            placeholderTextColor="grey"
                            onChangeText={text => onChangePassword(text)}
                        />
                    </View>

                </View>
            </View>

            <View style={styles.footer}>
                <View style={styles.btncontainer}>
                    <TouchableHighlight>
                        <Text style={{ color: 'white' }} style={styles.button}>
                            Button
                </Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}

export default Page4;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        // height: 100,
        height: '100%'
    },
    header: {
        height: 410,
        marginTop: -100,
        alignItems: "center",
        justifyContent: "flex-end",
        // backgroundColor:"pink"
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        alignItems: "center",
        flexDirection: "column",
        height: 400,
        width: 400,


    },
    topLogoView: {
        marginTop: 260,
        height: 140,
        width: 120,
        backgroundColor: "#fff",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        borderRadius: 40,
    },
    topLogo: {
        flex: 1,
        resizeMode: "center",
        height: 100,
        width: 80,

    },
    main1: {
        display: "flex",
        backgroundColor: '#fff',
        // height: 200,
        justifyContent: "center",
        alignItems: "center",

    },
    heading1: {
        textAlign: "center",
        color: "#5CB3FF",
        fontSize: 20,
        fontWeight: "bold",

    },
    para1: {
        textAlign: "center",
        width: 250,
        fontSize: 15,
    },
    input: {
        // borderBottomWidth: 2,
        // borderColor: "grey",
        width: '100%',
        fontSize: 15
    },
    footer: {
        // backgroundColor: 'red',
        // flex: 1,
        marginTop: 100,
        height: 100,
        // justifyContent: "center",
        alignItems: "center",
        justifyContent: 'flex-end'
    },
    button: {
        color: "white",
        fontSize: 20,
    },
    btncontainer: {
        alignItems: 'center',
        borderWidth: 1,
        paddingTop: 8,
        borderColor: '#FFA500',
        backgroundColor: '#FFA500',
        color: 'white',
        height: 50,
        width: 280,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 4.65,
        elevation: 6,
    },
});