import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default class Table extends Component {
  iconBackgroundColors = () =>{
    if(this.props.incomeSource === "salary"){
      return "grey"
    }
    if(this.props.incomeSource === "sideHustle"){
      return "#d92626"
    }
    if(this.props.incomeSource === "gift"){
      return "#668cff"
    }
    if(this.props.incomeSource === "investment"){
      return "green"
    }
    if(this.props.incomeSource === 'cedit'){
      return "navy"
    }
    if(this.props.incomeSource === "other"){
      return "red"
    }
    
  }
  iconSelection = () =>{
    if(this.props.incomeSource === "salary"){
      return "money-bill-alt"
    }
    if(this.props.incomeSource === "sideHustle"){
      return "blog"
    }
    if(this.props.incomeSource === "gift"){
      return "gratipay"
    }
    if(this.props.incomeSource === "investment"){
      return "bitcoin"
    }
    if(this.props.incomeSource === "credit"){
      return "building"
    }
    if(this.props.incomeSource === "other"){
      return "bars"
    }
    
  }

  render() {
    const { incomeSource, amount, date, description } = this.props;
    return (
        <TouchableOpacity style={styles.container}>
          <Text style={{ fontSize: 9, color: "grey", textAlign:'center'}}>25 JAN</Text>
          {/* <Text style={{ fontSize: 11, color: "grey" }}>-570 C</Text> */}
        <View style={styles.row}>
            <View style={{...styles.icon, backgroundColor:this.iconBackgroundColors()}}>
              <FontAwesome5 name={this.iconSelection()} size={18} color="#fff" />
            </View>
            <Text style={styles.cardText}>{incomeSource}</Text>
          <Text style={{ color: "grey", textAlign: "center" , fontSize:14}}>{amount}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: 100,
    height: 100,
    alignSelf: "center",
    borderRadius: 10,
    elevation: 7,
    paddingHorizontal: 10,
    marginHorizontal: 10,

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
    color:'grey',
    textAlign:'center'
  },
  row: {
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
});
