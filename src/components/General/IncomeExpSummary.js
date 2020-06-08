import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class IncomeExpSummary extends Component {
    render() {
        return (
            <View style={styles.sectionContainer}>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    sectionContainer:{
        backgroundColor:'#fff',
        width:300,
        height:120,
        alignSelf:'center',
        borderRadius: 10,
        elevation: 2
    }
})
