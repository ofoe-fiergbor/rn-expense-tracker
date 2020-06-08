import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RoundedBG from '../components/General/RoundedBG'

const ListScreen = () => {
    return (
        <View style={styles.container}>
            <View>
                <RoundedBG/>
            </View>
            <Text>List Screen</Text>
        </View>
    )
}

export default ListScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#e4f5ff'
    }
})
