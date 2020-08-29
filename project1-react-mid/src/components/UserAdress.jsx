import React from "react";
import FormInput from "./../commonComponents/formInput";
import "./style.css";
import { UserConsumer } from "./userContextApi";
const UserAddress = () => {
  return (
    <UserConsumer>
      {(user) => {
        return (
          <div className="user-other-data">
            <FormInput
              value={user.address.street}
              name={`user-${user.id}-street`}
              label="Street: "
              inputType="text"
              inputId={`user-${user.id}-street`}
            />
            <FormInput
              value={user.address.city}
              name={`user-${user.id}-city`}
              label="City: "
              inputType="text"
              inputId={`user-${user.id}-city`}
            />
            <FormInput
              value={user.address.zipcode}
              name={`user-${user.id}-zipcode`}
              label="ZIP Code: "
              inputType="text"
              inputId={`user-${user.id}-zipcode`}
            />
          </div>
        );
      }}
    </UserConsumer>
  );
};

export default UserAddress;
