import React from "react";
import { View, StyleSheet } from "react-native";
import DistributionScreen from "../screens/DistributionScreen";
import ListScreen from "../screens/ListScreen";
import AddScreen from "../screens/AddScreen";
import BudgetScreen from "../screens/BudgetScreen";
import SettingScreen from "../screens/SettingScreen";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="distribution"
      tabBarOptions={{
        activeTintColor: "#668cff",
        style: {
          height: 60,
          paddingBottom: 5,
          backgroundColor: "#fff",
          shadowColor: "transparent",
          elevation: 0
        },
      }}
    >
      <Tab.Screen
        name="list"
        component={ListScreen}
        options={{
          tabBarLabel: "List",
          tabBarIcon: ({ color }) => (
            <Entypo name="list" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="distribution"
        component={DistributionScreen}
        options={{
          tabBarLabel: "Distribution",
          tabBarIcon: ({ color }) => (
            <AntDesign name="piechart" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="add"
        component={AddScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => (
            <View style={styles.addBtnContainer}>
              <AntDesign
                name="plus"
                size={35}
                color="white"
                style={{ fontWeight: "bold" }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="budget"
        component={BudgetScreen}
        options={{
          tabBarLabel: "Budet",
          tabBarIcon: ({ color }) => (
            <Entypo name="wallet" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="settings"
        component={SettingScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="cog" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  addBtnContainer: {
    width: 50,
    height: 50,
    backgroundColor: "#668cff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 50,
    elevation: 5,
  },
});

export default TabNavigator;
