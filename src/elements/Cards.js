import React from "react";

import propTypes from "prop-types";

export default function Cards(props) {
  const className = ["tiles-item"];
  className.push(props.className);
  return (
    <div className={className.join(" ")}>
      <div
        className={`tiles-item-inner ${props.hasShadow ? " has-shadow" : ""}`}
      >
        {props.children}
      </div>
    </div>
  );
}

Cards.propTypes = {
  hasShadow: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node.isRequired,
};
