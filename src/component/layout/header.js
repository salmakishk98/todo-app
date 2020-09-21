import React from "react";

export default function Header() {
  return (
    <header style={header_style}>
      <h1> Todo APP </h1>
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
