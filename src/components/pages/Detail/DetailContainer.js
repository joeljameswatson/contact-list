import * as actions from "actions";

import React, { Component } from "react";
import {
  getContactDetail,
  getErrorMessage,
  getIsDetailFetching
} from "reducers";

import ApiError from "components/shared/ApiError";
import Contact from "./Contact";
import { connect } from "react-redux";

export class DetailContainer extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const id = this.props.match.params.id;
    this.props.fetchContactDetail(id);
  };

  handleRequestDelete = () => {
    const { match, deleteContact, history } = this.props;
    const id = match.params.id;
    deleteContact(id).then(() => history.push("/contacts"));
  };

  render() {
    const { contact } = this.props;
    const contactAsJS = contact && contact.toJS();

    if (this.props.errorMessage) {
      return (
        <ApiError
          message={this.props.errorMessage}
          handleRetry={this.fetchData}
        />
      );
    }

    return (
      <Contact
        contact={contactAsJS}
        handleRequestDelete={this.handleRequestDelete}
        loading={this.props.isFetching}
        id={this.props.match.params.id}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contact: getContactDetail(state, ownProps.match.params.id),
    isFetching: getIsDetailFetching(state),
    errorMessage: getErrorMessage(state)
  };
};

export default connect(
  mapStateToProps,
  actions
)(DetailContainer);
