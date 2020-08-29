import React, { Component } from "react";
import FormInput from "../commonComponents/formInput";
import "./style.css";
class UserBasicInfo extends Component {
  constructor(props) {
    super(props);
  }

  handleUserChange = (event, attribute) => {
    let value = event.target.value;
    this.props.onChange(attribute, value);
  };
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
          onChange={this.handleUserChange}
          attribute="id"
        />
        <FormInput
          value={user.name}
          name={`user-${user.id}-name`}
          label="Name: "
          inputType="text"
          inputId={`user-${user.id}-name`}
          onChange={this.handleUserChange}
          attribute="name"
        />
        <FormInput
          value={user.email}
          name={`user-${user.id}-email`}
          label="E-Mail: "
          inputType="email"
          inputId={`user-${user.id}-email`}
          onChange={this.handleUserChange}
          attribute="email"
        />
      </div>
    );
  }
}

export default UserBasicInfo;
