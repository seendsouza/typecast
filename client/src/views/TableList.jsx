/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import ListItem from "./ListItem";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Card from "../components/Card/Card.jsx";
import { thArray, tdArray } from "../variables/Variables.jsx";
class TableList extends Component {
  render() {
    return (
      <div className="content">
        <Container fluid>
          <Row>
            <Col md={12}>
              <Card
                plain
                title="Striped Table with Hover"
                category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table hover>
                    <thead>
                      <tr>
                        <th>Tweets</th>;
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.dashboard.tweets.map((id) => {
                        return <ListItem id={id.id} content={id.content} />
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

TableList.propTypes = {
  dashboard: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  dashboard: state.dashboard
});

export default connect(mapStateToProps)(TableList);
