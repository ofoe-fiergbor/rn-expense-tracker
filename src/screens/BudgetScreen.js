import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import BudgetRoudedBG from '../components/BudgetComponent/BudgetRoudedBG'

export default class BudgetScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <BudgetRoudedBG/>
                </View>
                <Text>BudgetComponent</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#e4f5ff'
    }
})
