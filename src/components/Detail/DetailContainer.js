import React, { Component } from "react";
import { connect } from "react-redux";
import Contact from "./Contact";
import * as actions from "actions";
import { getContactDetail } from "reducers";
import ApiError from "components/shared/ApiError";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, loading: false };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const id = this.props.match.params.id;
    // this will also catch errors thrown in action creator
    this.setState({ error: null, loading: true });
    this.props
      .fetchContactDetail(id)
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleRequestDelete = () => {
    const { match, deleteContact, history } = this.props;
    const id = match.params.id;
    deleteContact(id).then(() => history.push("/contacts"));
  };

  render() {
    const { contact } = this.props;
    if (this.state.error) {
      return (
        <ApiError
          message={this.state.error.message}
          handleRetry={this.fetchData}
        />
      );
    }
    return (
      <Contact
        contact={contact}
        handleRequestDelete={this.handleRequestDelete}
        loading={this.state.loading}
        id={this.props.match.params.id}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { contact: getContactDetail(state, ownProps.match.params.id) };
};

export default connect(
  mapStateToProps,
  actions
)(Container);
