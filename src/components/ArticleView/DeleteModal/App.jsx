import React from 'react';
import propTypes from 'prop-types';
import Modal from './Modal';

const App = (props) => {
  const { title, data } = props;
  return (
    <div>
      <Modal title={title} data={data} />
    </div>
  );
};

App.propTypes = {
  title: propTypes.string,
  data: propTypes.object,
};

App.defaultProps = {
  title: '',
  data: {},
};


export default App;
