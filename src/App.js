import React from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";

function App() {
  const show = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      {show && <Header />}
      {!show && <Auth />}
      <Counter />
    </>
  );
}

export default App;
