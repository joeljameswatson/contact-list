import React, { Component } from "react";
import { connect } from "react-redux";
import ContactList from "./List";
import * as actions from "actions";
import { getContactList, getIsFetching } from "reducers";
import Spinner from "components/shared/Spinner";

class ListContainer extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.props.fetchContacts();
  };

  render() {
    const { list, isFetching } = this.props;
    const showSpinner = isFetching && list.length === 0;
    return (
      <React.Fragment>
        <Spinner isVisible={showSpinner} />
        <ContactList contacts={list} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: getContactList(state),
    isFetching: getIsFetching(state)
  };
};

export default connect(
  mapStateToProps,
  actions
)(ListContainer);
