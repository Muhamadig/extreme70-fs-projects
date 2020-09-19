import React, { Component } from "react";
class AddNewUSer extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        username: "",
        email: "",
        address: {
          street: "",
          city: "",
          zipcode: "",
        },
      },
    };
  }

  updateForm = (e, key) => {
    let value = e.target.value;
    let { user } = { ...this.state };
    user[key] = value;
    this.setState({ user });
  };
  render() {
    return (
      <div className="add-new-user">
        <div className="title">Add New User</div>
        <div className="">
          <form
            className="add-new-user-form"
            onSubmit={(e) =>
              this.props.handleAddNewUser(e, { ...this.state.user })
            }
          >
            <div className="add-new-user-form-input">
              <label htmlFor="add-userFullName">Full Name:</label>
              <input
                type="text"
                name="add-userFullName"
                id="add-userFullName"
                onChange={(e) => this.updateForm(e, "name")}
              />
            </div>
            <div className="add-new-user-form-input">
              <label htmlFor="add-username">Username:</label>
              <input
                type="text"
                name="add-username"
                id="add-username"
                onChange={(e) => this.updateForm(e, "username")}
              />
            </div>
            <div className="add-new-user-form-input">
              <label htmlFor="add-email">E-mail:</label>
              <input
                type="email"
                name="add-email"
                id="add-email"
                onChange={(e) => this.updateForm(e, "email")}
              />
            </div>
            <div className="form-buttons">
              <button
                className="button cancel"
                type="reset"
                onClick={(e) => this.props.onCancel(e)}
              >
                Cancel
              </button>
              <button className="button submit" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddNewUSer;
