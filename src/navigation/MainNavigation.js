import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";


function MainNavigation() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <TabNavigator/>  
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainNavigation;
