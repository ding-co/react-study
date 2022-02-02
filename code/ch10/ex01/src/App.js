import React from "react";
import "./App.css";
import PropTypes from "prop-types";

function App({ name, using, status }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{using ? "used here" : "not used here"}</p>
      <h3>We&apos;re {status === "Open" ? "Open!" : "Closed!"}</h3>
    </div>
  );
}

App.propTypes = {
  name: PropTypes.any.isRequired,
  using: PropTypes.bool,
  status: PropTypes.oneOf(["Open", "Closed"])
};

export default App;
