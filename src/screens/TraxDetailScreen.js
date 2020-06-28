import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

const TraxDetailScreen = ({ route, navigation }) => {
  const {
    expenseCategory,
    amount,
    date,
    description,
  } = route.params;

  const iconBackgroundColors = () => {
    if (expenseCategory === "food") {
      return "#668cff";
    }
    if (expenseCategory === "clothing") {
      return "grey";
    }
    if (expenseCategory === "rent") {
      return "#d92626";
    }
    if (expenseCategory === "Telephone & Internet") {
      return "green";
    }
    if (expenseCategory === "Transport & Travel") {
      return "blue";
    }
    if (expenseCategory === "bills") {
      return "navy";
    }
    if (expenseCategory === "medical") {
      return "red";
    }
    if (expenseCategory === "lifestyle") {
      return "orange";
    }
    if (expenseCategory === "Others") {
      return "'#ffbf00";
    }
  };

  const iconSelection = () => {
    if (expenseCategory === "food") {
      return "utensil-spoon";
    }
    if (expenseCategory === "clothing") {
      return "tshirt";
    }
    if (expenseCategory === "rent") {
      return "home";
    }
    if (expenseCategory === "Telephone & Internet") {
      return "phone";
    }
    if (expenseCategory === "Transport & Travel") {
      return "car";
    }
    if (expenseCategory === "bills") {
      return "list-alt";
    }
    if (expenseCategory === "medical") {
      return "briefcase-medical";
    }
    if (expenseCategory === "lifestyle") {
      return "music";
    }
    if (expenseCategory === "Others") {
      return "bars";
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.closeBtn}
        onPress={() => {
          navigation.navigate("list");
        }}
      >
        <AntDesign name="closecircleo" size={30} color="white" />
      </TouchableOpacity>
      <View style={styles.subContainter}>
        <View style={styles.card}>
        <View
              style={{
                ...styles.icon,
                backgroundColor: iconBackgroundColors(),
              }}
            >
          <FontAwesome5
            name={iconSelection()}
            size={50}
            color="#fff"
            style={{ marginVertical: 30 }}
          />
          </View>
          <Text style={styles.cardTitle}>{expenseCategory}</Text>
          <Text
            style={{
              color: "grey",
              marginTop: 10,
              textTransform: "capitalize",
            }}
          >
            {description}
          </Text>
          <Text style={styles.amount}>-GHS {amount}.00</Text>
        </View>
      </View>
    </View>
  );
};

export default TraxDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#668cff",
  },
  closeBtn: { alignSelf: "center", marginTop: 60 },
  subContainter: {
    backgroundColor: "#e4f5ff",
    flex: 1,
    marginTop: 30,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  card: {
    paddingTop: 25,
    width: 300,
    height: 350,
    backgroundColor: "#fff",
    alignSelf: "center",
    elevation: 10,
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "grey",
  },
  amount: {
    marginVertical: 20,
    fontSize: 30,
    color: "red",
  },
  icon: {
    width: 100,
    height: 100,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    marginBottom: 10
  },
});
