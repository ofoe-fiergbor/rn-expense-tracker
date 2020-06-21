import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import RoundedBG from "../components/General/RoundedBG";
import { Dropdown } from "react-native-material-dropdown";
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { connect } from "react-redux";
import {addTransaction} from '../redux/actions/addTransactionAction'
// import DatePickerr from "../components/AddScreen/DatePickerr";

class AddScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: Math.random().toString(36).substr(2, 5),
      incomeOrExpense: "",
      category: "",
      description: "",
      amount: "",
    };
  }
  handleUpdateState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  handleTransactionSumbit = () =>{
    let {description, amount} = this.state
    if (description.length ===0|| amount === 0){
      alert('Form is Incomplete')
      return
    }
    let transaction = [this.state]
    this.props.addTransaction(transaction)
    this.props.navigation.navigate('list')
    
  }

  render() {
    const transactionTypeData = [
      { value: "Income" }, 
      { value: "Expense" },
    ];
    const categoryData = [
      { value: "Salary" },
      { value: "Passive Income" },
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
            <Dropdown
              label="Income / Expense"
              data={transactionTypeData}
              onChangeText={(text) => {
                this.handleUpdateState("incomeOrExpense", text);
              }}
            />
          </View>
          <View style={styles.formContainer}>
            <View>
              <Dropdown
                label="Item Category"
                fontSize={12}
                data={categoryData}
                onChangeText={(text) => {
                  this.handleUpdateState("category", text);
                }}
              />
            </View>

            {/* <View style={styles.textInput}>
            <DatePickerr handleUpdateState={(text) => {this.handleUpdateState('date', text) }} />
            </View> */}

            <View style={styles.textInput}>
              <TextInput
                placeholder="Description"
                autoCapitalize="sentences"
                onChangeText={(text) => {
                  this.handleUpdateState("description", text);
                }}
              />
            </View>

            <View style={styles.textInput}>
              <TextInput
                placeholder="Amount"
                keyboardType="decimal-pad"
                onChangeText={(text) => {
                  this.handleUpdateState("amount", text);
                }}
              />
            </View>
            <TouchableOpacity style={styles.saveBtn} onPress={this.handleTransactionSumbit}>
              <Text style={{ color: "#fff", fontSize: 16 }}>SAVE</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default connect(null, {addTransaction})(AddScreen)

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
  saveBtn: {
    width: 250,
    height: 50,
    alignSelf: "center",
    backgroundColor: "#668cff",
    marginVertical: 20,
    borderRadius: 10,
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
