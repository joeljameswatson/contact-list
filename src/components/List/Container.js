import React, { Component } from "react";
import { connect } from "react-redux";
import List from "./List";
import * as actions from "actions";
import { getContacts } from "reducers";

class Container extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.props.fetchContacts();
  };

  render() {
    const { list } = this.props;
    // does tis run before contacts are fetched?
    return <List contacts={list} />;
  }
}

const mapStateToProps = state => {
  return { list: getContacts(state) };
};

export default connect(
  mapStateToProps,
  actions
)(Container);
