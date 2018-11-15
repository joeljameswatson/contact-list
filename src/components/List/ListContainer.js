import * as actions from "actions";

import React, { Component } from "react";
import { getContactList, getIsListFetching } from "reducers";

import ContactList from "./List";
import Spinner from "components/shared/Spinner";
import { connect } from "react-redux";

class ListContainer extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.props.fetchContacts();
  };

  render() {
    const { list, isFetching } = this.props;
    const showSpinner = isFetching && list.size === 0;
    const listAsJS = list.toJS();
    return (
      <React.Fragment>
        <Spinner isVisible={showSpinner} />
        <ContactList contacts={listAsJS} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: getContactList(state),
    isFetching: getIsListFetching(state)
  };
};

export default connect(
  mapStateToProps,
  actions
)(ListContainer);
