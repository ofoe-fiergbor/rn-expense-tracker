import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AnimatedCircularProgress } from "react-native-circular-progress";


export default class HeaderProgressIcon extends Component {
  constructor(props) {
      super(props)
  
      this.state = {
           fill: 55
      }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <AnimatedCircularProgress
          size={200}
          width={20}
          fill={this.state.fill}
          tintColor="#00e0ff"
          backgroundColor="#3d5875"
          arcSweepAngle={250}
          rotation={-120}
        >
          {(fill) => {
              return(
                  <View>
                      <MaterialCommunityIcons name="home-analytics" size={70} color="#fff" />
                      <Text style={{alignSelf:'center', fontSize: 20, fontWeight:'bold', color:'#fff'}}>{this.state.fill}%</Text>
                  </View>
              )
          }}
        </AnimatedCircularProgress>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
  },
});
