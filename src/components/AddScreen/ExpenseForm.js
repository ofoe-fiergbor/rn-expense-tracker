import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Picker,
} from "react-native";
import { Formik } from "formik";
// import { Picker } from "@react-native-community/picker";
import { connect } from "react-redux";
import { addExpTransaction } from "../../redux/actions/addTransactionAction";

class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpenseOpen: this.props.isExpenseOpen,
    };
  }

  render() {
    return (
      <View>
        <Formik
          initialValues={{
            date: "",
            expenseCategory: "",
            description: "",
            amount: "",
          }}
          onSubmit={(values, action) => {
            action.resetForm();
            this.props.addExpTransaction(values);
            this.props.handleIsExpenseOpen();
          }}
        >
          {(formikProps) => (
            <View>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={formikProps.values.expenseCategory}
                  style={{ height: 50, color: "grey" }}
                  onValueChange={formikProps.handleChange("expenseCategory")}
                >
                  <Picker.Item
                    label="How did you spend your money?"
                    value="default"
                  />
                  <Picker.Item label="Food" value="food" />
                  <Picker.Item label="Clothing" value="clothing" />
                  <Picker.Item label="Rent" value="rent" />
                  <Picker.Item
                    label="Telephone & Internet"
                    value="telephoneAndInternet"
                  />
                  <Picker.Item
                    label="Transport & Travel"
                    value="transportAndTravel"
                  />
                  <Picker.Item label="Bills" value="bills" />
                  <Picker.Item label="Medical" value="medical" />
                  <Picker.Item label="Lifestyle" value="lifestyle" />
                  <Picker.Item label="Other" value="other" />
                </Picker>
              </View>
              <TextInput
                style={{ ...styles.inputForm }}
                placeholder="Description"
                onChangeText={formikProps.handleChange("description")}
                value={formikProps.values.description}
              />
              <TextInput
                style={{ ...styles.inputForm }}
                placeholder="How much did you pay?"
                onChangeText={formikProps.handleChange("amount")}
                value={formikProps.values.amount}
                keyboardType="numeric"
              />
              <TouchableOpacity
                style={styles.saveButton}
                onPress={formikProps.handleSubmit}
              >
                <Text style={{ fontSize: 20, color: "#fff" }}>Save</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    );
  }
}
export default connect(null, { addExpTransaction })(ExpenseForm);

const styles = StyleSheet.create({
  inputForm: {
    borderBottomWidth: 1.8,
    borderColor: "grey",
    marginVertical: 15,
  },
  saveButton: {
    backgroundColor: "#668cff",
    height: 60,
    width: 300,
    marginTop: 20,
    alignSelf: "center",
    borderRadius: 10,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  pickerContainer: {
    marginTop: 80,
    borderColor: "grey",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});
