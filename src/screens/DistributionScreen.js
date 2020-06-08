import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import RoundedBG from "../components/General/RoundedBG";
import IncomeExpSummary from "../components/General/IncomeExpSummary";
import DistChart from "../components/DistributionScreen/DistChart";
import { ScrollView } from "react-native-gesture-handler";

class DistributionScreen extends Component {
  render() {
    return (
      <View style={styles.screenContainer}>
        <RoundedBG />
        <View style={{ paddingHorizontal: 20 }}>
          <View style={styles.headingSummaryCtn}>
            <Text style={styles.heading}>Distribution</Text>
            <Text style={styles.summary}>
              Here is your financial report for the selected month.
            </Text>
          </View>
          <View>
            <IncomeExpSummary />
          </View>
        </View>
        <ScrollView>
          <View>
            <DistChart />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#e4f5ff",
  },
  headingSummaryCtn: {
    marginTop: 70,
    marginBottom: 20,
    alignItems: "center",
  },
  heading: {
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  summary: {
    paddingHorizontal: 20,
    fontSize: 13,
    textAlign: "center",
    color: "#ccd9ff",
  },
});

export default DistributionScreen;
