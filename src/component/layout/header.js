import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={header_style}>
      <h1> Todo APP </h1>
      <Link style={{ color: "#fff" }} to="/">
        HOME
      </Link>
      |
      <Link to="/about" style={{ color: "#fff" }}>
        {" "}
        ABOUT{" "}
      </Link>
    </header>
  );
}
const header_style = {
  //color of space backward
  background: "#333",
  //color of text
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};
