import React from "react";
import { NavLink } from "react-router-dom";


const linkStyles = {
    display: "inline-block",
    width: "auto",
    padding: "10px 20px",
    margin: "0 6px 6px",
    background: "pink",
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
  };
  
  function NavBar() {
    return (
      <div className="navbar">
        <NavLink
          to="/"
          exact
          style={linkStyles}
          activeStyle={{
            background: "turquoise",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/moodboard"
          exact
          style={linkStyles}
          activeStyle={{
            background: "turquoise",
          }}
        >
          Mood Board
        </NavLink>
        <NavLink
          to="/to-do-list"
          exact
          style={linkStyles}
          activeStyle={{
            background: "turquoise",
          }}
        >
          To-Do List 
        </NavLink>
      </div>
    );
  }

  export default NavBar;