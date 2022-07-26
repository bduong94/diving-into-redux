import classes from "./Header.module.css";
import { authActions } from "../store";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  const navElements = show && (
    <nav>
      <ul>
        <li>
          <a href="/">My Products</a>
        </li>
        <li>
          <a href="/">My Sales</a>
        </li>
        <li>
          <button onClick={logoutHandler}>Logout</button>
        </li>
      </ul>
    </nav>
  );
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {navElements}
    </header>
  );
};

export default Header;
