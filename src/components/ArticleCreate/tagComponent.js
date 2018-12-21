import React from 'react';
import './App.scss';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTags, removeTags } from '../../actions/tags.action';


class TagInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      tags: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      tags: nextProps.tags,
    });
  }


  handleInputChange(evt) {
    this.setState({ input: evt.target.value });
  }

  handleInputKeyDown(evt) {
    if (evt.keyCode === 13) {
      const { value } = evt.target;
      const { addtags } = this.props;

      addtags(value);
      this.setState({
        input: '',
      });
    }
  }

  handleRemoveItem(index) {
    return () => {
      this.setState(state => ({
        items: state.filter((item, i) => i !== index),
      }));
    };
  }

  render() {
    const { title, handlechange, removetags, TitleHint } = this.props;
    const { input, tags } = this.state;
    return (
      <div style={{ float: 'left', width: '100%' }}>
        <div className="form-group">
          <span htmlFor="tag">
            {tags.map((tag, i) => (
              <span
                className="badge"
                tabIndex={0}
                role="button"
                onKeyDown={null}
                style={{ marginTop: '0.5%',
                  marginLeft: '0.2%',
                  fontSize: '1.3rem',
                  background: '#2ebaae' }}
                onClick={() => (removetags(i))}
              >
                {tag}
                <span>(x)</span>
              </span>
            ))}
          </span>
          <div className="row">
            <input
              name="title"
              value={title}
              onChange={handlechange}
              className="form-control description"
              placeholder={TitleHint}
              style={{
                border: '1px solid',
                marginLeft: '1.5%',
                marginTop: '1%',
                marginRight: '2%',

                width: '47%' }}
            />
            <input
              value={input}
              name="tag"
              placeholder="add a tag"
              style={{
                border: '1px solid',
                margin: '1%',
                width: '47%' }}
              className="form-control description"
              onChange={this.handleInputChange}
              onKeyDown={this.handleInputKeyDown}
            />
          </div>
        </div>
      </div>
    );
  }
}

TagInput.propTypes = {
  title: propTypes.string,
  TitleHint: propTypes.string,
  handlechange: propTypes.func,
  addtags: propTypes.func,
  removetags: propTypes.func,
  tags: propTypes.array,
};

TagInput.defaultProps = {
  title: '',
  TitleHint: '',
  handlechange: propTypes.func,
  addtags: propTypes.func,
  removetags: propTypes.func,
  tags: [],
};

function mapStateToProps(state) {
  return {
    tags: state.tags,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    addtags: bindActionCreators(addTags, dispatch),
    removetags: bindActionCreators(removeTags, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TagInput);
