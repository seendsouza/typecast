import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import axios from "axios";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: ""
    };
  }
  /*
  componentDidMount() {
    axios
      .get(`https://api.twitter.com/1.1/statuses/show.json?id=${this.props.id}`)
      .then(res => {
        this.setState({displayText: res.body});
      });
  }
      */
  render() {
    return (
      <tr>
        <td>{this.props.content}</td>
        <td>
          <a target="_blank" href={"twitter.com" + this.props.id}>></a>
        </td>
      </tr>
    );
  }
}

ListItem.propTypes = {
  dashboard: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  dashboard: state.dashboard
});

export default connect(mapStateToProps)(ListItem);
