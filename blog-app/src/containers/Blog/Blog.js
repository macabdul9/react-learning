import React, { Component } from "react";
// import axios from 'axios';
import "./Blog.css";
import FullPost from '../FullPost/FullPost';

import Posts from "../Posts/Posts";
import NewPost from "../NewPost/NewPost";

import { Route, NavLink, Switch, Redirect } from "react-router-dom";

class Blog extends Component {
  render() {

    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink 
                    to="/" 
                    exact
                    activeClassName='my-active'
                    activeStyle={{
                        color:'green',
                        textDecoration:'underline'
                    }}>Home</NavLink>
              </li>
              <li>
                <NavLink to={{
                    pathname: '/new-post',
                    hash:'#submit',
                    search:'?quick-submit=true'
                }}>New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path='/' exact render={()=><h1>Home</h1>} /> */}
        <Route path="/" exact component={Posts} />
        <Switch>
            <Route path="/new-post" exact component={NewPost} />
            <Route path="/:id" exact component={FullPost} />
        </Switch>

      </div>
    );
  }
}

export default Blog;
