import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import ListScreen from "../screens/ListScreen";
import TraxDetailScreen from '../screens/TraxDetailScreen';
import IncomeDetailScreen from '../screens/IncomeDetailScreen';



const ListStack = createStackNavigator()

const ListStackScreen = () => {
    return (
        <ListStack.Navigator>
            <ListStack.Screen name='list' component={ListScreen} options={{headerShown:false}}/>
            <ListStack.Screen name='details' component={TraxDetailScreen} options={{headerShown:false}}/>
            <ListStack.Screen name='IncomeDetails' component={IncomeDetailScreen} options={{headerShown:false}}/>
        </ListStack.Navigator>
    )
}

export default ListStackScreen

// const styles = StyleSheet.create({})
