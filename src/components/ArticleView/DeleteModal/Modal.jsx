import React from 'react';
import './app.scss';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteArticleApi } from '../../../actions/articles.action';


class Modal extends React.Component {
  handleDelete =() => {
    const { dispatch, data } = this.props;
    dispatch(deleteArticleApi(data.slug));
  }

  render() {
    const { title, deleteReducer } = this.props;
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="exampleModalLabel"
                style={{
                  color: 'red',
                }}
              >
              Delete
                {' '}
                {title}
                {}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            {deleteReducer.deleted ? (
              <div className="modal-body" style={{ color: '#22aaae' }}>
              Deleted!!
              </div>
            ) : (
              <div className="modal-body">
              Are sure you want to delete this article??
              </div>
            )}
            <div className="modal-footer">
              <button
                type="button"
                className="btn cancel"
                data-dismiss="modal"
              >
              Cancel
              </button>
              {deleteReducer.isDeleting ? (
                <button type="button" className="btn del" onClick={this.handleDelete}>
                Deleting....
                </button>
              ) : (
                <button type="button" onClick={this.handleDelete} className="btn del" style={{ color: 'ghostwhite' }}>
                Delete
                </button>
              )}
            </div>
          </div>
        </div>
      </div>


    );
  }
}

Modal.propTypes = {
  data: {},
  title: propTypes.string,
  deleteReducer: propTypes.object,
};

Modal.defaultProps = {
  data: {},
  title: '',
  deleteReducer: {},
};

const mapStateToProps = ({ deleteReducer }) => ({
  deleteReducer,
});
Modal.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  handleDelete: propTypes.func,
};
Modal.propTypes = {
  dispatch: propTypes.func.isRequired,
};
Modal.defaultProps = {
  handleDelete: propTypes.func,
};

export default connect(mapStateToProps)(Modal);
