import React from 'react';

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
    <div>
      <p>{description}</p>
    </div>
  );
};

export const Body = (props) => {
  const { body } = props;
  return (
    <p>
      {body}
    </p>
  );
};
