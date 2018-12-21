import React from 'react';

const TagList = (props) => {
  const { tags } = props;
  let tagList = null;
  if (tags !== null) {
    tagList = tags.map(tag => (
      <span
        className="badge"
        tabIndex={0}
        role="button"
        onKeyDown={null}
        style={{ marginTop: '0.5%',
          marginLeft: '0.2%',
          fontSize: '1.3rem',
          background: '#2ebaae' }}
      >
        {tag}
      </span>
    ));
  }
  return (
    tagList
  );
};

export default TagList;
