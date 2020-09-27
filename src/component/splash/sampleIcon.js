import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SampleIcon = () => {
    return (
        <View style={styles.sampleIconContainer}>
            <Image
                style={styles.imageStyle}
                source={require("../../../assests/splash/splashIcon.png")}
            />
        </View>
    );
}

export default SampleIcon;
const styles = StyleSheet.create({
    imageStyle: {
        resizeMode: 'center',
        position: 'relative',
        width: 130, height: 100,
        backgroundColor: '#fff',
    },
    sampleIconContainer: {
        width: 150, height: 150,
        backgroundColor: '#fff',
        borderRadius: 110 / 2,
        position: 'absolute',
        top: -50, right: 85,
        justifyContent: 'center',
        // alignContent: 'center',
        alignItems: 'center'
    }
});