import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default class ExpDistributionCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.icon}>
            <FontAwesome name="cutlery" size={20} color="#fff" />
          </View>
          <View>
            <Text style={{color:'grey'}}>950 C</Text>
            <Text style={styles.cardText}>Food</Text>
          </View>
        </View>
        <View>
          <Text style={{color:'grey',textAlign:'right'}}>62%</Text>
          <Text style={styles.cardText}>12 Entries</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: 300,
    height: 65,
    alignSelf: "center",
    borderRadius: 10,
    elevation: 2,
    marginVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    backgroundColor: "#668cff",
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10
  },
  cardText:{
      textTransform:'uppercase',
      
  }
});
