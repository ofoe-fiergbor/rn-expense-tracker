import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { FontAwesome } from "@expo/vector-icons";

export default class BudgetDistributionCard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <AnimatedCircularProgress
                    size={60}
                    width={3}
                    fill={60}
                    tintColor="navy"
                    backgroundColor="#dce9fa"
                >
                    {(fill) => {
                        return (
                            <View style={styles.icon}>
                                <FontAwesome name="cutlery" size={20} color="#fff" />
                            </View>
                        )
                    }}
                </AnimatedCircularProgress>
                <View style={{marginVertical:10, alignItems:'center'}}>
                <Text style={{fontSize:12, color:'grey'}}>FOOD</Text>
                <Text style={{fontWeight:'bold', fontSize: 12, color:'grey'}}>1,000 left</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 130,
        alignItems: "center",
        backgroundColor: "#fff",
        paddingVertical: 10,
        borderRadius: 10,
        elevation: 2,
        marginVertical: 10,
        
    },
    icon: {
        backgroundColor: "#668cff",
        width: 60,
        height: 60,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
      },
});
