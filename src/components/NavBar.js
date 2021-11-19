import React from "react";
import { NavLink } from "react-router-dom";


const linkStyles = {
    display: "inline-block",
    width: "auto",
    padding: "5px 20px",
    margin: "0px",
    background: "#b7d9f7",
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
            background: "#60819e",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/moodboard"
          exact
          style={linkStyles}
          activeStyle={{
            background: "#60819e",
          }}
        >
          Mood Board
        </NavLink>
        <NavLink
          to="/to-do-list"
          exact
          style={linkStyles}
          activeStyle={{
            background: "#60819e",
          }}
        >
          To-Do List 
        </NavLink>
      </div>
    );
  }

  export default NavBar;