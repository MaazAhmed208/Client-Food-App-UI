import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import SampleIcon from './sampleIcon'

export default class Splash extends Component {
    render() {
        return (
            <View style={[styles.container]}>
                <Image
                    style={{ width: "100%", height: "100%", resizeMode: "cover", }}
                    source={require("../../../assests/splash/splash.png")}
                />
                <View style={[styles.coverContainer]}>
                    <SampleIcon/>
                    <View style={{ felx: 1, alignItems: 'center', fontSize: 20 }}>
                        <Text style={styles.fontStyle}>De handigste</Text>
                        <Text style={{ fontSize: 35, fontWeight: "bold", color: '#f9851f' }}>Boodschappen App</Text>
                        <Text style={styles.fontStyle}>van Nederland!</Text>
                    </View>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        alignItems: 'center',
    },
    coverContainer: {
        flex: 1,
        flexDirection: 'column',
        width: 330,
        height: 330,
        position: 'absolute',
        backgroundColor: '#f0f1f5',
        borderRadius: 330 / 2,
        marginTop: 150,
        justifyContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fontStyle: {
        fontSize: 35,
        fontWeight: "normal",
        color: '#f9851f'
    },
    imageStyle: {
        resizeMode: 'center',
        position: 'relative',
        width: 130, height: 100,
        backgroundColor: '#fff',
    }
});