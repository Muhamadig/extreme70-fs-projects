import React, { Component } from "react";
import FormInput from "./../commonComponents/formInput";
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let user = this.props.data;
    return (
      <div>
        <FormInput
          value={user.id}
          name={`user-${user.id}-id`}
          label="ID: "
          inputType="text"
          inputId={`user-${user.id}-id`}
          disabled={true}
        />
        <FormInput
          value={user.name}
          name={`user-${user.id}-name`}
          label="Name: "
          inputType="text"
          inputId={`user-${user.id}-name`}
        />
        <FormInput
          value={user.email}
          name={`user-${user.id}-email`}
          label="E-Mail: "
          inputType="email"
          inputId={`user-${user.id}-email`}
        />
      </div>
    );
  }
}

export default User;
