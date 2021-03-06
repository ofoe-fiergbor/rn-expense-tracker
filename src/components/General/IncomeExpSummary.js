import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default class IncomeExpSummary extends Component {
  render() {
    return (
      <View style={styles.sectionContainer}>
        <View style={styles.period}>
          <TouchableOpacity>
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.periodText}>January 2020</Text>
          <TouchableOpacity>
            <AntDesign name="right" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine}></View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={styles.summary}>
            <Text style={styles.summaryText}>Income</Text>
            <Text style={styles.summaryFigures}>GHC 3,800</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.summary}>
            <Text style={styles.summaryText}>Expenses</Text>
            <Text style={styles.summaryFigures}>GHC 2,800</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.summary}>
            <Text style={styles.summaryText}>Balance</Text>
            <Text style={styles.summaryFigures}>GHC 1,000</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: "#fff",
    width: 320,
    height: 130,
    alignSelf: "center",
    borderRadius: 10,
    elevation: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  period: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  periodText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  horizontalLine: {
    height: 1,
    width: 250,
    backgroundColor: "#dce9fa",
    justifyContent: "center",
    marginVertical: 15,
  },
  summary: {
    alignItems: "center",
  },
  summaryText: {
    fontSize: 14,
  },
  summaryFigures: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
