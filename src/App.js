import React from "react";
import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const show = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Header />
      {!show && <Auth />}
      {show && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
