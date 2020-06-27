import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

export default class Table extends Component {
  render() {
    const { category, amount } = this.props;
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 11, color: "grey" }}>SATURDAY, 25 JAN</Text>
          {/* <Text style={{ fontSize: 11, color: "grey" }}>-570 C</Text> */}
        </View>
        <View style={styles.row}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.icon}>
              <FontAwesome name="cutlery" size={20} color="#fff" />
            </View>
            <Text style={styles.cardText}>{category}</Text>
          </View>
    <Text style={{ color: "grey", textAlign: "right" }}>{amount}</Text>
        </View>
        {/* <View style={styles.row}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={[styles.icon, {backgroundColor:'#ffbf00'}]}>
            <FontAwesome5 name="tshirt" size={20} color="#fff" />
            </View>
            <Text style={styles.cardText}>Clothes</Text>
          </View>
          <Text style={{ color: "grey", textAlign: "right" }}>-250 C</Text>
        </View>
        <View style={styles.row}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={[styles.icon, {backgroundColor:'#d92626'}]}>
              <FontAwesome name="home" size={20} color="#fff" />
            </View>
            <Text style={styles.cardText}>Rent</Text>
          </View>
          <Text style={{ color: "grey", textAlign: "right" }}>-250 C</Text>
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: 300,
    alignSelf: "center",
    borderRadius: 10,
    elevation: 2,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 5,
  },
  icon: {
    backgroundColor: "#668cff",
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  cardText: {
    textTransform: "capitalize",
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
});
