import React, { Component } from 'react';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
  }

  handleInputChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleInputSubmit = event => {
    event.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(newPost => {
        console.log(newPost);
      });
  };

  render() {
    return (
      <form>
        <h1>Add Post</h1>
        <div>
          <label>Title:</label>
          <br />
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>Body:</label>
          <br />
          <textarea
            name="body"
            value={this.state.body}
            onChange={this.handleInputChange}
          />
        </div>
        <br />
        <button type="submit" onClick={this.handleInputSubmit}>
          Submit
        </button>
        <hr />
      </form>
    );
  }
}

export default PostForm;
