import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'

const Close = ({onPress}) => {
    return (
        <View style={styles.circle}>
            <TouchableNativeFeedback onPress={onPress}>
                <Image source={require('../../assetws/close.png')} style={styles.icon} />
            </TouchableNativeFeedback>

        </View>
    )
}

export default Close

const styles = StyleSheet.create({
    icon: {
        height: 27,
        width: 27,
        tintColor: 'white'
    },
    circle: {
        backgroundColor: 'rgba(92,90,91,0.7)',
        height: 48,
        width: 48,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 24,
        position: 'absolute',
        bottom: '1%',
        right: "45%"
    }
})