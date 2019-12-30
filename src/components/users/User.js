import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";

export default class User extends Component {
  componentDidMount() {
    // console.log(this.props);
    const { getUser, match, getUserRepos } = this.props;
    getUser(match.params.login);
    getUserRepos(match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    repos: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired
  };

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      company,
      blog,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;

    const { loading, repos } = this.props;

    if (loading) return <Spinner />;

    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          返回
        </Link>
        是否在职：{""}
        {hireable ? (
          <i className="fa fa-check text-success" />
        ) : (
          <i className="fa fa-times-circle text-danger" />
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              className="round-img"
              style={{ width: "100px" }}
              alt=""
            />
            <h1>{name}</h1>
            <p>所在地：{location ? location : "未知"}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>个人简介</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className="btn btn-dark my-1">
              访问
            </a>
            <ul>
              <li>
                <Fragment>
                  <strong>公司：</strong>
                  <span>{company ? company : "未知"}</span>
                </Fragment>
              </li>
              <li>
                <Fragment>
                  <strong>网址：</strong>
                  <span>{blog ? blog : "未知"}</span>
                </Fragment>
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers:{followers}</div>
          <div className="badge badge-success">Following:{following}</div>
          <div className="badge badge-light">Public Repos:{public_repos}</div>
          <div className="badge badge-dark">Public Gists:{public_gists}</div>
        </div>
        <Repos repos={repos} />
      </Fragment>
    );
  }
}
