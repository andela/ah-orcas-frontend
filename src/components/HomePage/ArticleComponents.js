import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import baseUrl from '../../constants/url';
import { ReadMore, WELCOME_NOTE } from '../../constants/articles';

const URL = `${process.env.URL}/article/`;


export const Title = props => (
  <div>
    <a href={URL} className="title">
      {
      props.title
    }
    </a>
  </div>
);

export const ArticleContainer = props => (
  <div className="card-container articlecard">
    <div className="card-columns">
      {props.newArticles}
    </div>
  </div>
);

export const Image = props => (
  <img className="card-img-top" alt="" src="https://picsum.photos/800/200?random" />
);


export const Description = (props) => {
  const { slug } = props;
  return (
    <div className="lead">
      <p className="text-left description">
        {props.description}
        <Link to={`/article/detail/${slug}`}>
          <button onClick={() => (localStorage.setItem('slug', slug))} type="button" className="btn" style={{ background: '#009688' }}>
            {ReadMore}
          </button>
        </Link>
      </p>
    </div>
  );
};

export const Userimage = props => (
  <img alt="" className="img-rounded userimage" src={props.userimage} />
);
export const Username = props => (
  <a className="small username title" href={URL}>
    {props.username}
  </a>
);

export const TimeCreated = props => (
  <span className="small time">{props.time}</span>
);

class Intro extends React.Component {
  stat={
    display: 'block',
  }

  componentDidMount() {
    setTimeout(
      () => {
        this.setState({ display: 'none' });
      },
      8000,
    );
  }

  render() {
    return (
      <div className="top" style={this.state}>
        <h1 className="intro-text anim-typewriter">{WELCOME_NOTE}</h1>
      </div>
    );
  }
}


export const IntroComponent = Intro;

export default Title;

// export default connect(mapStateToProps, mapDispatchToProps)(View);
