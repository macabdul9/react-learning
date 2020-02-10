import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";

import "./NewPost.css";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Max"
  };
  postDataHandler = props => {
    const post = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author
    };
    axios
      .post("http://jsonplaceholder.typicode.com/posts/", post)
      .then(response => {
        console.log(response);
      });
  };

  render() {
    return (
      <div className="NewPost">
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={event => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={event => this.setState({ author: event.target.value })}
        >
          <option value="Mac">Mac</option>
          <option value="Abdul">Abdul</option>
          <option value="Waheed">Waheed</option>
          <option value="Robert">Robert</option>
        </select>
        <Button
          variant="contained"
          color="primary"
          onClick={this.postDataHandler}
        >
          Add Post
        </Button>
      </div>
    );
  }
}

export default NewPost;
