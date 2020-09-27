import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Page2 = () => {
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
                    <Text style={{ fontSize: 20, color: '#0ba7d2', textAlign: 'center', paddingBottom: 1 }}>
                        Hoe begin je?</Text>

                    <View style={{ flex: 1, width: '100%', paddingTop: 30, alignContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: 50, width: '90%', flexDirection: 'row', margin: 15, alignItems: 'center' }}>
                            <View style={{
                                display: 'flex', width: 50, height: '100%', backgroundColor: '#ff9800',
                                justifyContent: 'center', alignItems: 'center', borderRadius: 5
                            }}>
                                <Text style={{ fontSize: 40 }}>1</Text>
                            </View>
                            <Text style={{ fontSize: 20, color: '#46515d', textAlign: 'center', marginLeft: 10 }}>
                                Ipsum is simply dummy text of the printing
                            </Text>
                        </View>
                        <View style={{ height: 50, width: '90%', flexDirection: 'row', margin: 15, alignItems: 'center' }}>
                            <View style={{
                                display: 'flex', width: 50, height: '100%', backgroundColor: '#ff9800',
                                justifyContent: 'center', alignItems: 'center', borderRadius: 5
                            }}>
                                <Text style={{ fontSize: 40 }}>2</Text>
                            </View>
                            <Text style={{ fontSize: 20, color: '#46515d', textAlign: 'center', marginLeft: 10 }}>
                                Ipsum is simply dummy text of the printing
                            </Text>
                        </View>
                        <View style={{ height: 50, width: '90%', flexDirection: 'row', margin: 15, alignItems: 'center' }}>
                            <View style={{ display: 'flex', width: 50, height: '100%', backgroundColor: '#ff9800', 
                            justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                                <Text style={{ fontSize: 40 }}>3</Text>
                            </View>
                            <Text style={{ fontSize: 20, color: '#46515d', textAlign: 'center', marginLeft: 10 }}>
                                Ipsum is simply dummy text of the printing
                            </Text>
                        </View>
                        <View style={{ height: 50, width: '90%', flexDirection: 'row', margin: 15, alignItems: 'center', }}>
                            <View style={{ display: 'flex', width: 50, height: '100%', backgroundColor: '#ff9800', justifyContent: 'center', 
                            alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                                <Text style={{ fontSize: 40 }}>4</Text>
                            </View>
                            <Text style={{ fontSize: 20, color: '#46515d', textAlign: 'center', marginLeft: 10 }}>
                                Ipsum is simply dummy text of the printing
                            </Text>
                        </View>

                    </View>
                    <View style={{ fontSize: 20, color: '#46515d', textAlign: 'center', paddingTop: 40, paddingBottom: 10 }}>
                        <View style={{
                            fontSize: 40, color: '#46515d', textAlign: 'center', width: 250, borderRadius: 10
                            , height: 60, backgroundColor: '#ff9800', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <Text style={{ fontSize: 30, color: '#fff', letterSpacing: 1.2 }} >let's go</Text></View>

                    </View>
                </View>
            </View>
        </View>
    )
}

export default Page2;

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