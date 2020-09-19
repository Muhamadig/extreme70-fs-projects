import React, { Component } from "react";
class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  getTitleValue = (e) => {
    let value = e.target.value;
    this.setState({ title: value });
  };
  render() {
    return (
      <div className="add-new-task">
        <div className="title">Add New Task</div>
        <form
          className="task-form"
          onSubmit={(e) => this.props.onAdd(e, this.state.title)}
        >
          <div>
            <label htmlFor="tasks-title">Title: </label>
            <input
              type="text"
              id="tasks-title"
              name="tasks-title"
              onChange={this.getTitleValue}
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
