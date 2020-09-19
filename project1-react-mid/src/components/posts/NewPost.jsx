import React, { Component } from "react";
class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "" };
  }

  getFormValue = (e, key) => {
    let value = e.target.value;
    let state = { ...this.state };
    state[key] = value;
    this.setState(state);
  };
  render() {
    return (
      <div className="add-new-post">
        <div className="title">Add New Post</div>
        <form
          className="post-form"
          onSubmit={(e) => this.props.onAdd(e, { ...this.state })}
        >
          <div>
            <label htmlFor="posts-title">Title: </label>
            <input
              type="text"
              id="posts-title"
              name="posts-title"
              onChange={(e) => this.getFormValue(e, "title")}
            />
          </div>
          <div>
            <label htmlFor="posts-body">Body: </label>
            <input
              type="text"
              id="posts-body"
              name="posts-body"
              onChange={(e) => this.getFormValue(e, "body")}
            />
          </div>

          <div className="form-buttons">
            <button
              type="reset"
              className="button cancel"
              onClick={(e) => this.props.onCancel(e)}
            >
              Cancel
            </button>
            <button type="submit" className="button submit">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewPost;
