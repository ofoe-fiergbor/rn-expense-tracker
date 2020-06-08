import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BudgetRoudedBG = () => {
    return (
        <View style={styles.oval} />
    )
}

export default BudgetRoudedBG

const styles = StyleSheet.create({
    oval: {
        width: 190,
        top:0,
        height: 300,
        alignSelf:'center',
        borderBottomStartRadius: 60,
        borderBottomEndRadius:60,
        backgroundColor: '#668cff',
        transform: [
          {scaleX: 2}
        ],
        position:'absolute',
        zIndex:-10
      },
})
