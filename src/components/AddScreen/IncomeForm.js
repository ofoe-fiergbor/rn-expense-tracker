import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Picker,
} from "react-native";
import { Formik } from "formik";
import { connect } from "react-redux";
import { addIncTransaction } from "../../redux/actions/addTransactionAction";

class IncomeForm extends Component {
  render() {
    return (
      <View>
        <Formik
          initialValues={{
            date: "",
            incomeSource: "",
            description: "",
            amount: "",
            id: Math.random().toString(36).substr(2, 5)
          }}
          onSubmit={(values, action) => {
            action.resetForm();
            this.props.addIncTransaction(values);
            this.props.handleIsIncomeOpen();
          }}
        >
          {(formikProps) => (
            <View>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={formikProps.values.incomeSource}
                  style={{ height: 50, color: "grey" }}
                  onValueChange={formikProps.handleChange("incomeSource")}
                >
                  <Picker.Item
                    label="How did you earn your money?"
                    value="default"
                  />
                  <Picker.Item label="Salary" value="salary" />
                  <Picker.Item label="Side Hustle" value="sideHustle" />
                  <Picker.Item label="Gift" value="gift" />
                  <Picker.Item label="Investment" value="investment" />
                  <Picker.Item label="Credit Facility" value="credit" />
                  <Picker.Item label="Other" value="other" />
                </Picker>
              </View>
              <TextInput
                style={styles.inputForm}
                placeholder="Description"
                onChangeText={formikProps.handleChange("description")}
                value={formikProps.values.description}
              />
              <TextInput
                style={styles.inputForm}
                placeholder="Amount"
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

export default connect(null, { addIncTransaction })(IncomeForm);

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
