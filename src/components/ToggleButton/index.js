import React from "react";
import { connect } from "react-redux";
import { check, uncheck } from "../../actions";

import "./style.css";

function ToggleButton(props) {
  const btn = props.state.filter((btn) => btn.text === props.text)[0]
  // const checked = btn.checked || false
  return (
    <div className="toggle-container">
      <input
        className="toggle"
        type="checkbox"
        id={props.text}
        checked={btn ? btn.checked:false}
        onChange={(e) => {
          if (e.target.checked === true) {
            props.check(props.text);
          } else {
            props.uncheck(props.text);
          }
        }}
      />
      <label htmlFor={props.text} className="label">
        <div className="ball"></div>
      </label>
      <span>{props.text}</span>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps, { check, uncheck })(ToggleButton);
