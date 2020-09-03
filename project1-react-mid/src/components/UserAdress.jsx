import React, { Component } from "react";
import FormInput from "./../commonComponents/formInput";
import "./style.css";
import { UserConsumer } from "./userContextApi";
class UserAddress extends Component {
  constructor(props) {
    super(props);
  }

  handleAddressChange = (event, attribute) => {
    let value = event.target.value;
    let address = { ...this.props.data.address };
    address[attribute] = value;
    this.props.onChange("address", address);
  };
  render() {
    let user = this.props.data;
    return (
      <div className="user-other-data">
        <FormInput
          value={user.address.street}
          name={`user-${user.id}-street`}
          label="Street: "
          inputType="text"
          inputId={`user-${user.id}-street`}
          onChange={this.handleAddressChange}
          attribute="street"
        />
        <FormInput
          value={user.address.city}
          name={`user-${user.id}-city`}
          label="City: "
          inputType="text"
          inputId={`user-${user.id}-city`}
          onChange={this.handleAddressChange}
          attribute="city"
        />
        <FormInput
          value={user.address.zipcode}
          name={`user-${user.id}-zipcode`}
          label="ZIP Code: "
          inputType="text"
          inputId={`user-${user.id}-zipcode`}
          onChange={this.handleAddressChange}
          attribute="zipcode"
        />
      </div>
    );
  }
}

export default UserAddress;
