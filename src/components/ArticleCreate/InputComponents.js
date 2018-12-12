import React from 'react';
import './App.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { TitleHint } from '../../constants/articles';

export const TitleInputComponent = (props) => {
  const { title, handlechange } = props;
  return (
    <div className="form-group-lg title-input">
      <input name="title" value={title} onChange={handlechange} className="form-control" placeholder={TitleHint} />
    </div>
  );
};

export const DescriptionInputComponent = (props) => {
  const { description, handlechange } = props;
  return (
    <div className="form-group-lg description-input">
      <input name="description" value={description} onChange={handlechange} className="form-control" placeholder="description" />
    </div>
  );
};

// export const TagList = (props) => {
//   const { tags } = props;
//   const tagslist = tags.map(tag => (
//     <div><li style={{ display: 'inline' }}>{tag.tag}</li></div>
//
//   ));
//   return (
//     <div>
//       {tagslist}
//     </div>
//   );
// };

export const BodyinputComponent = (props) => {
  const { body, handlechange, tags, cleardata, postArticle, data } = props;
  return (
    <div className="form-control-lg body-input">
      <textarea name="body" onChange={handlechange} value={body} className="form-control " placeholder="body" />
      <button onClick={(e) => { postArticle(data); cleardata(); }} type="submit" className="publish-btn btn btn-primary">Publish</button>
    </div>);
};
