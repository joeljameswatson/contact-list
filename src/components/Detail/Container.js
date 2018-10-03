import React, { Component } from "react";
import { connect } from "react-redux";
import Contact from "./Contact";
import * as actions from "actions";
import { getContactDetail } from "reducers";

class Container extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const id = this.props.match.params.id;
    this.props.fetchContactDetail(id);
  };

  render() {
    const { contact } = this.props;
    return <Contact contact={contact} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { contact: getContactDetail(state, ownProps.match.params.id) };
};

export default connect(
  mapStateToProps,
  actions
)(Container);
