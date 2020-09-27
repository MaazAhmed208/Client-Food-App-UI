import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Page1 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageHeader}>
                <Image
                    style={styles.imageStyle}
                    source={require("../../../assests/splash/page1.png")}
                />
            </View>
            <View style={styles.bodyContainer}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, color: '#0ba7d2', textAlign: 'center', paddingBottom: 1 }}>welken bij ae boodschappen app van Nederland</Text>
                    <Text style={{ fontSize: 20, color: '#0ba7d2', textAlign: 'center' }}>app van Nederland</Text>
                    <Text style={{ fontSize: 20, color: '#46515d', textAlign: 'center', paddingTop: 30 }}>Lorem Ipsum</Text>
                    <Text style={{ fontSize: 20, color: '#46515d', textAlign: 'center', paddingTop: 30 }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Text>
                    <Text style={{ fontSize: 20, color: '#46515d', textAlign: 'center', paddingTop: 30 }}>Lorem Ipsum</Text>
                    <Text style={{ fontSize: 20, color: '#46515d', textAlign: 'center', paddingTop: 30 }}>
                        When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    </Text>
                    <Text style={{ fontSize: 20, color: '#46515d', textAlign: 'center', paddingTop: 30 }}>It has survived not only five centuries,</Text>
                    <View style={{ fontSize: 20, color: '#46515d', textAlign: 'center', paddingTop: 40, paddingBottom: 10  }}>
                        <View style={{
                            fontSize: 40, color: '#46515d', textAlign: 'center', width: 250, borderRadius: 10
                            , height: 60, backgroundColor: '#ff9800', alignItems: 'center', justifyContent: 'center'
                        }}>
                        <Text style={{fontSize: 30, color: '#fff',letterSpacing: 1.2}} >Next</Text></View>

                    </View>
                </View>
            </View>
        </View>
    );
}

export default Page1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    imageHeader: {
        flex: 0.3,
        backgroundColor: '#20232a',
        alignItems: 'center',

    },
    bodyContainer: {
        flex: 0.7,
        backgroundColor: '#20232a',

    },
    imageStyle: {
        resizeMode: 'center',
        position: 'absolute',
        width: 500, height: 400,
        top: -155,
    },
})