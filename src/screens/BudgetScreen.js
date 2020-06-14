import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import BudgetRoudedBG from "../components/BudgetComponent/BudgetRoudedBG";
import HeaderProgressIcon from "../components/BudgetComponent/HeaderProgressIcon";
import BudgetSummary from "../components/BudgetComponent/BudgetSummary";
import BudgetDistributionCard from "../components/BudgetComponent/BudgetDistributionCard";
import { ScrollView } from "react-native-gesture-handler";

export default class BudgetScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <BudgetRoudedBG />
        </View>
        <ScrollView>
          <View style={{paddingHorizontal:30}}>
            <View style={{ alignItems: "center" }}>
              <HeaderProgressIcon />
            </View>
            <View>
              <BudgetSummary />
            </View>
            <Text
              style={{ alignSelf: "center", fontSize: 17, marginBottom: 5, marginTop: 10 }}
            >
              BUDGET DISTRIBUTION
            </Text>
            <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
              <BudgetDistributionCard />
              <BudgetDistributionCard />
              <BudgetDistributionCard />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e4f5ff",
  },
});
