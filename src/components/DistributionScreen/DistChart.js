import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { VictoryPie, VictoryChart } from "victory-native";

export default class DistChart extends Component {
  render() {
    
    return (
      <View style={styles.container}>
        <VictoryPie
          width={350}
          height={200}
          data={[
            { x: "Cats", y: 35 },
            { x: "Dogs", y: 40 },
            { x: "Birds", y: 55 },
          ]}
          colorScale={["#936c6c", "#00bfff", "#ffbf00"]}
          innerRadius={80}
          labelRadius={({ innerRadius }) => innerRadius + 5 }
          style={{ labels: { fill: "black", fontSize: 12, fontWeight: "bold"}}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "transparent",
  },
});
