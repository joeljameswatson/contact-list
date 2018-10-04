import React, { Component } from "react";
import { connect } from "react-redux";
import Create from "./Create";
import * as actions from "actions";

class Container extends Component {
  handleCreateContact = data => this.props.createContact(data);

  render() {
    return <Create handleCreateContact={this.handleCreateContact} />;
  }
}

export default connect(
  null,
  actions
)(Container);
