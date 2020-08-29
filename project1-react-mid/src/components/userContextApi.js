import React from "react";
const UserContextApi = React.createContext();

const UserProvider = UserContextApi.Provider;
const UserConsumer = UserContextApi.Consumer;
export { UserProvider, UserConsumer };
