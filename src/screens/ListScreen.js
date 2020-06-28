import { StyleSheet, Text, View, FlatList } from "react-native";
import RoundedBG from "../components/General/RoundedBG";
import IncomeExpSummary from "../components/General/IncomeExpSummary";
import Table from "../components/ListScreen/Table";
import TableInc from "../components/ListScreen/TableInc";
import { connect } from "react-redux";
import React, { Component } from "react";

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
            <Text style={styles.summary}>
              Here's a list of your transactions
            </Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <IncomeExpSummary />
          </View>
        </View>

        <View style={{ height: 105, marginBottom: 10 }}>
          <FlatList
            data={this.props.addIncomeReducer}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <TableInc
                  amount={item.amount}
                  description={item.description}
                  incomeSource={item.incomeSource}
                  date={item.date}
                />
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </View>

        <FlatList
          data={this.props.addExpTransactionReducer}
          renderItem={({ item }) => {
            return (
              <Table
                amount={item.amount}
                description={item.description}
                expenseCategory={item.expenseCategory}
                date={item.date}
              />
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addExpTransactionReducer: state.addExpTransactionReducer,
    addIncomeReducer: state.addIncomeReducer,
  };
};

export default connect(mapStateToProps)(ListScreen);

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
