import React from "react";
import { UserProvider } from "./UserContext.jsx";
import UserProfile from "./practice/UserProfile.jsx";

const App = () => {
  return (
    <UserProvider>
      <UserProfile />
    </UserProvider>
  );
};

export default App;
