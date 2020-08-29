import React from "react";
import FormInput from "../commonComponents/formInput";
import "./style.css";
import { UserConsumer } from "./userContextApi";
const UserBasicInfo = () => {
  return (
    <UserConsumer>
      {(user) => {
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
      }}
    </UserConsumer>
  );
};

export default UserBasicInfo;
