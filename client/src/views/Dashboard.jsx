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
import ChartistGraph from "react-chartist";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

import { Card } from "../components/Card/Card.jsx";
import { StatsCard } from "../components/StatsCard/StatsCard.jsx";
import { Tasks } from "../components/Tasks/Tasks.jsx";
import { optionsBar, responsiveBar } from "../variables/Variables.jsx";
import { connect } from "react-redux";
import { getDashboard } from "../actions/dashboardActions";
const Graph = (props) =>{
  return(
    <ChartistGraph {...props} />
  )
}

class Dashboard extends Component {
  componentDidMount() {
    this.props.getDashboard();
  }
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    var percentageNegativeTweets =
      (this.props.dashboard.noNegativeTweets /
        this.props.dashboard.tweetsAnalyzed) *
      100;
    if (!percentageNegativeTweets) {
      percentageNegativeTweets = 0;
    }
    const fixedNegPercentage = percentageNegativeTweets.toFixed(0);
    const remainingPercentage = 100 - fixedNegPercentage;
    const dataPie = {
      labels: [`${fixedNegPercentage}%`, `${remainingPercentage}%`],
      series: [parseInt(fixedNegPercentage), remainingPercentage]
    };
    const dataBar = {
      labels: this.props.dashboard.uniqueList.slice(0, 5).map(a => {
        return a[0];
      }),
      series: this.props.dashboard.uniqueList.slice(0, 5).map(a => {
        return a[1];
      })
    };
    console.log(dataPie);
    return (
      <div className="content">
        <Container fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-server text-warning" />}
                statsText="Tweets Analyzed"
                statsValue={this.props.dashboard.tweetsAnalyzed}
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Number of total tweets"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-success" />}
                statsText="Negative Tweets"
                statsValue={this.props.dashboard.noNegativeTweets}
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Number of negative tweets (polarity)"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-danger" />}
                statsText="% of Negative Tweets"
                statsValue={fixedNegPercentage}
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="Ratio between total tweets and negative"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-twitter text-info" />}
                statsText="Average Perception"
                statsValue={this.props.dashboard.perception.toFixed(2)*100}
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Average perception"
              />
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Tweet Demographic"
                category="Negative Tweets vs. Other Tweets"
                stats=""
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <Graph data={dataPie} type="Pie" />
                  </div>
                }
              />
            </Col>
            <Col md={6}>
              <Card
                id="chartActivity"
                title="Top Keywords"
                category="Pie Chart"
                stats=""
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <Graph
                      data={dataBar}
                      type="Bar"
                      options={optionsBar}
                      responsiveOptions={responsiveBar}
                    />
                  </div>
                }
              />
            </Col>

            <Col md={3}>
              <Card
                title="Top Keywords"
                category="List"
                statsIcon="fa fa-history"
                content={
                  <div className="table-full-width">
                    <table className="table">
                      {this.props.dashboard.uniqueList.slice(0, 5).map(a => {
                        return (
                          <tr>
                            <td>{a[0]}</td>
                            <td>{a[1]}</td>
                          </tr>
                        );
                      })}
                    </table>
                  </div>
                }
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

Dashboard.propTypes = {
  dashboard: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  dashboard: state.dashboard
});

export default connect(mapStateToProps, { getDashboard })(Dashboard);
