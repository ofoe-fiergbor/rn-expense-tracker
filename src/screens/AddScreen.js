import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import RoundedBG from "../components/General/RoundedBG";
import { Dropdown } from "react-native-material-dropdown";
import { TextInput, ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export default class AddScreen extends Component {
  render() {
    const data = [{ value: "Income" }, { value: "Expense" }];
    const categoryData = [
      { value: "Salary" },
      { value: "Food" },
      { value: "Rent" },
      { value: "Clothes" },
      { value: "Lifestyle" },
    ];
    return (
      <View style={styles.container}>
        <View>
          <RoundedBG />
        </View>
        <ScrollView>
        <View style={styles.headingSummaryCtn}>
          <Text style={styles.heading}>ADD TRANSACTION</Text>
          <Text style={styles.summary}>
            Here, you add all income and expense transactions.
          </Text>
        </View>

        <View style={styles.category}>
          <Dropdown label="Income / Expense" data={data} />
        </View>
        <View style={styles.formContainer}>
          <View>
            <Dropdown label="Item Category" fontSize={12} data={categoryData} />
          </View>
          <View style={styles.textInput}>
            <TextInput placeholder="Description" autoCapitalize='sentences'/>
          </View>
          <View style={styles.textInput}>
            <TextInput placeholder="Amount" keyboardType='decimal-pad' />
          </View>
          <TouchableOpacity style={styles.saveBtn}>
              <Text style={{color:'#fff', fontSize: 16}}>SAVE</Text>
          </TouchableOpacity>
        </View>
        
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e4f5ff",
  },
  category: {
    width: 300,
    height: 70,
    backgroundColor: "#fff",
    alignSelf: "center",
    marginTop: 10,
    elevation: 2,
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  headingSummaryCtn: {
    marginTop: 70,
    marginBottom: 20,
    alignItems: "center",
  },
  heading: {
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  summary: {
    paddingHorizontal: 20,
    fontSize: 13,
    textAlign: "center",
    color: "#ccd9ff",
  },
  formContainer: {
    width: 300,
    backgroundColor: "#fff",
    marginTop: 50,
    borderRadius: 10,
    alignSelf: "center",
    paddingHorizontal: 20,
  },
  textInput: {
    marginVertical: 10,
    lineHeight: 15,
    borderBottomColor: "#dce9fa",
    borderBottomWidth: 1,
  },
  saveBtn:{
      width: 250,
      height: 50,
      alignSelf:'center',
      backgroundColor: '#668cff',
      marginVertical: 20,
      borderRadius: 10,
      elevation: 2,
      alignItems:'center',
      justifyContent:'center'
  }
});
