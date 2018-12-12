import React from 'react';
import 'bootstrap';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Title = (props) => {
  const { title } = props;
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export const Description = (props) => {
  const { description } = props;
  return (
    <div className="description">
      <p>{description}</p>
    </div>
  );
};

export const ControlButtons = props => (
  <div className="control-btn">
    <button className="btn btn-secondary" type="button">Delete</button>
    <button className="btn edit" type="button" style={{ background: '#009688' }}>Edit</button>
  </div>
);


export const Body = (props) => {
  const { body } = props;
  return (
    <p>{body}</p>
  );
};
