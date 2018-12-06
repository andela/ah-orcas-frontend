import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Input, FormFeedback } from 'reactstrap';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import PropTypes from 'prop-types';
import sendEmail from '../../actions/resetPassword';
import './style.css';

export class ResetPass extends Component {
    state = {
        email: '',
        errors: {},
        loading: false,
    };
    handleChange = e => {
        const { errors } = this.state;
        if (errors[e.target.name]) {
            delete errors[e.target.name];
            this.setState({
                [e.target.name]: e.target.value,
            });
        } else {
            this.setState({
                [e.target.name]: e.target.value,
            });
        }
    };

    handleSubmit = e => {
        const { email } = this.state;
        e.preventDefault();
        const errors = {};
        if (email === '') errors.email = 'Email is required';
        this.setState({ errors });

        const isValid = Object.keys(errors).length === 0;

        if (isValid) {
            this.setState({ loading: true });
            this.props
                .sendEmail({ user: { email } })
                .then(res => {
                    if (res.status === 200) {
                        this.setState({ loading: false });
                        swal('Sucess', 'check your email to continue');
                    }
                })
                .catch(err => {
                    this.setState({ loading: false });
                    swal('Sorry', 'Email is not recognised');
                });
        }
    };

    render() {
        const { email, errors, loading } = this.state;
        return (
            <div className="outer">
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Col sm={5}>
                            <Input
                                name="email"
                                type="email"
                                value={email}
                                onChange={this.handleChange}
                                placeholder="Enter email"
                            />
                            <FormFeedback>{errors.email}</FormFeedback>
                            <br />
                            <Button id="button" color="success" type="submit">
                                {loading ? 'Loading...' : 'Reset Password'}
                            </Button>
                            <br />
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

ResetPass.propTypes = {
    sendEmail: PropTypes.func.isRequired,
};

export default connect(
    null,
    { sendEmail },
)(ResetPass);
