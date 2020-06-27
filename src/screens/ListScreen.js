import { StyleSheet, Text, View, FlatList } from "react-native";
import RoundedBG from "../components/General/RoundedBG";
import IncomeExpSummary from "../components/General/IncomeExpSummary";
import Table from "../components/ListScreen/Table";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import React, { Component } from 'react'

export class ListScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <RoundedBG />
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <View style={styles.headingSummaryCtn}>
            <Text style={styles.heading}>OVERVIEW</Text>
            <Text style={styles.summary}>Here's a list of your transactions</Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <IncomeExpSummary />
          </View>
        </View>
        {/* <FlatList
          data={this.props.transactions}
          renderItem={({ item }) => {
            return <Table category={item.category} amount={item.amount}/>;
          }}
          keyExtractor={(item, i)=> i}
        /> */}
      </View>
    );
  }
}



export default connect(null)(ListScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e4f5ff",
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
});
