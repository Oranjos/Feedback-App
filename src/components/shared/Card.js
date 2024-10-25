import React from "react";
import PropTypes from "prop-types";

function Card({ children, reverse }) {
  // Conditional class style
  //   return <div className={`card ${reverse && "reverse"}`}>{children}</div>;

  // Conditional styles
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
}

// Because defaultProps is deprecated
// Card.defaultProps = {
//   reverse: false,
// };
//
Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
