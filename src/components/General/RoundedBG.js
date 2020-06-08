import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const RoundedBG = () => {
    return (
        <View style={styles.oval} />
    )
}

export default RoundedBG

const styles = StyleSheet.create({
    oval: {
        top:0,
        width: 190,
        height: 200,
        alignSelf:'center',
        borderBottomStartRadius: 50,
        borderBottomEndRadius:50,
        backgroundColor: '#668cff',
        transform: [
          {scaleX: 2}
        ],
        position:'absolute',
        zIndex:-10
      },
})
