// import React from 'react';
// import './App.scss';
// import propTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { addTags } from '../../actions/articles.action';
//
// const Tag = (props) => {
//   const { addtags, text, clearTag } = props;
//   return (
//     <button onClick={(e) => { addtags(text); clearTag(); }} style={{ background: '#009688' }} className="btn" type="button">Add Tag</button>
//   );
// };
//
// function mapDispatchToProps(dispatch) {
//   return {
//     addtags: bindActionCreators(addTags, dispatch),
//   };
// }
//
// export default connect(null, mapDispatchToProps)(Tag);
