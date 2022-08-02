import React, { useContext } from "react";
import logo from "./assets/react.svg";
import { AppContext } from "./App";

function Header() {
  const context = React.useContext(AppContext);
  return (
    <nav className={context.darkMode ? "dark" : ""}>
      <img className="nav--logo_icon" src={logo} />
      <h3 className="nav--logo_text">ReactFacts</h3>

      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={context.toggleDark}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}

export default Header;
