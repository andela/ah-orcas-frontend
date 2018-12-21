/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Input } from 'reactstrap';
import './report.scss';
import { reportActions } from '../../actions/report.actions';

export class Reports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      report: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line prefer-destructuring
    const title = this.state.title;
    const body = this.state.report;
    const data = {
      title,
      body,
    };
    reportActions(data);
    this.setState({ title: '', report: '' });
  };

  render() {
    return (
      <div className="report">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Input
              type="text"
              name="title"
              id="title"
              className="form-control description"
              placeholder="Enter Subject"
              required
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="textarea"
              rows="18"
              cols="50"
              name="text"
              id="report"
              className="form-control description"
              placeholder="Enter your report"
              required
              onChange={this.handleChange}
            />
          </FormGroup>

          <button type="submit" className="btn report-button ">
           Submit
          </button>
        </Form>
      </div>
    );
  }
}

export default connect(null)(Reports);
