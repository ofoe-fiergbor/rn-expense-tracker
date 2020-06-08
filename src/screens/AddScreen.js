import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import RoundedBG from '../components/General/RoundedBG'

export default class AddScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <RoundedBG />
                </View>
                <Text>Add AddScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e4f5ff'
    }
})
