import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Modal,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import RoundedBG from "../components/General/RoundedBG";
import { Dropdown } from "react-native-material-dropdown";
import { connect } from "react-redux";
import { addTransaction } from "../redux/actions/addTransactionAction";
import { AntDesign } from "@expo/vector-icons";
import IncomeForm from "../components/AddScreen/IncomeForm";
import ExpenseForm from "../components/AddScreen/ExpenseForm";

class AddScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpenseOpen: false,
      isIncomeOpen: false,
      
    };
  }
  handleIsExpenseOpen = ()=>{
    this.setState({
      isExpenseOpen:false
    })
  }
  handleIsIncomeOpen=()=>{
    this.setState({
      isIncomeOpen: false
    })
  }

  render() {
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
          <Modal visible={this.state.isIncomeOpen} animationType="slide">
            <View style={styles.modalContent}>
              <AntDesign
                name="closecircleo"
                size={30}
                color="#e4f5ff"
                style={{ alignSelf: "center", marginTop: 30 }}
                onPress={() => {
                  this.setState({
                    isIncomeOpen: false,
                  });
                }}
              />
               <View style={styles.modalBackground}>
               <Text style={styles.modalHeader}>Income</Text>
              <IncomeForm handleIsIncomeOpen={this.handleIsIncomeOpen}/>
              </View>
            </View>
          </Modal>
          <Modal visible={this.state.isExpenseOpen} animationType="slide">
            <View style={styles.modalContent}>
            <AntDesign
                name="closecircleo"
                size={30}
                color="#e4f5ff"
                style={{ alignSelf: "center",  marginTop: 30 }}
                onPress={() => {
                  this.setState({
                    isExpenseOpen: false,
                  });
                }}
              />
              <View style={styles.modalBackground}>
             <Text style={styles.modalHeader}>Expense</Text>
              <ExpenseForm  handleIsExpenseOpen={this.handleIsExpenseOpen}/>
              </View>
            </View>
          </Modal>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.setState({
                  isIncomeOpen: true,
                });
              }}
            >
              <Text style={styles.buttonText}>Income</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.setState({ 
                  isExpenseOpen: true,
                });
              }}
            >
              <Text style={styles.buttonText}>Expenditure</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default connect(null, { addTransaction })(AddScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e4f5ff",
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 100,
  },
  button: {
    width: 250,
    height: 80,
    backgroundColor: "#FFD966",
    marginVertical: 15,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 23,
    fontWeight: "bold",
    color: "grey",
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
  modalContent: {
    flex: 1,
    // backgroundColor: "#e4f5ff",
    backgroundColor: '#668cff',
  },
  modalBackground:{
    marginTop: 20,
    backgroundColor:'#e4f5ff',
    paddingHorizontal: 30,
    flex: 1,
    borderTopRightRadius:40,
    borderTopLeftRadius: 40

  },
  modalHeader:{textAlign:'center', fontSize: 30, fontWeight:'bold', marginTop: 20}
});
