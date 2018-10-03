import React, { Component } from "react";
import { connect } from "react-redux";
import ContactList from "./ContactList";
import * as actions from "actions";
import { getContactList } from "reducers";

class Container extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.props.fetchContacts();
  };

  render() {
    const { list } = this.props;
    return <ContactList contacts={list} />;
  }
}

const mapStateToProps = state => {
  return { list: getContactList(state) };
};

export default connect(
  mapStateToProps,
  actions
)(Container);
