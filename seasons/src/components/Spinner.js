import React from "react";

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh"
};

const Spinner = props => {
  return (
    <div style={style} className="ui active dimmer">
      <div className="ui large text loader">{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: 'loading ...'
}

export default Spinner;
