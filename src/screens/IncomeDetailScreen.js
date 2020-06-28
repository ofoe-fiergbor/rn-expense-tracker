import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

const IncomeDetailScreen = ({ route, navigation }) => {
  const { incomeSource, amount, date, description } = route.params;
  const iconBackgroundColors = () => {
    if (incomeSource === "salary") {
      return "grey";
    }
    if (incomeSource === "sideHustle") {
      return "#d92626";
    }
    if (incomeSource === "gift") {
      return "#668cff";
    }
    if (incomeSource === "investment") {
      return "green";
    }
    if (incomeSource === "cedit") {
      return "navy";
    }
    if (incomeSource === "other") {
      return "red";
    }
  };
  const iconSelection = () => {
    if (incomeSource === "salary") {
      return "money-bill-alt";
    }
    if (incomeSource === "sideHustle") {
      return "blog";
    }
    if (incomeSource === "gift") {
      return "gratipay";
    }
    if (incomeSource === "investment") {
      return "bitcoin";
    }
    if (incomeSource === "credit") {
      return "building";
    }
    if (incomeSource === "other") {
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
            color="white"
            style={{ marginVertical: 30 }}
          />
          </View>
          <Text style={styles.cardTitle}>{incomeSource}</Text>
          <Text style={{ color: "grey", marginTop: 10 }}>
            {description}
          </Text>
          <Text style={styles.amount}>+GHS {amount}.00</Text>
        </View>
      </View>
    </View>
  );
};

export default IncomeDetailScreen;

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
  amount:{
      marginVertical:20,
      fontSize: 30,
      color:'navy'
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
