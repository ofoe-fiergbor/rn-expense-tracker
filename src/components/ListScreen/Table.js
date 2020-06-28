import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default class Table extends Component {
  iconBackgroundColors = () => {
    if (this.props.expenseCategory === "food") {
      return "#668cff";
    }
    if (this.props.expenseCategory === "clothing") {
      return "grey";
    }
    if (this.props.expenseCategory === "rent") {
      return "#d92626";
    }
    if (this.props.expenseCategory === "Telephone & Internet") {
      return "green";
    }
    if (this.props.expenseCategory === "Transport & Travel") {
      return "blue";
    }
    if (this.props.expenseCategory === "bills") {
      return "navy";
    }
    if (this.props.expenseCategory === "medical") {
      return "red";
    }
    if (this.props.expenseCategory === "lifestyle") {
      return "orange";
    }
    if (this.props.expenseCategory === "Others") {
      return "'#ffbf00";
    }
  };

  iconSelection = () => {
    if (this.props.expenseCategory === "food") {
      return "utensil-spoon";
    }
    if (this.props.expenseCategory === "clothing") {
      return "tshirt";
    }
    if (this.props.expenseCategory === "rent") {
      return "home";
    }
    if (this.props.expenseCategory === "Telephone & Internet") {
      return "phone";
    }
    if (this.props.expenseCategory === "Transport & Travel") {
      return "car";
    }
    if (this.props.expenseCategory === "bills") {
      return "list-alt";
    }
    if (this.props.expenseCategory === "medical") {
      return "briefcase-medical";
    }
    if (this.props.expenseCategory === "lifestyle") {
      return "music";
    }
    if (this.props.expenseCategory === "Others") {
      return "bars";
    }
  };
  render() {
    const {
      expenseCategory,
      amount,
      date,
      description,
      navigation,
    } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          navigation.navigate("details", {
            expenseCategory,
            amount,
            date,
            description,
            
          });
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 11, color: "grey" }}>SATURDAY, 25 JAN</Text>
          {/* <Text style={{ fontSize: 11, color: "grey" }}>-570 C</Text> */}
        </View>
        <View style={styles.row}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                ...styles.icon,
                backgroundColor: this.iconBackgroundColors(),
              }}
            >
              <FontAwesome5
                name={this.iconSelection()}
                size={18}
                color="#fff"
              />
            </View>
            <Text style={styles.cardText}>{expenseCategory}</Text>
          </View>
          <Text style={{ color: "grey", textAlign: "right", fontSize: 14 }}>
            {amount}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: 320,
    alignSelf: "center",
    borderRadius: 10,
    elevation: 2,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  icon: {
    // backgroundColor: "#668cff",
    width: 35,
    height: 35,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  cardText: {
    textTransform: "capitalize",
    fontSize: 14,
    color: "grey",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
});
